var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Сумеречные охотники' });
});

/* Страница Клариссы */
router.get('/clary', function(req, res, next) {
    res.render('hunter', {
        title: "Кларисса Фейрчайлд",
        picture: "images/clary.webp",
        desc: "Сумеречная охотница. Воссоздает мощные древние руны, не написанные в Серой книге."
    });

});
/* Страница Джейса */
router.get('/jace', function(req, res, next) {
    res.render('hunter', {
        title: "Джейс Эрондейл",
        picture: "images/jace.webp",
        desc: "Со-глава Института Нью-Йорка. Может активировать руны без стеле."
    });
});

/* Страница Алека */
router.get('/alec', function(req, res, next) {
    res.render('hunter', {
        title: "Александр Лайтвуд",
        picture: "images/alec.webp",
        desc: "Консул Конклава-в-изгнании."
    });
});

/* Страница Магнуса */
router.get('/magnus', function(req, res, next) {
    res.render('hunter', {
        title: "Магнус Бейн",
        picture: "images/magnus.webp",
        desc: "Верховный маг Бруклина."
    });
});

/* Страница Изабель */
router.get('/isabel', function(req, res, next) {
    res.render('hunter', {
        title: "Изабель Лайтвуд",
        picture: "images/isabel.webp",
        desc: "Сумеречная охотница. Обладательница мощного амулета, который обнаруживает демонов."
    });
});


module.exports = router;
