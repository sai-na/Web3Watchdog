import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import Admin from './pages/Admin';
import Campaign from './pages/Campaign'
//import DisplayPolice from './pages/Display';
import DetailesAdmin from './pages/DetailesAdmin';
import DetailesPolice from './pages/DetailsPolice';
import Sidebar2 from './components/Sidebars2';
import { useStateContext } from './context';
import Police from './pages/Police';
const App = () => {
  const { checkPolice } = useStateContext();
const  isPolice = async ()=>{
   return await checkPolice(state.pId);
}
  return (
    <div className="relative overflow-hidden sm:-8 p-4 bg-[#ffffff] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar2 />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-report" element={<CreateCampaign />} />
          <Route path="/post-details/:id" element={<CampaignDetails />} />
          <Route path="/admin-post-details/:id" element={<DetailesAdmin />} />
         {<Route path="/admin-post" element={!checkPolice?<Home/>: <Admin />} /> 
         }
         { 
         //<Route path="/admin-post" element={ <Admin />} />
         }
          {<Route path="/police-post" element={!checkPolice?<Home/>: <Police />} /> 
         }
          <Route path="/police-post-details/:id" element={<DetailesPolice />} />
          <Route path="/campaigns" element={<Campaign />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;