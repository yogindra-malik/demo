var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Library' });
});

module.exports = router;

router.get('/books', function (req, res) {
  var db = req.db;
  var collection = db.get('Books');
  collection.find({}, {}, function (e, docs) {
    res.render('index', {
      "Books": docs
    });
  });
});
router.get('/bookscount', function (req, res) {
  var db = req.db;
  var count = db.get('Books').count();
// var count = db.get('Books').find().count();
  console.log(count);
   res.send(count);
});
router.post('/addbook', function (req, res) {
  var db = req.db;
  var Name = req.body.name;
  var By = req.body.by;
  var collection = db.get('Books');
  // Submit to the DB
  collection.insert({
    "name": Name,
    "by": By
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("/Books");
    }
  });
});
