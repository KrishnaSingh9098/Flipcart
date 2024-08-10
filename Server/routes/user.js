// const express = require('express')
// let router = express.Router()


// let bcrypt = require('bcrypt')
// const User = require('../models/user')
// router.use(express.json());
// router.get('/',(req,res)=>{
//     res.send("hehehe")
// })
// router.post('/users',async(req,res)=>{
//     const user =req.body
//     console.log(user,"heheeh")
//     const Email = await User.findOne({ email:user.email})
//     if(Email){
//         res.send('user is already register')
//     }
//     else{
//         user.passWord= await bcrypt.hash(req.body.passWord,10)
//         const dbUser = new User({
//             name :user.name,
//             email : user.email.toLowerCase(),
//             passWord : user.passWord
//         })
//         await dbUser.save()
//         res.send('user acc should be Created')
//     }

// })


// module.exports= router



const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.use(express.json());

router.get('/', (req, res) => {
  res.send("API is working");
});

router.post('/users', async (req, res) => {
  try {
    const { name, Email, passWord } = req.body;

    // Validate input
    if (!name || !Email || !passWord) {
      return res.status(400).send('All fields are required');
    }

    // Check if user already exists
    const existingUser = await User.findOne({ Email: Email.toLowerCase() });
    if (existingUser) {
      return res.status(400).send('User already registered');
    }

    // Hash password and save user
    const hashedPassword = await bcrypt.hash(passWord, 10);
    const newUser = new User({
      name,
      Email: Email.toLowerCase(),
      passWord: hashedPassword
    });

    await newUser.save();
    res.status(201).send('User account created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
