  
const { Category } = require('../models')

module.exports = app => {
    // find in database
     app.get('/category', (req, res) => {
         Category.find({})
         .then(category => res.json(category))
         .catch(e => console.log(e))
     })
     // filter to category
     app.get('/category/:category', (req, res) => {
        Category.find({ category: req.params.category })
        .then(assets => res.json(assets))
        .catch(e => console.log(e))
    })

     // create new asset
     app.post('/category', (req, res) => {
         Category.create(req.body)
             .then(res.sendStatus(200))
             .catch(e => console.error(e))
     })
     // add category product
     app.put('/category/:id/add', (req, res) => {
        // console.log(req.body)
        Category.findByIdAndUpdate({_id: req.params.id}, { $push: { type: req.body.type } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
     // remove category product
     app.put('/category/:id/remove', (req, res) => {
        // console.log(req.body)
        Category.findByIdAndUpdate({_id: req.params.id}, { $pull: { type: req.body.type } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // deleete an asset
    app.delete('/category/:id', (req, res) => {
        Category.findByIdAndDelete(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}