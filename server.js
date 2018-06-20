    var express    = require('express')
    var app        = express()
    var passport   = require('passport')
    var session    = require('express-session')
    var bodyParser = require('body-parser')
    var env        = require('dotenv').load()
    var exphbs     = require('express-handlebars')
    var path = require("path");

    app.use(express.static("./app/public"));

    //For BodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


     // For Passport
    app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    

	//Models
    var models = require("./app/models");


    //Routes
    require("./app/routes/routes.js")(app, passport);



    //load passport strategies
    require('./config/passport/passport.js')(passport,models.user,models.vote);



    //Sync Database
   	models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

    }).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
    });



	app.listen(5000, function(err){
		if(!err)
		console.log("Site is live"); else console.log(err)

	});




    