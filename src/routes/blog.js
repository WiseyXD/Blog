const express = require("express");
const router = express.Router();
const {
    readAllBlogs,
    createNewBlog,
    deleteBlog,
    updateBlog,
} = require("../controllers/blog");

router.get("/", readAllBlogs);
router.post("/new", createNewBlog);

// delete and update

router.delete("/deleteBlog/:blogId", deleteBlog);
router.put("/updateBlog/:blogId", updateBlog);

module.exports = router;
