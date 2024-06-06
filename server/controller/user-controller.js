import bcrypt from 'bcrypt';  //to encrypt password
import User from '../model/user.js';

export const signupUser = async(request, response) =>{
    try{
        const salt= await bcrypt.genSalt();  //to append some random chr before the encrypted pwd
        const hashedPassword = await bcrypt.hash(request.body.password, salt );

        const user ={ username: request.body.username, name: request.body.name, password: hashedPassword}
        
        const newUser=new User(user);
        await newUser.save();
        return response.status(200).json({ msg: 'signup successfull'})
    } catch (error){
        return respone.status(500).json({msg: 'Error while signup of user'})
    }

}