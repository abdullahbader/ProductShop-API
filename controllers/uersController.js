const bcrypt = require('bcrypt');
const { User } = require("../db/models");
const { JWT_SECRET, JWT_EXPIRATION_MS } = require("../config/keys");
const jwt = require("jsonwebtoken")
exports.signup = async (req, res, next) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword
        const newUser = await User.create(req.body);
        res.status(201).json({message:"user crated"});
    } catch (error) {
      next(error);
    }
  };

  exports.signin = (req, res) => {
    console.log(req.user)  
    const {user}=req
      
      const payload = {
        id: user.id,
        username: user.username,
        exp: Date.now() + JWT_EXPIRATION_MS,
      };
         const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);
         res.json({token})
         return token;
  };
  
//   const generateToken = (user) => {
//       console.log(user)
//     const payload = {
//       id: user.id,
//       username: user.username,
//       exp: Date.now() + JWT_EXPIRATION_MS,
//     };
//     const token = jwt.sign(payload, JWT_SECRET);
//     return token;
//   };






//   exports.signin = async (req, res, next) => {
      
//     try {
//         const user = await User.findOne({
//           where: { username }, // equivalent to { username : username }
          
//         });
        
//         let passwordsMatch;

//         const passwordsMatch = user
//         ? await bcrypt.compare(password, user.password)
//         : false;

//         if (passwordsMatch) {
//             return done(null, user);
//           }
//           else{
//           return done(null, false);}

//       } catch (error) {
//         done(error);
//       }
//   };