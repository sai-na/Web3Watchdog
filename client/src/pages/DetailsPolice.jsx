
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { ethers } from 'ethers';
import { format } from "date-fns";
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { profile1 } from '../assets';
import { BiUpvote } from "react-icons/bi";
function DetailsPolice() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { donate, address, updatePublic, reject } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [donators, setDonators] = useState([]);



    const date = new Date();

    const formattedDate = format(date, "d MMM ");






    const handleupVoteCall = async () => {
        //await upVoteCall(state.pId);
        setIsLoading(true);

        //await upVoteCall(state.pId,);
        await updatePublic(state.pId);
        //navigate('/');
        setIsLoading(false);
        //  updatePublic(state.pId);
        navigate('/');

    };
    const handleReject = async () => {
        //await upVoteCall(state.pId);
        setIsLoading(true);

        //await upVoteCall(state.pId,);
        await reject(state.pId);
        //navigate('/');
        setIsLoading(false);
        //  updatePublic(state.pId);
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
            <div className="overflow-x-hidden"

            >



                {/* Section 2 */}

                <div className="bg-white ">
                    <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        {/* <!-- Product --> */}
                        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                            {/* <!-- Product image --> */}
                            <div className="lg:row-end-1 lg:col-span-4">
                                {state?.title &&
                                    <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                                        <img
                                            src={state?.image}
                                            alt={state?.title}
                                            className="object-center  object-cover w-full"
                                        />
                                    </div>}
                            </div>

                            {/* <!-- Product details --> */}
                            <div className="max-w-2xl mx-auto mt-14 sm: lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                                <div className="flex flex-col-reverse">
                                    <div className="">
                                        <h1 className="text-2xl font-extrabold tracking-tight mb-2 text-gray-900 sm:text-3xl">
                                            {state?.title ? state?.title : ""}
                                        </h1>


                                    </div>
                                </div>




                                {<div className="my-2 flex-col sm:flex-row flex sm:flex-none  items-start font-bold text-gray-900 text-xl  sm:items-center ">

                                    <div className="sm:mb-0 mx-1 mb-2">Event time </div>  <div className="">{`${formattedDate} 2023`}</div></div>}
                                {state?.location && <div className="my-2 flex-col sm:flex-row flex sm:flex-none  items-start font-bold text-gray-900 text-xl  sm:items-center ">

                                    <div className="sm:mb-0 mx-1 mb-2">                    <IoLocationSharp className=" mr-1 " />
                                    </div>  <div className="">{` ${state?.location}`}</div>


                                </div>}

                                {state?.description && <div className="text-gray-500 font-medium text-base mt-6">
                                    {state?.description}
                                </div>}



                                <div className="mt-3 flex">
                                    <p className='font-extrabold font-epilogue py-3 text-lg text-sky-700 '>Make a up vote to support the reporter</p>
                                    <button

                                        onClick={() => { handleupVoteCall(state?.pId); }}
                                        type="button"
                                        className="w-[3px] flex-1 ml-4 text-white border border-transparent rounded-md py-3 px-2 flex items-center justify-center text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-sky-400  bg-sky-500    hover:bg-sky-400"
                                    >
                                        <BiUpvote size={30} />
                                    </button>

                                </div>





                            </div>
                        </div>

                        <div className="">
                            <div className='mt-4  w-[700px] bg-gray-100 rounded-xl	 prose prose-sm text-gray-900'>
                                <div className="max-w-sm p-3 sm:flex  sm:space-x-6  ">
                                    <div className="sm:flex-shrink-0 mx-auto sm:mx-0  mb-6 h-10   sm:mb-0">
                                        <img src={profile1} className="object-cover object-center w-full h-full rounded " />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div>
                                            <h2 className="text-2xl w-96 font-semibold">{state?.owner}</h2>


                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='my-8 flex items-center gap-3 font-epilogue font-semibold text-[18px] text-black uppercase '>
                            <div class="flex flex-row space-x-1">
                                <div onClick={handleupVoteCall}
                                    className="bg-green-500 shadow-lg shadow- shadow-black-600 text-black cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
                                    </svg>
                                    <span>approved </span>
                                </div>
                                <div onClick={handleReject}
                                    className="bg-red-500 text-black cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row hover:shadow-lg">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"></path></svg>
                                    <span>disapproved</span>
                                </div>
                            </div>



                        </div>




                    </div>

                </div>


            </div>


        </div >
    );
};

export default DetailsPolice;