import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { format } from "date-fns";
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { profile1 } from '../assets';
import { BiUpvote } from "react-icons/bi";
function DetailesAdmin() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const { donate, address,updatePublic } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [donators, setDonators] = useState([]);



    const date = new Date();

    const formattedDate = format(date, "d MMM yyyy");






    const handleupVoteCall = async () => {
     setIsLoading(true);
     updatePublic(state.pId);
        setIsLoading(false);
        navigate('/');

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
        <div className=''>
            {isLoading && <Loader />}



            <div className="w-full  flex md:flex-row flex-col mt-10 gap-[30px]">
                <div className="flex-1 flex-col">
                    <img src={state?.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl" />

                </div>

                {/* <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div> */}
            </div>

            <div className="mt-[60px]  flex lg:flex-row flex-col gap-5">
                <div className="flex-[2] flex flex-col gap-[40px]">
                    <div>
                        <h4 className="font-epilogue font-semibold text-[45px] text-black uppercase">{state?.title}</h4>
                        <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">Creator</h4>

                        <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                                <img src={profile1} alt="user" className=" rounded-full object-fill" />
                            </div>
                            <div>
                                <h4 className="font-epilogue font-semibold text-[14px] text-black break-all">{state?.owner}</h4>
                                {/* <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p> */}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">Description</h4>
                        <p className="font-epilogue mt-4 font-normal text-[16px] text-[#808191] leading-[26px] text-justify ">
                            <span className='font-bold'>Event time</span><br />{formattedDate}</p>
                        <div className="mt-[20px]">

                            <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state?.description}</p>
                        </div>
                    </div>



                    <div className='flex items-center gap-3 font-epilogue font-semibold text-[18px] text-white uppercase '>
                        <div className="flex flex-row space-x-1">
                            <div onClick={handleupVoteCall}
                                className="bg-red-500 shadow-lg shadow- shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"></path></svg>
                                <span>approved </span>
                            </div>
                            <div
                                className="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>

                                <span>disapproved</span>
                            </div>
                        </div>



                    </div>

                </div>

                <div className="flex-1">
                    <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">Fund</h4>

                    <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
                        <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
                            Donate for this platform
                        </p>
                        <div className="mt-[30px]">
                            <input
                                type="number"
                                placeholder="ETH 0.1"
                                step="0.01"
                                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />

                            <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-black">Back it because you believe in it.</h4>
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

export default DetailesAdmin;