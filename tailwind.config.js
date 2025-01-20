/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        skyBlue: '#3498db',
        softPink: '#FFEFEF',
        deepBlue: '#2F3349',
        oceanBlue: '#2980b9',
        lightGray: '#EDEEF2',
        mutedBlue: '#A3AED0',
        limeGreen: '#EEFFEB',
        crimsonRed: '#D80027',
        brightBlue: '#4C7EF3',
        forestGreen: '#3F9431',
        darkBlueText: '#2B3674',
        lightGrayIcon: '#E3E5EB',
        grayBackground: '#F6F7F9',
        transparentOlive: '#308E871A',
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
      boxShadow: {
        'soft-xl': '6px 6px 54px 0px #0000000D',
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
