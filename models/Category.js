module.exports = (Schema, model) => {
    const Category = new Schema({
        // 
            type: [ String ],
            category: {
                type: String
            }
    })

    return model('Category', Category)
}