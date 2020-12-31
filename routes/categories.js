
const { Categories } = require('../models')

module.exports = app => {
    // find in database
    app.get('/categories', (req, res) => {
        Categories.find({})
            .then(category => res.json(category))
            .catch(e => console.log(e))
    })
    //Dont really need to create a full category object. was only used to initialize the first list. 
    app.post('/categories', (req, res) => {
        Categories.create({})
            .then(res.sendStatus(200))
            .catch(e => console.error(e))
    })

    // add an item
    app.put('/categories/:id/add', (req, res) => {
        // console.log(req.body)
        Categories.findByIdAndUpdate({ _id: req.params.id }, { $push: { item: req.body.anitem } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

}