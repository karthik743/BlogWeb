import Post from '../schema/post-schema.js';


export  const createpost= async (request,response)=>{
    console.log(request.body);
    try{
        const post= await new Post(request.body);
        post.save();

        response.status(200).json('Post saved successfully');
    }
    catch(error){
        response.status(500).json(error);
    }
    
} 

export const getAllPosts=async(request,response)=>{
    try{
        let posts=await Post.find({});

        response.status(200).json(posts);
    }
    catch{
        response.status(500).json(error);
    }
}

export const getPost=async(request,response)=>{
    try{
        let post=await Post.findById(request.params.id);
        response.status(200).json(post);
    }
    catch(error){
        response.status(500).json(error);
    }
}

export const updatePost=async(request,response)=>{
   try{
          await Post.findByIdAndUpdate(request.params.id,{$set:request.body});

        response.status(200).response('blog updated!!');

   }
    catch(error){
        response.status(500).json(error);
    }
}

export const deletePost=async(request,response)=>{
    try{
        let post=await Post.findById(request.params.id);
         await post.delete(); 
         response.status(200).response('blog updated!!');
 
    }
     catch(error){
         response.status(500).json(error);
     }
 }