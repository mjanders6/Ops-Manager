module.exports = (Schema, model) => {
    const Assets = new Schema({
        // t-shirt
        Type: {
            type: String
        },
        // wardrobe
        Category: {
            type: String
        },
        // PT
        SubCategory: {
            type: String
        },
        QTY: {
            type: Number
        },
        Cost: {
            type: Number
        },
        Quality: {
            type: String
        },
        Location: {
            type: String
        }
    })

    return model('Assets', Assets)
}