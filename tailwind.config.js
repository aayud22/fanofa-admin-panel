/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        skyBlue: '#3498db',
        oceanBlue: '#2980b9',
        white: '#FFFFFF', // Added for background
        deepBlue: '#2F3349', // Added from the code
        lightGray: '#EDEEF2', // Added from the code
        mutedBlue: '#A3AED0', // Added for user icon
        brightBlue: '#4C7EF3', // Added from the code
        darkBlueText: '#2B3674', // Added for text and icons
        grayBackground: '#F6F7F9', // Added for the user dropdown
        lightGrayIcon: '#E3E5EB', // Added for user icon background
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'login-bg': "url('/src/assets/images/auth/login-bg.png')",
        'primary-gradient':
          'linear-gradient(180deg, #6DE9F4 0%, #3EB1E0 0.01%, #0E77CC 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
