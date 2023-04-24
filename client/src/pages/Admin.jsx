import React, { useState, useEffect } from 'react';


import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';
import DisplayAdmin from './DisplayAdmin';

function Admin() {

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

        <DisplayAdmin
            title="All Campaigns"
            isLoading={isLoading}
            isAdmin={true}
            posts={posts}
        />
    );
    ;
}

export default Admin;