
const { Assets } = require('../models')

module.exports = app => {
    // find in database
    // app.get('/assets', (req, res) => {
    //     Assets.find({})
    //     .then(assets => res.json(assets))
    //     .catch(e => console.log(e))
    // })
    app.get('/assets', (req, res) => {
        Assets.find({})
            .populate('Asset')
            // .populate({path: 'Asset'})
            .exec((err, Asset) => {
                res.json(Asset)
            })
    })
    app.get('/assets/:id', (req, res) => {
        Assets.findById(req.params.id)
            .populate('Asset')
            .exec((err, Asset) => {
                res.json(Asset)
            })
    })
    // create new asset
    app.post('/assets', (req, res) => {
        Assets.create(req.body)
            .then(res.sendStatus(200))
            .catch(e => console.error(e))
    })
    // add an item
    app.put('/assets/:id/add', (req, res) => {
        // console.log(req.body)
        Assets.findByIdAndUpdate({ _id: req.params.id }, { $push: { Asset: req.body.Asset } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // update location
    app.put('/assets/:id/location', (req, res) => {
        Assets.findOneAndUpdate({ _id: req.params.id }, { $set: { Location: req.body.Location } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // upadte notes
    app.put('/assets/:id/notes', (req, res) => {
        Assets.findOneAndUpdate({ _id: req.params.id }, { $set: { Notes: req.body.Notes } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // deleete an asset
    app.delete('/assets/:id', (req, res) => {
        Assets.findByIdAndDelete(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}