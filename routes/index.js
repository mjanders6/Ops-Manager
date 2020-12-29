module.exports = app => {
    require('./assets.js')(app)
    require('./user.js')(app)
    require('./categories.js')(app)
}