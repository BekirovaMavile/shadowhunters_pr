var mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/test1')


var schema = mongoose.Schema({ name: String })
schema.methods.hey = function(){
    console.log(this.get("name") + " said hey")
}
var Hunter = mongoose.model('Hunter', schema)

var hunt = new Hunter({ name: 'Alec' })
hunt.save(function (err) {
    hunt.hey()
})
