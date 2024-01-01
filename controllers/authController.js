import UserModel from '../models/UserModel.js'
import { hashPassword } from '../utils/authHelper.js'

export const registerController= async(req,res)=>{
    try{
        const{username,email,password,phonenumber,address,role}=req.body

//validation
if(!username){
return res.status(400).json({ error: 'Name is Required' });
}
if(!email){
return res.status(400).json({ error: 'Email is Required' });
}
if(!password){
return res.status(400).json({ error: 'Password is Required' });
}
if(!phonenumber){
return res.status(400).json({ error: 'Phonenumber is Required' });
}
if(!address){
return res.status(400).json({ error: 'Address is Required' });
}
if (role === undefined) {
    return res.status(400).json({ error: 'Role is Required' });
}



//existing user
const existingUser= await UserModel.findOne({email})
if(existingUser){
    return res.status(200).send({
        success:true,
        message:"Already register please login",
    })
}
//register user
const hashedPassword= await hashPassword(password)
//save
const user= new UserModel({username,email,password:hashedPassword,phonenumber,address,role}).save()
res.status(201).send({
    success:true,
    message:'user register successfully',
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

