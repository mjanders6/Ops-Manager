const { Schema, model } = require('mongoose')


const db = {
    User: require('./User.js')(Schema, model),
    Asset: require('./Asset.js')(Schema, model),

}


module.exports = db