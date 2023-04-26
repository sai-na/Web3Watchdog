import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import Admin from './pages/Admin';
import DisplayAdmin from './pages/DisplayAdmin';
import DetailesAdmin from './pages/DetailesAdmin';
import Sidebar2 from './components/Sidebars2';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#ffffff] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar2 />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/post-details/:id" element={<CampaignDetails />} />
          <Route path="/admin-post-details/:id" element={<DetailesAdmin />} />
          <Route path="/admin-post" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;