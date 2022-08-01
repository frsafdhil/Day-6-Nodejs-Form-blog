const express = require('express')
// const path = require("path");

const app = express()

const isLogin = true


app.set('view engine', 'hbs');
// app.set("views", path.join(__dirname, "./views"));

app.use('/public', express.static('public')); 

app.use(express.urlencoded({extended: false}))

// -- home --//
app.get('/', function (req, res) {
    //   setHeader(res)
    res.render('index')
})

// -- home --//
app.get('/home', function (req, res) {
    //   setHeader(res)
    res.render('index')
})

// -- addProject -- //
app.get('/add-project', function (req,res) {

    if (!isLogin) {
        return res.redirect('/')
    } 
    
    res.render('add-project')

})

// -- home -- //
app.get('/contact-me', function (req, res) {
    res.render('contact-me')
})

// -- Project_detail -- //
app.get('/project-detail', function (req,res) {
    res.render('project-detail')
})

// -- Project -- //
app.get('/project', function (req,res) {
    res.render('project', {isLogin})
})

app.post('/project', function (req,res) {

    let {tittle, content} = req.body

    res.redirect('/project')
})















const port = 5000
app.listen(port, function () {
console.debug(`Server running on port ${port}`)
})

// function setHeader(res) {
//   res.setHeader("Content-Type", "text/html");
//   res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
// }