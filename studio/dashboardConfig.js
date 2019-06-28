export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d16579cb9250555b76f3cd4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oah2o6j1',
                  apiId: 'f501c203-c57b-4f30-a66b-aaf3218d11d2'
                },
                {
                  buildHookId: '5d16579ce2c29e2b9f5ed70e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-53kip23v',
                  apiId: '7e79d6e6-6724-4cf2-b41e-58bc040ca6e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lavinj87/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-53kip23v.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
