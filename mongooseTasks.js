var mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/test1')



var Hunter = mongoose.model('Hunter', { name: String })

var hunt = new Hunter({ name: 'Alec' })
hunt.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('hey!')
    }
})
