const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        src:['./src/index.js','./src/database.js']
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}

