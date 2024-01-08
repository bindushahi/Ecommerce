import UserModel from '../models/UserModel.js'
import { comparePassword, hashPassword } from '../utils/authHelper.js'
import JWT from "jsonwebtoken"

export const registerController= async(req,res)=>{
    try{
        const{username,email,password,phonenumber,address,answer,role}=req.body

//validation
if(!username){
return res.status(400).json({ message: 'Name is Required' });
}
if(!email){
return res.status(400).json({ message: 'Email is Required' });
}
if(!password){
return res.status(400).json({ message: 'Password is Required' });
}
if(!phonenumber){
return res.status(400).json({ message: 'Phonenumber is Required' });
}
if(!address){
return res.status(400).json({ message: 'Address is Required' });
}
if(!answer){
return res.status(400).json({ message: 'Answer is Required' });
}
if (role === undefined) {
    return res.status(400).json({ message: 'Role is Required' });
}



//existing user
const existingUser= await UserModel.findOne({email})
if(existingUser){
    return res.status(200).send({
        success:false,
        message:"Already register please login",
    })
}
//register user
const hashedPassword= await hashPassword(password)
//save
const user= await UserModel({username,email,password:hashedPassword,phonenumber,address,answer,role}).save()
res.status(201).send({
    success:true,
    message:'user register successfully',
    user,
})

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in registration',
            error
        })
    }
}
//POST LOGIN
export const loginController=async(req,res)=>{
    try{
        const {email,password}=req.body
//validation
if(!email || !password){
    return res.status(404).send({
        success:false,
        message:"INVALID email and password"

    })
}
//check user
const user=await UserModel.findOne({email})
if(!user){
    return res.status(404).send({
        success:false,
        message:'email not registered'
    })
}
const match =await comparePassword(password,user.password)
  if (!match){
    return res.status(200).send({
        success:false,
        message:"Invalid password"
    })
  }  
//token create
const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
    expiresIn:"7d",
})
res.status(200).send({
    success:true,
    message:"login successfullly",
    user:{
        username:user.username,
        email:user.email,
        phonenumber:user.phonenumber,
        address:user.address,
    },
    token,
});


} catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"ERROR in login",
            error
        })

    }

};

//forgot password
export const forgotPasswordController=async(req,res)=>{
    try{
        const {email,answer,newPassword}=req.body
        if (!email){
            res.status(400).send({message:"email is required"})
        }
                if (!answer){
            res.status(400).send({message:"answer is required"})
        }
                if (!newPassword){
            res.status(400).send({message:"New password is required"})
        }
        //check
        const user=await UserModel.findOne({email,answer})
//validation
if(!user){
    return res.status(404).send({
        success:false,
        message:'Wrong email or answer',
    });
}
const hashed= await hashPassword(newPassword);
await UserModel.findByIdAndUpdate(user._id,{password:hashed});
res.status(200).send({
    success:true,
    message:"Password reset successfully",
});

    }
    catch(error)
    {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
    }
};


//testcontroller
export const testController=(req,res)=>{
    res.send('protected route');
}
