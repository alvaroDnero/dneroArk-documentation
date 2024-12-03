import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


 const sidebars: SidebarsConfig = {
  // Define the tutorialSidebar manually
  apiSidebar: [
    {
      type: 'doc',
      id: 'Overview',
      label: 'Overview',      
      
    },
    {
      type: 'doc',
      id: 'parameters',
      label: 'parameters',      
      
    },
    {
      type: 'doc',
      id: 'paginator',
      label: 'Paginator',      
      
    },
    {
      type: 'doc',
      id: 'coinsStatuses',
      label: 'Coin Statuses',      
      
    },
    {
      type: 'doc',
      id: 'scopes', 
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
          label: 'OTP',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: 'login/phone', 
          label: 'login',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: 'login/accessToken', 
          label: 'Update Tokens',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: 'login/logout', 
          label: 'Logout',
          customProps: {
            method: 'POST',
          },
          
        },
      ],
      
    }, 
    {
      type: 'category',
      label: 'Home',
      collapsible: true,
      collapsed: true,
      items: [  
        {
          type: 'doc',
          id: 'home/profile', 
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
          id: 'transactions/TransactionsAll', 
          label: 'Transactions',
          customProps: {
            method: 'GET',
          },
          
        },
        
        {
          type: 'doc',
          id: 'transactions/TransactionsIndividual', 
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
          id: 'notifications/NotificationsAll', 
          label: 'Notifications',
          customProps: {
            method: 'GET',
          },
          
        },
        {
          type: 'doc',
          id: 'notifications/NotificationsIndividual', 
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
          id: 'Coins/coinsAll', 
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

