const express = require('express');
const bodyParser = require('body-parser');

const path=require('path');
const app= express();

app.set('view engine','ejs');
app.set('views','views');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Page not found'});//__drname is root folder and app.js is in it,but to access shop.html in shop.js we have to go ../ one level up then access
});

//const server = http.createServer(app);

app.listen(3000);