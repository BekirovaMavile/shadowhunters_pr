var db = require('../mySQLConnect.js');

module.exports = function(req,res,next){
res.locals.nav = []
    db.query(`SELECT * FROM hunter`, (err, hunters) => {  
        if(err) throw err
        res.locals.nav = hunters
        next()
        
    })
}
// var Hunter = require("../models/hunter").Hunter

// module.exports = function(req,res,next){
//     res.locals.nav = []

//     Hunter.find(null,{_id:0,title:1,nick:1},function(err,result){
//         if(err) throw err
//         res.locals.nav = result
//         next()
//     })

// }
