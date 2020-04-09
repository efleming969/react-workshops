const Path = require( "path" )

const Common = require( "./common" )

module.exports = {
    mode: "production",
    entry: Common.entry,
    output: {
        filename: "js/bundle.[hash].min.js",
        path: Path.resolve( process.cwd(), "dist" ),
        publicPath: "/"
    },
    resolve: Common.resolve,
    module: Common.module,
    plugins: Common.plugins
}
