// this file made to store refrsh token somewhere as when access token get expires it takes value from refresh token

import mongoose from "mongoose";
const tokenSchema = mongoose.Schema({
    token:{
        type: String,
        required: true
    }
})
const token = mongoose.model('token', tokenSchema);

export default token;