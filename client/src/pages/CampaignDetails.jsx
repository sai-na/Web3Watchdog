import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { format } from "date-fns";
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { profile1 } from '../assets';
import { BiUpvote } from "react-icons/bi";

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);



  const date = new Date();

  const formattedDate = format(date, "d MMM yyyy");






  const handleupVoteCall = async () => {
    //await upVoteCall(state.pId);


  };


  const handleDonate = async () => {
    setIsLoading(true);

    //await upVoteCall(state.pId,);

    //navigate('/');
    setIsLoading(false);
  };

  console.log(" ddd");
  console.log(state);

  return (
    <div>
      {isLoading && <Loader />}



      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={state?.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl" />

        </div>

        {/* <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div> */}
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[45px] text-white uppercase">{state?.title}</h4>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Creator</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={profile1} alt="user" className=" rounded-full object-fill" />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">{state?.owner}</h4>
                {/* <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p> */}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Description</h4>
            <p className="font-epilogue mt-4 font-normal text-[16px] text-[#808191] leading-[26px] text-justify ">
              <span className='font-bold'>Event time</span><br />{formattedDate}</p>
            <div className="mt-[20px]">

              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state?.description}</p>
            </div>
          </div>


          <div className='flex items-center gap-3 font-epilogue font-semibold text-[18px] text-white uppercase '>
            <p >Support the Creator by</p>
            <p> <span className='text-sky-500'>upvoting </span>   </p>
            <button onClick={handleupVoteCall()} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <BiUpvote />
              </span>
            </button>



          </div>

        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Donate for this platform
            </p>
            <div className="mt-[30px]">
              <input
                min={0.01}
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Back it because you believe in it.</h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
              </div>

              <CustomButton
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CampaignDetails;