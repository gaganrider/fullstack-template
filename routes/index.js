var express = require('express');
var router = express.Router();
const passport =require('passport')
const User = require("../models/model")



passport.use(User.createStrategy());

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.json('backend connected');
});



// ==============================================


router.get('/register',(req, res, next)=> {
  res.render('register', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
  const { name,email,username, password } = req.body;
  User.register({ name, username,email,}, password)
  .then(()=>{res.redirect("/login")})
  .catch((err)=>{console.log(err)
    res.json(req.body)
  })
});
// =======================================================
router.get('/login',(req, res, next)=> {
  res.render('login', { title: 'Express' });
});

router.post('/login',passport.authenticate("local",{
  successRedirect:"/",
  failureRedirect:"/err"
}),(req, res, next)=> {});

// =======================================================
router.get('/err',(req, res, next)=> {
  res.send('oops everything went wrong');
});
module.exports = router;
