/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm press sheet, warm black ink, one print red.
        paper: '#faf7f0',
        'paper-deep': '#f2ece0',
        ink: '#16130f',
        'ink-mid': '#4a443b',
        'ink-soft': '#6e6659',
        rule: '#ded6c6',
        'rule-soft': '#ebe5d9',
        vermilion: '#b3351c',
        highlighter: '#e8dcc0',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Archivo', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        measure: '68ch',
      },
      transitionTimingFunction: {
        settle: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
