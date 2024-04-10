const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        indexPage: path.join(__dirname, 'src','index.js'),
        loginPage: path.join(__dirname, 'src','loginPage.js'),
        menuPage: path.join(__dirname, 'src','menuPage.js')
        // src:['./src/loginPage.js','./src/database.js']
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}

