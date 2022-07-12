module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      backgroundImage: {
        'wave-pastel': "url('/assets/images/bg-wave-pastel.jpg')",
      },
    },
    colors: {
      'cianAP': '#33bbeb',
      'bolby-dark': '#343353',
      'bolby-light': '#fafafb',
      'bolby-red': '#ff4c61',
      'bolby-yellow': '#f8d74c',
      'bolby-purple': '#6c6ce6',
      'bolby-gray': '#494663',
      'pastel-purple': '#b8b4f1',
      'pastel-pink': '#ffaed7',
      'pastel-orange': '#fcd7d1'
    }
  },
  plugins: [],
}
