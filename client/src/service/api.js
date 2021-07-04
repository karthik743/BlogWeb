import axios from 'axios';

const URL='http://localhost:8000';
export const createpost=async(post)=>{
    try{
     return await axios.post(`${URL}/create`,post)
    }
    catch(error){
     console.log('error while calling create post API',error);
    }
}

export const getAllPosts=async()=>{
    try{
        let response=await axios.get(`${URL}/posts`);
        return response.data;
    }
    catch(error){
    console.log('error while calling create post API',error);
    }
}

export const getPost=async(id)=>{
    try{
       let response=await axios.get(`${URL}/post/${id}`);
       return response.data; 
    }
    catch(error){
        console.log('error while calling create post API',error);
    }
}

export const updatePost=async(id,post)=>{
    try{
       await axios.post(`${URL}/update/${id}`,post);
    }
    catch(error){
        console.log('error while calling create post API',error);
    }
}

export const deletePost=async(id)=>{
    try{
       await axios.delete(`${URL}/delete/${id}`);
    }
    catch(error){
        console.log('error while calling delete post API',error);
    }
}