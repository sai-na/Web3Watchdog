import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract("0xc0254013616e40027a8D65442DfdC14C510759bb");
  const { mutateAsync: createPost } = useContractWrite(contract, 'createPost');
  const { mutateAsync: upvotePost, isLoading } = useContractWrite(contract, "upvotePost")

  const upVote = async (id) => {
    debugger
    try {
      const data = await upvotePost([id]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  const address = useAddress();
  const connect = useMetamask();



  //const { mutateAsync: upvotePost, isLoading } = useContractWrite(contract, "upvotePost");

  // const upVoteCall = async (_id) => {

  //   try {
  //     const data = await upvotePost();
  //     console.info("contract call successs", data);
  //   } catch (err) {
  //     console.error("contract call failure", err);
  //   }
  // };



  const publishPost = async (form) => {
    console.log(form);

    try {

      const data = await createPost([
        address, // owner
        form.title, // title
        form.description, // description
        form.location,
        form.image,
        new Date(form.time).getTime(), // time(event time),

      ]);
      console.log('contract call success', data);
    } catch (err) {
      console.log('contract call error', err);
    }



  };

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, // owner
        form.title, // title
        form.description, // description
        form.target,
        new Date(form.deadline).getTime(), // deadline,
        form.image
      ]);

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };







  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');

    const parsedCampaings = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i
    }));

    return parsedCampaings;
  };

  const getAdminPost = async () => {
    const adminPost = await contract.call('getPosts');

    const parsedAdminPosts = adminPost.map((item, i) => ({
      owner: item.owner,
      description: item.description,
      title: item.title,
      upvotes: item.upvotes,
      location: item.location,
      image: item.image,
      eventTime: item.eventTime,
      postTime: item.postTime,
      showPolice: item.showPolice,
      showPublic: item.showPublic,
      pId: i
    }));
    console.log(parsedAdminPosts);

    return parsedAdminPosts;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

    return filteredCampaigns;
  };

  const donate = async (pId, amount) => {
    const data = await contract.call('donateToCampaign', pId, { value: ethers.utils.parseEther(amount) });

    return data;
  };

  const getDonations = async (pId) => {
    const donations = await contract.call('getDonators', pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0;i < numberOfDonations;i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      });
    }

    return parsedDonations;
  };


  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        publishPost,
        upVote,
        getCampaigns,
        getAdminPost,
        getUserCampaigns,
        donate,
        getDonations
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);