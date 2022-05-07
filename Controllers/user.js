const booksModel = require("../Models/books")
const commentModel = require("../Models/comments")
const userModel = require("../Models/user")
const encryptDecryptService = require("../CommonLib/encryptionDecryption")
const JWTService = require("../CommonLib/JwtToken")

async function register(req,res,next){
    let userDetail = req.body;
    console.log(userDetail)
     const encryptedPassword = encryptDecryptService.encryptPassword(userDetail.password);
     userDetail.password = encryptedPassword;
     console.log(userDetail)
     console.log(encryptedPassword)
     const response =  await userModel.insertMany([userDetail])
     res.json(response)
} 

async function createBook(req,res,next){
    try {
        let bookDetail = req.body;
        console.log(bookDetail)
        let response = await booksModel.insertMany([bookDetail]);
        res.json(response);
      } catch (error) {
        res.json(error);
        console.log(error)
      }
}

async function createComment(req,res,next){
    try{
        let comment = req.body;
        let response = await commentModel.insertMany([comment])
        res.json(response)
    }catch(error){
        res.json(error)
    }
}

async function login(req,res,next){
//validate email and password
const userDetails = await userModel.findOne({email:req.body.email});
console.log(userDetails,req.body.password)
const isValidPassword = encryptDecryptService.decryptPassword(req.body.password,userDetails.password)

if(isValidPassword){
  let userDetail ={
    "email":req.body.email,
    "firstName":userDetails.firstName,
    "lastName":userDetails.lastName,
    "roleName":"admin",
  }

  //Generate JWT token and send back to frontend
  let  JWTToken =JWTService.generateToken(userDetail)
  res.json({
    status: "sucess",
    token : JWTToken
  })
}else{
  res.json({"message":"Password is NOT valid"})
}

}


async function get10Books(req,res,next){
    try {

        const skip = req.query.skip || 0;
  
        const limit = req.query.limit || 10;
  
        console.log("skip and limit", skip, limit)
  
          let response = await booksModel.find({}).skip(skip).limit(limit);
          res.json(response);
        } catch (error) {
          res.status(500).json(error);
        }
}

module.exports ={
    register,
    createBook,
    createComment,
    login,
    get10Books
}