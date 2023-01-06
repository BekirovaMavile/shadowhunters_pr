var mysql = require('mysql2');

var drop = 'TRUNCATE TABLE hunters;'
var seedQuery = 'INSERT INTO hunters (title, nick, avatar, about) VALUES ("Клэри Фэйрчайлд", "clary", "/images/clary.webp", "Сумеречная охотница, которая может воссоздавать мощные древние руны, не написанные в Серой Книге"), ("Джейс Эрондейл", "jace", "/images/jace.webp", "Cо-глава Института Нью-Йорка. Может активировать руны без стеле"), ("Алек Лайтвуд", "alec", "/images/alec.webp", "Консул Конклава-в-изгнании"), ("Магнус Бейн", "magnus", "/images/magnus.webp", "Верховный Маг Бруклина"), ("Изабель Лайтвуд", "isabel", "/images/isabel.webp", "Сумеречная охотница. Младшая сестра Алека");'


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port: '3306',
  user     : 'root',
  password : '',
  database: 'hunters'
});
connection.connect()

console.log("Running SQL seed...")

// Drop content
connection.query(drop, err => {
  if (err) {
    throw err
  }
  connection.query( seedQuery, err => {
  if (err) {
    throw err
  }
  console.log("SQL seed completed!")
  connection.end()
})
})
