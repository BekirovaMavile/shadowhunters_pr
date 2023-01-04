var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Сумеречные охотники' });
});

/* Страница Клариссы */
router.get('/clary', function(req, res, next) {
    res.send("<h1>Страница Клариссы</h1>")
});
/* Страница Джейса */
router.get('/jace', function(req, res, next) {
    res.send("<h1>Страница Джейса</h1>")
});

/* Страница Алека */
router.get('/alec', function(req, res, next) {
    res.send("<h1>Страница Алека</h1>")
});

/* Страница Магнуса */
router.get('/magnus', function(req, res, next) {
    res.send("<h1>Страница Магнуса</h1>")
});

/* Страница Изабель */
router.get('/isabel', function(req, res, next) {
    res.send("<h1>Страница Изабель</h1>")
});


module.exports = router;
