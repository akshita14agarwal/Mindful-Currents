import mongoose from "mongoose"
const Connection= async (username,password) => {
    const URL= `mongodb://${username}:${password}@ac-oy1gfxy-shard-00-00.sloyz4n.mongodb.net:27017,ac-oy1gfxy-shard-00-01.sloyz4n.mongodb.net:27017,ac-oy1gfxy-shard-00-02.sloyz4n.mongodb.net:27017/?ssl=true&replicaSet=atlas-ry7bp3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('ERROR while connecting',error);
            
    }
}
export default Connection;