import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import { Paths } from './src/constants/paths';


 const sidebars: SidebarsConfig = {
  // Define the tutorialSidebar manually
  apiSidebar: [
    {
      type: 'doc',
      id: Paths.overview,
      label: 'Overview',      
       
    },
    {
      type: 'doc',
      id: Paths.parameters,
      label: 'parameters',      
      
    },
    {
      type: 'doc',
      id: Paths.paginator,
      label: 'Paginator',      
      
    },
    {
      type: 'doc',
      id: Paths.coinStatuses,
      label: 'Coin Statuses',      
      
    },
    {
      type: 'doc',
      id: Paths.scopes, 
      label: 'Scopes',      
      
    },
    {
      type: 'category',
      label: 'Login & Logout',
      collapsible: true,
      collapsed: true,
      items: [        
        
        {
          type: 'doc',
          id: 'login/phoneOTP', 
          label: Paths.otp,
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: Paths.phone, 
          label: 'login',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: Paths.updateToken, 
          label: 'Update Tokens',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: Paths.logout, 
          label: 'Logout',
          customProps: {
            method: 'POST',
          },
          
        },
      ],
      
    }, 
    {
      type: 'category',
      label: 'User',
      collapsible: true,
      collapsed: true,
      items: [  
        {
          type: 'doc',
          id: Paths.user, 
          label: 'User',
          customProps: {
            method: 'GET',
          },
          
        },
       ],
    }, 
    {
      type: 'category',
      label: 'Transactions',
      collapsible: true,
      collapsed: true,
      items: [  
        {
          type: 'doc',
          id: Paths.transactionsAll, 
          label: 'Transactions',
          customProps: {
            method: 'GET',
          },
          
        },
        
        {
          type: 'doc',
          id: Paths.transactionIndividual, 
          label: 'Transaction',
          customProps: {
            method: 'GET',
          },
          
        },
       ],
    }, 
    {
      type: 'category',
      label: 'Notifications',
      collapsible: true,
      collapsed: true,
      items: [  
        {
          type: 'doc',
          id: Paths.notificationsAll, 
          label: 'Notifications',
          customProps: {
            method: 'GET',
          },
          
        },
        {
          type: 'doc',
          id: Paths.notificationsIndividual, 
          label: 'Notification',
          customProps: {
            method: 'GET',
          },
          
        }
       ],
    }, 

    {
      type: 'category',
      label: 'Coins',
      collapsible: true,
      collapsed: true,
      items: [  
        {
          type: 'doc',
          id: Paths.coinsAll, 
          label: 'coins',
          customProps: {
            method: 'GET',
          },
          
        },        
       ],
    }, 
  ],
};

export default sidebars;

