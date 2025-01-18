module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3799',
        tertiary: '#3A57E8',
        secondary: '#3498db',
        secondaryHover: '#2980b9',
      },

      backgroundImage: {
        'login-bg': "url('/src/assets/images/auth/login-bg.png')",
        'primary-gradient':
          'linear-gradient(180deg, #6DE9F4 0%, #3EB1E0 0.01%, #0E77CC 100%)',
      },
    },
  },
  plugins: [],
};
