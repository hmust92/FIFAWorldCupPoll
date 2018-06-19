var path = require("path");
var db = require("../models");
var sequelize = require("sequelize");

// Routes
// =============================================================
module.exports = function(app, passport) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/EntryPoint.html"));
  });


  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/EntryPoint.html"));
  });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/EntryPoint.html"));
  });

 app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signup'}
                                                    ));

 app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signin'}
                                                    ));


 app.get("/dashboard", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  app.get("/worldcup", isLoggedIn, function(req, res) {
    console.log(req.user)
    res.sendFile(path.join(__dirname, "../public/worldCupVote.html"));
  });

  app.get("/coolTool", isLoggedIn, function(req, res) {
    console.log(req.user)
    res.sendFile(path.join(__dirname, "../public/coolTool.html"));
  });

   app.get("/matches", isLoggedIn, function(req, res) {
    console.log(req.user)
    res.sendFile(path.join(__dirname, "../public/matches.html"));
  });



 app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
  res.redirect('/');
    });;
  });

 app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signin'}
                                                    ));
// app.get('/api/vote', function(req,res){
//    db.Post.findAll({})
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });

// })

app.post('/api/:matchID/vote', function(req,res) {

  console.log(req.user)

  db.vote.findOrCreate({
    where: {
      userId: req.user.id,
      matchID: req.params.matchID,
    },
    defaults: {
      userId: req.user.id,
      matchID: req.params.matchID,
      country: req.body.country
    }
  }).then(function(result){
    return res.json(result);

  })

})

app.post('/api/:matchID/vote', function(req,res) {

  console.log(req.user)

  db.vote.findOrCreate({
    where: {
      userId: req.user.id,
      matchID: req.params.matchID,
    },
    defaults: {
      userId: req.user.id,
      matchID: req.params.matchID,
      country: req.body.country
    }
  }).then(function(result){
    return res.json(result);

  })

})


app.get('/api/:matchID/vote', function(req,res) {

   db.vote.findAll({})
      .then(function(result) {
        res.json(result);
      });

})

app.get("/api/count/:matchID", function(req, res) {

db.vote.findAll({
    where: {matchID: req.params.matchID},
    group: ['country', 'matchID'],
    attributes: ['country', [sequelize.fn('COUNT', 'country'), 'count']],
  }).then(function (result) {


    res.json(result);
  });

});



  // db.vote.findAndCountAll({
  //   group: ['country']
  // })
  // .then(result => {
  //   return res.json(result);
  // });
  



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}




};
