var express = require('express');
var router = express.Router();
var Hunter = require("../models/hunter").Hunter
var async = require("async")

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с hunters');
// });

/* Страница охотников */
router.get("/:nick", function(req, res, next){
    async.parallel([
        function(callback){
            Hunter.findOne({nick: req.params.nick},callback)
        },
        function(callback){
            Hunter.find({},{_id:0,title:1,nick:1}, callback)
        }
    ],
    function(err, result){
        if(err) return next(err)
        var hunter = result[0]
        var hunters = result[1] || []
        // console.log(hunters)
        if(!hunter) return next (new Error("Нет такого охотника в этой книге"))
        // console.log(hunter.avatar)
        res.render('hunter', {
            title: hunter.title,
            picture: hunter.avatar,
            desc: hunter.desc, 
            menu: hunters
        })
    })
    // Hunter.findOne({nick: req.params.nick}, function(err, hunter){
    //     if(err) return next(err)
    //     console.log(hunter)
    //     if(!hunter) return next (new Error("Нет такого охотника в этой книге"))
    //     res.render('hunter', {
    //         title: hunter.title,
    //         picture: hunter.avatar,
    //         desc: hunter.desc
    //     })
    // })
});

module.exports = router;
