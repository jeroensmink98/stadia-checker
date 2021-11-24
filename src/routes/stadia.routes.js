const express = require('express');
const router = express.Router();
const stadiaController = require('../controllers/stadia.controller');


router.get('/instock', async function(req, res, next){
    try{
        res.send(await stadiaController.getStadiaPage())
    }catch(err){
        res.json(err.message)
    }
});

module.exports = router;