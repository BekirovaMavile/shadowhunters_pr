var Hunter = require("../models/hunter").Hunter


module.exports = function(req,res,next){
    res.locals.nav = []

    Hunter.find(null,{_id:0,title:1,nick:1},function(err,result){
        if(err) throw err
        res.locals.nav = result
        next()
    })

}
