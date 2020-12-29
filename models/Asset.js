module.exports = (Schema, model) => {
    const Assets = new Schema({
        // 
        Asset: {
            type: Schema.Types.ObjectId,
            ref: ''
        },

    })

    return model('Assets', Assets)
}