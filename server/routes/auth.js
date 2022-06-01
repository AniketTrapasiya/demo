const express = require('express');
const db = require('../models/index');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'welcometoourfestival';
const fetchuser = require('../middleware/fetchuser')
const User = db.users;

const validateLoginInput = require('../validation/login')
// import controllers review, products
const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController')
// ROUTE 1: create user using: post "/api/auth". no login require
router.post('/', [
  body('name', 'Enter a Valid Name').isLength({ min: 5 }),
  body('email', 'Enter a valid Email Adress').isEmail(),
  body('password', ' Password must be atleast 5 character').isLength({ min: 5 }),
  body('phonenumber', ' phone number must be atleast 10 character').isLength({ min: 10, max: 10 }),
], async (req, res) => {


  //if there are errors,return bad request and errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  //check whether the user with this email exits already 
  try {

    let user = await User.findOne({where:{ email: req.body.email} });
    if (user) {
      return res.status(400).json({ errors: "sorry a user with this email already exists" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);


    // create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
      phonenumber: req.body.phonenumber,
    })

   const data= {
     user:{
       id: user.id
     }
   }
    const authtoken = jwt.sign(data,JWT_SECRET);

    // res.json(user);
    res.json({authtoken, message: "user SignUp Successfull",user});
    // res.status(200).json({ message: "user SignUp Successfull" })


  } catch (error) {
    console.error(error.message);
  }

})

     
     
router.post("/login",(req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.send({ status: 400, message: errors });
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        return res.status(200).json({
          messge: "User not found.",
        });
      }
      // compare the password with encryption
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(401).json({
            message: "Password does not match",
          });
        }

        // create Token
        const data= {
          user:{
            id: user.id
          }
        }
         const authtoken = jwt.sign(data,JWT_SECRET);
         success = true;
         res.json({success,authtoken,message: "user Successfully Signin" ,user});
      });
    })
    .catch((message) => {
      res.json(message);
    });
});


//ROUTE 2: Authentication user using post "api/auth/getuser". login required
router.get('/getuser' ,async (req, res) => {

try {
  let id = req.query.userid;
  let data = await User.findOne({ where: { id }})
  res.send(data)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal server Error");
}
});



// use routers
router.post('/addProduct', productController.upload , productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)



// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)



// Products router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router;

