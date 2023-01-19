import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import authMiddleWare from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", authMiddleWare, createPost);
router.patch("/:id", authMiddleWare, updatePost);
router.delete("/:id", authMiddleWare, deletePost);
router.patch("/:id/likePost", authMiddleWare, likePost);

export default router;
