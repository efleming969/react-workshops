const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
    entry: [
        "./src/index.tsx"
    ],
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".jsx" ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: "ts-loader" }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { modules: true } }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    { loader: "file-loader" }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( { template: "./src/index.html" } )
    ]
}
