import express from 'express';
// import { deletePost } from '../../client/src/service/api.js';
import {createpost,getAllPosts,getPost,updatePost, deletePost} from '../controller/post-controller.js'

const router=express.Router();

router.post('/create',createpost);

router.get('/posts',getAllPosts);

router.get('/post/:id',getPost);

router.post('/update/:id',updatePost);

router.delete('/delete/:id',deletePost);

export default router;