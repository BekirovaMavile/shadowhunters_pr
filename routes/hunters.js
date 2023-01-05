var express = require('express');
var router = express.Router();
var Hunter = require("../models/hunter").Hunter

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с hunters');
});

/* Страница охотников */
router.get("/:nick", function(req, res, next){
    Hunter.findOne({nick: req.params.nick}, function(err, hunter){
        if(err) return next(err)
        console.log(hunter)
        if(!hunter) return next (new Error("Нет такого охотника в этой книге"))
        res.render('hunter', {
            title: hunter.title,
            picture: hunter.avatar,
            desc: hunter.desc
        })
    })
});

module.exports = router;
