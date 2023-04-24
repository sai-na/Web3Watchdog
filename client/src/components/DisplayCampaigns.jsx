import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';
import Card from './Card';



const DisplayCampaigns = ({ title, isLoading, posts }) => {
  const [sortedPosts, setSortedPosts] = useState([]);
  const navigate = useNavigate();





  let postt = posts.filter((item, index) => {
    // Keep all items except for the one with title 'sge4g w4twt'
    return item.title !== 'Et sed id ullam cul';
  });

  useEffect(() => {

    //console.log(temp);





    let postsWithTimestamps = postt?.map(post => {
      const postTime = (new Date((parseInt(post?.postTime.toString())) * 1000));;
      const eventTime = (new Date((parseInt(post?.eventTime.toString())) * 1000));;


      return { ...post, postTime, eventTime };
    });
    postsWithTimestamps = postsWithTimestamps.sort((a, b) => b.postTime - a.postTime);
    setSortedPosts(postsWithTimestamps);
  }, [posts]);


  const handleNavigate = (post) => {
    navigate(`/post-details/${post.title}`, { state: post });
  };

  console.log(sortedPosts);

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({postt?.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && sortedPosts?.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && sortedPosts?.length > 0 && sortedPosts?.map((post, index) => <Card
          key={index}
          {...post}
          handleClick={() => handleNavigate(post)}
        />)}
      </div>
    </div>
  );
};

export default DisplayCampaigns;