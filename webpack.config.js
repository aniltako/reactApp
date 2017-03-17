var config = {

   entry: './main.js',
   
   output: {
      path:'/',
      filename: 'index.js',
   },
   
   devServer: {
      host: "54.234.23.64",
      inline: true,
      port: 8000
   },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
         }
      ]
   }
}

module.exports = config;