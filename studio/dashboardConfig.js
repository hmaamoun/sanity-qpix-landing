export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d174af9fbf19a6dc708e950',
                  title: 'Sanity Studio',
                  name: 'sanity-qpix-landing-studio',
                  apiId: 'c5bdcd47-e542-4b77-acb4-63d1f66a70de'
                },
                {
                  buildHookId: '5d174af9cb813ce746b2f73a',
                  title: 'Landing pages Website',
                  name: 'sanity-qpix-landing',
                  apiId: 'ccb9e3df-f642-4a53-812e-689f7366d747'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hmaamoun/sanity-qpix-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-qpix-landing.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
