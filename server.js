let express = require('express');
let app=express();
let hbs = require('hbs');
let port = process.env.PORT||3000;
app.use(express.static(__dirname+'/public'));


hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use('/',function(req,res,next){
    res.send('here');
   // next();
});

app.get('/',(req,res)=>{
    
    res.send({name:'hugh',age:13});
});

app.get('/home',function(req,res){
    res.render('home.hbs',{pageTitle:'Home'});
});

app.get('/about',(req,res)=>{

    res.render('about.hbs',{pageTitle:'About Page',
    currentYear:2018
});
});

app.get('/bad',(req,res)=>{
    res.send();
});

app.listen(port,()=>{
    console.log(`Server is on ${port}`);
});