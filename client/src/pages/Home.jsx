import React, { useState, useEffect } from 'react';

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import Card from '../components/Card';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const { address, contract, getAdminPost } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getAdminPost();
    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (

    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      posts={posts}
    />
  );
};

export default Home;