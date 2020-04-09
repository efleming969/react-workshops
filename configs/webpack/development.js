const Common = require( "./common" )

module.exports = {
    mode: "development",
    entry: Common.entry,
    resolve: Common.resolve,
    devtool: "cheap-module-eval-source-map",
    module: Common.module,
    plugins: Common.plugins,
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
}
