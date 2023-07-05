require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResult = await graphql(`
  query queryResult {
    allProjectsJson {
      edges {
        node {
          content {
            gallery {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(formats: WEBP, width: 1150, height: 600)
                }
                id
              }
            }
            greeting {
              images {
                alt
                id
                src {
                  childImageSharp {
                    gatsbyImageData(width: 280, height: 350, formats: WEBP)
                  }
                }
              }
            }
            intro {
              description_title
              sub_title
              title
              main_bg_image {
                alt
                src {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, formats: WEBP)
                  }
                }
              }
            }
            placeDescription {
              images {
                image {
                  alt
                  src {
                    childImageSharp {
                      gatsbyImageData(width: 600, height: 350, formats: WEBP)
                    }
                  }
                }
              }
            }
          }
          slug
          path
        }
      }
    }
    allLocale(filter: { ns: { in: ["calma-holiday-villa"] }}
    ) {
      edges {
        node {
          language
          ns
          data
        }
      }
    }
  }
`);

  queryResult.data.allLocale.edges.forEach((locale) => {
    const lang = locale.node.language
    // console.log(lang)
    queryResult.data.allProjectsJson.edges.forEach(({ node }) => {
    //   console.log(node.content)
      const project = queryResult.data.allProjectsJson.edges.find((project) => project.node.slug === locale.node.ns)
      createPage({
        path: project.node.path + '/' + project.node.slug,
        component: path.resolve('./src/templates/project-template.js'),
        context: {
          project,
        },
      })
    })
  })
}