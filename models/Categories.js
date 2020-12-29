module.exports = (Schema, model) => {
    const Categories = new Schema({
        // 
        Hygene: {
            type: [ String ]
        },
        Tech: {
            type: [ String ]
        },
        Wardrobe: {
            type: [ String ]
        },
        Equipment: {
            type: [ String ]
        },
        CleaningSupply: {
            type: [ String ]
        },
        Food: {
            type: [ String ]
        }
    })

    return model('Categories', Categories)
}