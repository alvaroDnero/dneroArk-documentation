import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


 const sidebars: SidebarsConfig = {
  // Define the tutorialSidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Login',
      collapsible: true,
      collapsed: false,
      items: [        
        {
          type: 'doc',
          id: 'login/LoginPhone', // This should match the id in the doc frontmatter
          label: 'Phone',
          customProps: {
            method: 'POST',
          },
          
        },
      ],
    }, // Cierre correcto de la categoría
  ],
};

export default sidebars;

