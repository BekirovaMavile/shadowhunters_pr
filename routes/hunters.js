var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
// var Hunter = require("../models/hunter").Hunter
// var checkAuth = require("../middleware/checkAuth.js")

/* GET hunters listing. */
router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка охотников</h1>');
});


/* Страница охотников */
router.get("/:nick", function(req, res, next){
    db.query(`SELECT * FROM hunter WHERE hunter.nick = '${req.params.nick}'`, (err, hunters) => {             
        if(err) {
            console.log(err);
            if(err) return next(err)
        } else {
            if(hunters.length == 0) return next(new Error("Нет такого охотника в книге"))
            var hunter = hunters[0];
            res.render('hunter', {
            title: hunter.title,
            picture: hunter.avatar,
            about: hunter.about
        })
        }
    })
    // Hunter.findOne({nick: req.params.nick}, function(err, hunter){
    //     if(err) return next(err)
    //     if(!hunter) return next (new Error("Нет такого охотника в этой книге"))
    //     res.render('hunter', {
    //         title: hunter.title,
    //         picture: hunter.avatar,
    //         desc: hunter.desc
    //     })
    // })
});

module.exports = router;
