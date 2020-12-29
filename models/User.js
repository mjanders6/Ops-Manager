var passportLocalMongoose = require('passport-local-mongoose');

module.exports = (Schema, model) => {
    const User = new Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        status: {
            type: Number,
            default: 0
        },
        email: {
            type: String
        },
        aboutMe: {
            type: String
        },
        
    })
    
    User.plugin(passportLocalMongoose);
    return model('User', User)
}

