const { Schema, model } = require('mongoose')


const db = {
    User: require('./User.js')(Schema, model),
    Assets: require('./Asset.js')(Schema, model),
    Category: require('./Category.js')(Schema, model)

}


module.exports = db