import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


 const sidebars: SidebarsConfig = {
  // Define the tutorialSidebar manually
  apiSidebar: [
    {
      type: 'doc',
      id: 'intro', // This should match the id in the doc frontmatter
      label: 'Intro',      
      
    },
    {
      type: 'category',
      label: 'Login',
      collapsible: true,
      collapsed: false,
      items: [        
        {
          type: 'doc',
          id: 'login/phone', // This should match the id in the doc frontmatter
          label: 'Phone',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: 'login/phoneOTP', // This should match the id in the doc frontmatter
          label: 'Phone OTP',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: 'login/accessToken', // This should match the id in the doc frontmatter
          label: 'Update Tokens',
          customProps: {
            method: 'POST',
          },
          
        },
        {
          type: 'doc',
          id: 'login/logout', // This should match the id in the doc frontmatter
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
          id: 'home/profile', // This should match the id in the doc frontmatter
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
          id: 'transactions/TransactionsAll', // This should match the id in the doc frontmatter
          label: 'Transactions All',
          customProps: {
            method: 'GET',
          },
          
        },
       ],
    }, 
  ],
};

export default sidebars;

