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
                  buildHookId: '5f8f6669e4fe180119d28038',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-123-sts-studio',
                  apiId: '39d45366-91a2-437f-b919-88d52e22f062'
                },
                {
                  buildHookId: '5f8f666ab040290086eaea9d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-123-sts',
                  apiId: '6ca5897f-84c8-4407-8efd-be74f0267968'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sts0mrg0/sanity-nextjs-landing-pages-123sts',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-123-sts.netlify.app', category: 'apps'}
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
