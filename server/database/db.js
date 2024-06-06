import mongoose from "mongoose"
const Connection= async (username,password) => {
    const URL= `mongodb://${username}:${password}23@ac-uooghio-shard-00-00.vtxlc0c.mongodb.net:27017,ac-uooghio-shard-00-01.vtxlc0c.mongodb.net:27017,ac-uooghio-shard-00-02.vtxlc0c.mongodb.net:27017/?ssl=true&replicaSet=atlas-5tauat-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('ERROR while connecting',error);
            
    }
}
export default Connection;