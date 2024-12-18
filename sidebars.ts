import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import { Paths } from './src/constants/paths';
import { Labels } from './src/constants/sidebarLabels';


 const sidebars: SidebarsConfig = {
  // Define the tutorialSidebar manually
  apiSidebar: [
    {
      type: 'doc',
      id: Paths.overview,
      label: Labels.overview,      
       
    },
    {
      type: 'doc',
      id: Paths.parameters,
      label: Labels.parameters,      
      
    },
    {
      type: 'doc',
      id: Paths.paginator,
      label: Labels.paginator,      
      
    },
    {
      type: 'doc',
      id: Paths.coinStatuses,
      label: Labels.coinStatuses,      
      
    },
    
    /*{
    type: 'category',
     label: Labels.objectCategory,     
     collapsible: true,
     collapsed: true,     
     items: [
      {
        type: 'doc',
        id: Paths.userObject, 
        label: Labels.userObject,      
        
      },   
      {
        type: 'doc',
        id: Paths.phoneObject, 
        label: Labels.phoneObject,      
        
      },     
     {
       type: 'doc',
       id: Paths.balanceObject, 
       label: Labels.balanceObject,       
     },
     {
      type: 'doc',
      id: Paths.genericResponse, 
      label: Labels.genericResponse,      
      
    },

     ]
   },*/
    
    {
      type: 'category',  
          
      label: Labels.endpoint,     
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: Paths.endpoint, // Replace 'scopes' with the ID of the page you want to link
      },
      items: [
        {
          type: 'category',
          label: 'Login & Logout',
          collapsible: true,
          collapsed: true,
          items: [        
            
            {
              type: 'doc',
              id: Paths.otp, 
              label: Labels.otp,
              customProps: {
                method: 'POST',
              },
              
            },
            {
              type: 'doc',
              id: Paths.phone, 
              label: Labels.phone, 
              customProps: {
                method: 'POST',
              },
              
            },
            {
              type: 'doc',
              id: Paths.updateToken, 
              label: Labels.updateToken, 
              customProps: {
                method: 'POST',
              },
              
            },
            {
              type: 'doc',
              id: Paths.logout, 
              label: Labels.logout, 
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
              label: Labels.user, 
              customProps: {
                method: 'GET',
              },
              
            },
            {
              type: 'doc',
              id: Paths.contact, 
              label: Labels.contact, 
              customProps: {
                method: 'POST',
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
              label: Labels.transactionsAll, 
              customProps: {
                method: 'GET',
              },
              
            },
            
            {
              type: 'doc',
              id: Paths.transactionIndividual, 
              label:  Labels.transactionIndividual, 
              customProps: {
                method: 'GET',
              },
              
            },
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
              label: Labels.coinsAll, 
              customProps: {
                method: 'GET',
              },
              
            },  
            {
              type: 'doc',
              id: Paths.coinsIndividual, 
              label: Labels.coinsIndividual, 
              customProps: {
                method: 'GET',
              },
              
            },  
            {
              type: 'doc',
              id: Paths.coinsRedeem, 
              label: Labels.coinsRedeem, 
              customProps: {
                method: 'POST',
              },
              
            }, 
            {
              type: 'doc',
              id: Paths.coinsDrop, 
              label: Labels.coinsDrop, 
              customProps: {
                method: 'POST',
              },
              
            },   
            {
              type: 'doc',
              id: Paths.coinsPending, 
              label: Labels.coinsPending, 
              customProps: {
                method: 'GET',
              },
              
            },  
            {
              type: 'doc',
              id: Paths.coinsNumberToCollect, 
              label: Labels.coinsNumberToCollect, 
              customProps: {
                method: 'GET',
              },
              
            },
            {
              type: 'doc',
              id: Paths.coinRecieveWebhook, 
              label: Labels.coinRecieveWebhook, 
              customProps: {
                method: 'WEBHOOK',
              },
              
            },                 
           ],
        }, 
        
      ], 
      
    },
    {
      type: 'category',
      label: Labels.dto,     
      collapsible: true,
      collapsed: true,
      /*link: {
        type: 'doc',
        id: Paths.dto, 
      },*/
      items: [    
        
        {
          type: 'doc',
          id: Paths.userDto, 
          label: Labels.userDto,       
        },
        {
          type: 'doc',
          id: Paths.deviceInfoDto, 
          label: Labels.deviceInfoDto,       
        },
        {
          type: 'doc',
          id: Paths.balanceDto, 
          label: Labels.balanceDto,       
        },
        {
          type: 'doc',
          id: Paths.genericResponseDto, 
          label: Labels.genericResponseDto,       
        },

    
        
        {
          type: 'doc',
          id: Paths.transactionIndividualDto, 
          label: Labels.transactionIndividualDto,                  
          
        },
        {
          type: 'category',
          label: "Coins",
          collapsible: true,
          collapsed: true,
          items: [ 
            {
              type: 'doc',
              id: Paths.coinsIndividualDtoNormal, 
              label: "Sinple Coin DTO",   
            },
            {
              type: 'doc',
              id: Paths.coinsIndividualDtoVerbose, 
              label: "Verbose Coin DTO",                  
              
            },
            
          ]

        }, 
        
  
  
      ]
    },
  ],
};

export default sidebars;

