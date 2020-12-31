const { Schema, model } = require('mongoose')


const db = {
    User: require('./User.js')(Schema, model),
    Assets: require('./Asset.js')(Schema, model),
    Categories: require('./Categories.js')(Schema, model)

}


module.exports = db