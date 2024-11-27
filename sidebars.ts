import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


 const sidebars: SidebarsConfig = {
  // Define the tutorialSidebar manually
  apiSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Intro',      
      
    },
    {
      type: 'doc',
      id: 'scopes', 
      label: 'Scopes',      
      
    },
    {
      type: 'category',
      label: 'Login',
      collapsible: true,
      collapsed: false,
      items: [        
        {
          type: 'doc',
          id: 'login/phone', 
          label: 'Phone',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: 'login/phoneOTP', 
          label: 'Phone OTP',
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
      collapsed: false,
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
      collapsed: false,
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
          id: 'transactions/TransactionsAllPaginator', 
          label: 'Transactions - Paginator',
          customProps: {
            method: 'GET',
          },
          
        },
        {
          type: 'doc',
          id: 'transactions/TransactionsIndividual', 
          label: 'Transaction - individual',
          customProps: {
            method: 'GET',
          },
          
        },
       ],
    }, 
  ],
};

export default sidebars;

