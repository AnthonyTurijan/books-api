//dependencies
require('dotenv').config()

//require express
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const cors = require('cors')

//Express Settings
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(cors())

//main page
app.get('/', (req,res)=>{
    res.send('<p>hello </p>')
})

//book controllers
const booksController= require('./controllers/books-controllers')
app.use('/books', booksController)


//listen
app.listen(process.env.PORT, function(){
    console.log('Server On')
})