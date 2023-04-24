import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { loader } from '../assets';
import Card from '../components/Card';



const DisplayAdmin = ({ title, isLoading, posts, isAdmin = false }) => {
    const [sortedPosts, setSortedPosts] = useState([]);
    const navigate = useNavigate();





    let postt = posts.filter((item, index) => {
        // Keep all items except for the one with title 'sge4g w4twt'
        return item.title !== ('Et sed id ullam cul' || 'Drug abuse at Kozhikode') && item.showPolice !== false;
    });

    useEffect(() => {

        //console.log(temp);





        let postsWithTimestamps = postt?.map((post) => {
            const postTime = (new Date((parseInt(post?.postTime.toString())) * 1000));;
            const eventTime = (new Date((parseInt(post?.eventTime.toString())) * 1000));;
            const image = post?.image;

            return { ...post, postTime, eventTime, image: image, };
        });
        postsWithTimestamps = postsWithTimestamps.sort((a, b) => b.postTime - a.postTime);
        console.log(postsWithTimestamps);

        setSortedPosts(postsWithTimestamps);
    }, [posts]);


    const handleNavigate = (post) => {
        console.log("post");
        console.log(post.eventTime);
        navigate(`/admin-post-details/${post.title}`, { state: post });
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

                    handleClick={() => handleNavigate(post)
                    }
                />)}
            </div>
        </div>
    );
};

export default DisplayAdmin;