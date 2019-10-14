/* eslint-disable global-require */
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        cssLoaderOptions: {
          camelCase: false
        },
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-url'),
          require('postcss-custom-properties')({ preserve: false }),
          require('postcss-custom-media'),
          require('postcss-modules-scope'),
          require('autoprefixer')
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true
      }
    }
  ]
};
