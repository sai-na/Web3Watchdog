import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract("0xdB35767119EB4c88b904deEA5Df7F20194E22A2c");
  const { mutateAsync: createPost } = useContractWrite(contract, 'createPost');
  const { mutateAsync: upvotePost, isLoading } = useContractWrite(contract, "upvotePost");
  const { mutateAsync: updatePublicView, } = useContractWrite(contract, "updatePublicView");
  const { mutateAsync: rejectPost, } = useContractWrite(contract, "rejectPost");
  const upVote = async (id) => {
    //  debugger
    try {
      const data = await upvotePost([id]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
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
        (new Date(form.time).getTime()), // time(event time),

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
      rejected: item.rejected,
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

  const donate = async (address, amount) => {
    // debugger;
    const data = await contract.call('transfer', address, ethers.utils.parseEther(amount).toString());
    // const data = await contract.call("transfer", [address, amount])
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
  const checkPolice = async (_id) => {
    const data = await contract.call("isPolice", [_id]);
  };
  const checkAdmin = async (_id) => {
    const data = await contract.call("isAdmin", [_id]);
  };
  const updatePublic = async (_id) => {
    const data = await contract.call("updatePublicView", [_id]);
  };
  const updatePolice = async (_id) => {
    const data = await contract.call("updatePoliceView", [_id]);
  };
  const reject = async (_id) => {
    const data = await contract.call("rejectPost", [_id]);
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
        getDonations,
        updatePublic,
        reject,
        checkPolice,
        updatePolice,
        checkAdmin
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);