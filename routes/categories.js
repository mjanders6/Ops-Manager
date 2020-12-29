  
const { Categories } = require('../models')

module.exports = app => {
    // find in database
     app.get('/categories', (req, res) => {
        Categories.find({})
         .then(category => res.json(category))
         .catch(e => console.log(e))
     })

}