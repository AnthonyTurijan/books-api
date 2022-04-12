//dependencies
require('dotenv').config()

//require express
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//Express Settings
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(express.json())

//main page
app.get('/', (req,res)=>{
    res.send('<p>hello </p>')
})

//listen
app.listen(process.env.PORT, function(){
    console.log('Server On')
})