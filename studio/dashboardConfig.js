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
                  buildHookId: '60c2e5961ef0e895dbd64d23',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-studio-h8hxoevk',
                  apiId: 'ed398762-2952-450f-94cb-5d94eb520859'
                },
                {
                  buildHookId: '60c2e596fdf4a78fd20b9ad0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-web-rc5c56j5',
                  apiId: '9f4508c2-697b-4d7f-ae1b-e56f9c5f94a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ObiWanMaxim/sanity-nextjs-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-web-rc5c56j5.netlify.app', category: 'apps'}
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
