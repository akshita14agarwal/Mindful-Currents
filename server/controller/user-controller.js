import bcrypt from 'bcrypt';  //to encrypt password
import jwt from 'jsonwebtoken'; // to do jwt authentication
import dotenv from 'dotenv';// to get access key from env file
import User from '../model/user.js';
import Token from '../model/token.js';
dotenv.config();

export const signupUser = async(request, response) =>{
    try{
        const salt= await bcrypt.genSalt();  //to append some random chr before the encrypted pwd
        const hashedPassword = await bcrypt.hash(request.body.password, salt );

        const user ={ username: request.body.username, name: request.body.name, password: hashedPassword}
        
        const newUser=new User(user);
        await newUser.save();
        return response.status(200).json({ msg: 'signup successfull'})
    } catch (error){
        return response.status(500).json({msg: 'Error while signup of user'})
    }

}
export const loginuser= async(request, response) => {
    let user = await User.findOne({username: request.body.username});
    if(!user){
        return response.status(400).json({ msg: 'Username does not match'});
    }

    try{
        let match = await bcrypt.compare(request.body.password, user.password);
        if(match){
          // access token not permanent, it expires
          // in access token we have 2 things one is body another is security key , we can generate it from crypto lib, or otherwise it can be anything
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY,{ expiresIn: '15m'});

            // with help of refresh token we can access access token again
            const refreshToken=  jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY);
             
             const newToken = new Token({ token: refreshToken})
             await newToken.save(); // refresh token save in database

             return response.status(200).json({accessToken: accessToken, refreshToken: refreshToken, name: user.name, username: user.username})
        }
        else{
            return response.status(400).json({msg: 'Password does not match'});
        }
    }catch(error){
        return response.status(500).json({msg: 'Error while login in user'})

    }

}


// code to generate secret key is : require('crypto').randomBytes(64).toString('hex');

