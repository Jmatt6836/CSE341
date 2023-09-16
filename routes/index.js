const routes = require('express').Router();

routes.get('/', (req,res,next) => {
    res.json('Becky Skouson')
})


module.exports = routes;