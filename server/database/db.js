import mongoose from 'mongoose';


const connection =async()=>{
    try{
   const URL='mongodb+srv://karthik:12345@blog.e6nkc.mongodb.net/BLOG?retryWrites=true&w=majority';

   await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
   console.log("database connected succesfully");
    }
    catch(error){
      console.log("error while connecting to mongodb",error);
    }
}

export default connection;