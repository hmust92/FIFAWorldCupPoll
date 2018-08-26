    var express    = require('express')
    var app        = express()
    var passport   = require('passport')
    var session    = require('express-session')
    var bodyParser = require('body-parser')
    var env        = require('dotenv').load()
    var exphbs     = require('express-handlebars')
    var path = require("path");
    var port = process.env.PORT || 5000;

    app.use(express.static("./app/public"));

    //For BodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


     // For Passport
    app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

    // app.use(function(req, res, next) {
    //     req.foo = 'hi';
    //     next();
    // })
    

	//Models
    var models = require("./app/models");


    //Routes
    require("./app/routes/routes.js")(app, passport);



    //load passport strategies
    require('./app/config/passport/passport.js')(passport,models.user,models.vote);



    //Sync Database
   	models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

    }).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
    });



	app.listen(port, function(err){
		if(!err)
		console.log("Site is live"); else console.log(err)

	});




    