const path = require('path');

// module.exports = {
//   mode: 'development', // Режим сборки: 'development' или 'production'
//   entry: './src/main.js', // Точка входа вашего приложения
//   output: {
//     filename: 'bundle.js', // Имя выходного файла
//     path: path.resolve(__dirname, 'dist'), // Путь для выходного файла
//   },
// };

module.exports = {
  mode: 'development', // Режим сборки: 'development' или 'production'
  entry: './src/main.js', // Точка входа вашего приложения
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  


};


