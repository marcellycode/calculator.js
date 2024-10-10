// tailwind.config.js
module.exports = {
  content: [
    './*.{html,js}',  // Certifique-se de que está apontando para o diretório correto
    './index.html',          // Caso tenha um arquivo HTML na raiz
  ],
  theme: {
    extend: {
      colors: {
        'body': '#ecf0f3',
        'cal':'#f0f0f0'
      },
    },
  },
  plugins: [],
};
