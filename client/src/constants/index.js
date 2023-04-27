import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Create report',
    imgUrl: createCampaign,
    link: '/create-report',
  }, {
    name: 'Campaigns',
    imgUrl: createCampaign,
    link: '/campaigns',
  }



];
