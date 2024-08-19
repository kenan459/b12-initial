const isProdEnv = process.env.NODE_ENV === 'production'

module.exports = {
  flags: {
    // FAST_DEV: true,
    DEV_SSR: true,
  },
  siteMetadata: {
    siteUrl: 'https://www.b12.io',
    title: 'The easiest AI website builder',
    description:
      'Instantly generate a personalized website using AI. Launch for free with the tools you need to grow.',
    author: 'B12',
    email: 'hello@b12.io',
    social_links: {
      twitter: 'https://twitter.com/b12',
      facebook: 'https://www.facebook.com/TeamB12',
      youtube: 'https://www.youtube.com/@b12io',
      instagram: 'https://www.instagram.com/b12io',
      linkedin: 'https://www.linkedin.com/company/b12-',
    },
  },
  plugins: [
    // TODO: uncomment when we start using it
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //     publicPath: 'admin-gatsby',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMaps: false,
      },
    },
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `@rstacruz/gatsby-remark-component`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
              backgroundColor: 'none',
              quality: 75,
              withWebp: true,
              disableBgImageOnAlpha: true,
            },
          },
        ],
      },
    },
    'gatsby-transformer-remark-frontmatter',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.b12.io`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KNM7DP',
        includeInDevelopment: false,
        gtmAuth: isProdEnv ? 'm5vOKq_s2WcMgbuVZSd4Xg' : 'IZ82wVoVf5_Fk6tcitix1w',
        gtmPreview: isProdEnv ? 'env-1' : 'env-83',
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    // Data
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'people',
        path: './src/data/people',
      },
      __key: 'people',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'testimonials',
        path: './src/data/testimonials',
      },
      __key: 'testimonials',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/assets/uploads/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `popup-forms`,
        path: `${__dirname}/src/data/popup-forms/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `case-studies`,
        path: './src/data/case-studies/',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `free-draft`,
        path: `${__dirname}/src/data/free-draft/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `free-draft-legacy`,
        path: `${__dirname}/_free_draft/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landing-pages`,
        path: `${__dirname}/src/data/landing-pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product-pages`,
        path: `${__dirname}/src/data/product_pages/`,
      },
    },
  ],
}
