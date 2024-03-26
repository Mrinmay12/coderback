import express from "express";
import {CreatNewPost,GetPost} from "../Controllers/AdminController.js";
const router=express.Router()

router.post('/post/data',CreatNewPost)
router.get('/post/getall',GetPost)


export default router