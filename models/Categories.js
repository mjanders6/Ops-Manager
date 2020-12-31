module.exports = (Schema, model) => {
    const Categories = new Schema({
        // 
        Hygene: {
            type: [ String ],
            default: []
        },
        Tech: {
            type: [ String ],
            default: []
        },
        Wardrobe: {
            type: [ String ],
            default: []
        },
        Equipment: {
            type: [ String ],
            default: []
        },
        CleaningSupply: {
            type: [ String ],
            default: []
        },
        Food: {
            type: [ String ],
            default: []
        },
        SubCategory: {
            type: [ String ],
            default: []
        },
        LocationCategory: {
            type: [ String ],
            default: []
        },
        Quality: {
            type: [ String ],
            default: []
        }
    })

    return model('Categories', Categories)
}