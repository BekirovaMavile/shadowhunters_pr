var express = require('express');
var router = express.Router();
var Hunter = require("../models/hunter").Hunter
var User = require("./../models/user").User

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Сумеречные охотники', counter:req.session.counter });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg', {title: 'Вход', error: null});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
var username = req.body.username
var password = req.body.password
User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
            if(user.checkPassword(password)){
                req.session.user = user._id
                res.redirect('/')
            } else {
                res.render('logreg', {title: 'Вход', error: 'Пароль не верный'})
            }
    } else {
    var user = new User({username:username,password:password})
            user.save(function(err,user){
                if(err) return next(err)
                req.session.user = user._id
                res.redirect('/')
            })        
    }
    })
});



// /* Страница Клариссы */
// router.get('/clary', function(req, res, next) {
//     res.render('hunter', {
//         title: "Кларисса Фейрчайлд",
//         picture: "images/clary.webp",
//         desc: "Сумеречная охотница. Воссоздает мощные древние руны, не написанные в Серой книге."
//     });

// });
// /* Страница Джейса */
// router.get('/jace', function(req, res, next) {
//     res.render('hunter', {
//         title: "Джейс Эрондейл",
//         picture: "images/jace.webp",
//         desc: "Со-глава Института Нью-Йорка. Может активировать руны без стеле."
//     });
// });

// /* Страница Алека */
// router.get('/alec', function(req, res, next) {
//     res.render('hunter', {
//         title: "Александр Лайтвуд",
//         picture: "images/alec.webp",
//         desc: "Консул Конклава-в-изгнании."
//     });
// });

// /* Страница Магнуса */
// router.get('/magnus', function(req, res, next) {
//     res.render('hunter', {
//         title: "Магнус Бейн",
//         picture: "images/magnus.webp",
//         desc: "Верховный маг Бруклина."
//     });
// });

// /* Страница Изабель */
// router.get('/isabel', function(req, res, next) {
//     res.render('hunter', {
//         title: "Изабель Лайтвуд",
//         picture: "images/isabel.webp",
//         desc: "Сумеречная охотница. Обладательница мощного амулета, который обнаруживает демонов."
//     });
// });


module.exports = router;
