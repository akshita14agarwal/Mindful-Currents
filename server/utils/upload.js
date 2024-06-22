// middleware = multer. files get upload on mongo db because of this

import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const storage = new GridFsStorage({
   url:  `mongodb://${username}:${password}@ac-oy1gfxy-shard-00-00.sloyz4n.mongodb.net:27017,ac-oy1gfxy-shard-00-01.sloyz4n.mongodb.net:27017,ac-oy1gfxy-shard-00-02.sloyz4n.mongodb.net:27017/?ssl=true&replicaSet=atlas-ry7bp3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`,
   options: {userNewUrlParser: true},
   file:(request, file)=>{
    const watch= ["image/png", "image/jpg"];
    
    if(matchMedia.indexOf(file.nameType)=== -1){
        return`${Date.now()} -blog-${file.originalname}`;
    }
    return{
        bucketname: "photos",
        filename: `${Date.now()}-blog-${file.originalname}`
    }
   }

     
})

export default multer({storage});  