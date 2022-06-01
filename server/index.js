const cors = require('cors');

const express = require('express');
const port = 8080
const app = express()
const db = require('./models/index')
const User = db.users;


app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }))


//Available routes
const router = require('./routes/auth')
app.use('/api/auth', router)

//static Images Folder
app.use('/Images', express.static('./Images'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



















// app.post('/signin', async(req, res) => {
//     const { email, password } = req.body
//     User.findOne({
//        where:{email}
//     }, (err,user) => {
//         console.log(err,user)
//         if (user) {
//             if(password === user.password){
//                 res.send({message: "login successfully",user:user})
//             }else{
//                 res.send({message: "wrong password"})
//             }
//         }
//         else {
//             res.send({ message: "user not Registerd" })
            
//           }
//         }
    
// )})

// app.post('/signup', (req, res) => {
//     const { name, email, password, phonenumber } = req.body
//     User.findOne({
//        where:{ email:email}
//     }, (err, user) => {
//         console.log(err,user)
//         if (user) {
//             res.send({ message: "user Already Registerd" })
//         }
//         else {
//             const user = new User({
//                 name,
//                 email,
//                 password,
//                 phonenumber
//             })
//             user.save(err => {
//                 if (err) {
//                     res.send(err)
//                 } else {
//                     res.send({ message: "successfully signup" })
//                 }
//             })
//         }
//     })
// })
// app.post('/getuser',async (req, res) => {

//     try {
//       userId = req.user.id;
//       const user = await User.findById(userId).select("-password")
//       res.send(user)
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal server Error");
//     }
//     })


