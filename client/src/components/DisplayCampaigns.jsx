import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';
import Card from './Card';



const DisplayCampaigns = ({ title, isLoading, posts }) => {
const [sortedPosts, setSortedPosts]  = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    let temp =[]
    let s =""
   if(posts){ posts.map((post,index) => 
    s=new Date(d).getTime(),
    temp.push ({...post , postTime:s}) 
),
setSortedPosts(temp)}},[posts])


  const handleNavigate = (post) => {
    navigate(`/post-details/${post.title}`, { state: post })
  }

  console.log(sortedPosts)
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({posts.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && posts.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && posts.length > 0 && posts.map((post,index) => <Card
          key={index}
          {...post}
          handleClick={() => handleNavigate(post)}
        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns