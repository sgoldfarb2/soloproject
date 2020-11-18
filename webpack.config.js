module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: __dirname + '/bundle',
        // publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        publicPath: '/bundle/',
        // contentBase: './bundle',
        proxy: {
            '/dogs': 'http://localhost:3000',
            '/newDog': 'http://localhost:3000'
        }
    },
    module: {
        rules: [ 
            {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                }
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ]
    },
}