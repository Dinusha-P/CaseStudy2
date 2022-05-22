// Part #1 Point 1: In package.json file replaced "main": "server.js" with "main": "app.js"
const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser'); //part#1 point2 -  bodyparser import

//part#2 point6- Moved nav array definition to new file: public/navData.js  Also updated navbar part in home.ejs and editauthor.ejs
const nav=require('./public/js/navData')

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');//Part#1 point3 -changed file name from homeroute to homerouter
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors());  //Part#2 Point7- use cors
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");
});//part#1 point5: PORT number changed to 5000 in console.log