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
    return (
        <div>DetailesAdmin</div>
    );
}

export default DetailesAdmin;