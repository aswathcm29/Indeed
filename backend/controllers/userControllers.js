const {userModel} = require('../models/userSchema');
const saltRounds = 10;
const { generateToken } = require('../utils/Token');
const bcrypt = require('bcrypt');


const login = async(req,res)=>{
    console.log('login check')
    try{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password)
    if(username!=='' && password!==''){
        const user = await userModel.findOne({username:username});
        if(!user){
            return res.status(500).json({error:true,message:'User not found'})
        }
    
        const passwordMatch = await bcrypt.compare(password,user.password);
        
        if(passwordMatch){
            const authToken = await generateToken(username,"user");
            if(authToken===""){
                return res.status(500).json({error:true,message:'Token generation failed'})
            }
            res.cookie('token',authToken);
            return res.status(200).json({error:false,message:{token:authToken,userType:'user'}})
        }
        else{
            return res.status(500).json({error:true,message:'Password does not match'})
        }
    }
    else{
        return res.status(500).json({error:true,message:'Username or password cannot be empty'})
    }
    }
    catch(err){
        return res.status(404).json({error:true,message:err.message})
    }
}

const signup = async(req,res)=>{
    const username  = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    if(username=='' || password==''||email==''){
        return res.status(401).json({error:true,message:'Invalid credentials'})
    }
    if(username == undefined || password == undefined || email == undefined){
        return res.status(401).json({error: true, message:"invalid credentials"})
    }
    try{
        const response = await userModel.findOne({username:username});
        if(response){
            return res.status(401).json({error:true,message:'User already exists'})
        }

        const hashPassword = await bcrypt.hash(password,saltRounds);
            try{
                const doc = await userModel.create({username:username,password:hashPassword,email:email})
                if(doc){
                    return res.status(200).json({error:false,message:'User created successully'})
                }
            }
            catch(err){
                return res.status(500).json({error:true,message:err.message})
            }
    }
        catch(err){
            return res.status(500).json({error:true,message:err.message})
        }

}

module.exports = {signup,login}