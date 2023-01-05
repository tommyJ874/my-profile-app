/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'gradient-from': '#8784C4',
        'gradient-via': '#9CBFDC',
        'gradient-to': '#A6E2E8',
        // 'gradient-from': '#8784C4',
        // 'gradient-via': '#9DADBC',
        // 'gradient-to': '#9BB9D3',
        // 'gradient-from': '#71829D',
        // 'gradient-from': '#DDD7C6',
        // 'gradient-via': '#B3BBA9',
        // 'gradient-to': '#899E91',
        // 'gradient-from': '#799973',
        // 'gradient-via': '#AECFA7',
        // 'gradient-to': '#DDF8D7',
      },
    },
  },
  plugins: [],
};
