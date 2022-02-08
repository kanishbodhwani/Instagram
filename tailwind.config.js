module.exports = {
    content: [
      './src/pages/login.js',
      './src/pages/dashboard.js',
      './src/pages/signup.js',
      './src/pages/not-found.js',
      './src/components/header.js',
      './src/components/sidebar/index.js',
      './src/components/sidebar/user.js',
      './src/components/sidebar/suggestions.js',
      './src/components/timeline.js',
      './src/components/sidebar/suggested-profile.js',
      './src/components/post/index.js',
      './src/components/post/header.js',
      './src/components/post/actions.js',
      './src/components/post/footer.js',
      './src/components/post/comments.js',
    ],
    future: {
      removeDeprecatedGapUtilities: true
    },
    theme: {
      fill: (theme) => ({
        red: theme("colors.red.primary")
      }),
      colors: {
        white: '#ffffff',
        blue: {
          medium: "#005c98"
        },
        black: {
          light: "#262626",
          faded: "#00000059"
        },
        gray: {
          base: "#616161",
          background: "#fafafa",
          primary: "#dbdbdb"
        },
        red: {
          primary: "#ed4956"
        }
      }
    }
};

