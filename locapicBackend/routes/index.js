var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
const fileUpload = require('express-fileupload');
router.use(fileUpload());

var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://FredMds:azerty00@ds020168.mlab.com:20168/locapic',
    options,
    function(err) {
     console.log(err);
    }
);

var userSchema = mongoose.Schema({
  last_name: String,
  first_name: String,
  mail: String,
  password:String,
})

PictureSchema = mongoose.Schema({
  userID:String
})

var pictureModel = mongoose.model('picture', PictureSchema);
var UserModel = mongoose.model('users', userSchema);


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/signin', function(req, res, next) {
  UserModel.findOne({mail:req.query.mail,password:req.query.password},function (err, user) {
      res.json(user);
      }
  )
});

router.post('/signup', function(req, res, next) {

  var newUser = new UserModel ({
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    mail: req.body.mail,
    password:req.body.password,
  });

  newUser.save(
      function (error, user) {
          res.json(user);
      }
  );

});

router.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

        var newpicture = new pictureModel ({
          userID: req.body.userID
        });

        newpicture.save(
            function (error, picture) {

              let filename = req.files.photo;

              console.log("LAT" , req.body.lat);
              console.log("LNG" , req.body.lng);

              filename.mv("public/images/"+picture._id+".jpg", function(err) {
                if (err)
                  return res.status(500).send(err);

                res.send('File uploaded!');
              });

            }
        );
});

router.get('/picture', function(req,res,next){
  console.log(req.query);
  pictureModel.find(
    {userID:req.query.userID},
    function(err, pictures){
    res.json(pictures)
  })
})


module.exports = router;
