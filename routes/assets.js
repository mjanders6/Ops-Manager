
const { Assets } = require('../models')

module.exports = app => {
    // find in database
    app.get('/assets', (req, res) => {
        Assets.find({})
            .then(assets => res.json(assets))
            .catch(e => console.log(e))
    })
    // app.get('/assets/:id', (req, res) => {
    //     Assets.findById(req.params.id)
    //         .populate('Asset')
    //         .exec((err, Asset) => {
    //             res.json(Asset)
    //         })
    // })
    app.get('/assets/:id', (req, res) => {
        Assets.findById({ _id: req.params.id })
        .then(assets => res.json(assets))
        .catch(e => console.log(e))
    })
    // create new asset
    app.post('/assets', (req, res) => {
        Assets.create(req.body)
            .then(res.sendStatus(200))
            .catch(e => console.error(e))
    })

}