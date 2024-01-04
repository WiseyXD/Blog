const { Blog } = require("../db/index");

async function readAllBlogs(req, res) {
    const allBlogs = await Blog.find({});
    res.status(200).json({ allBlogs });
}

async function createNewBlog(req, res) {
    const { title, content, author } = req.body;
    try {
        const newBlog = await new Blog({ title, author, content });
        await newBlog.save();
        res.status(201).json({ newBlog });
    } catch (err) {
        res.status(400).json({
            error: err.message,
        });
    }
}

async function deleteBlog(req, res) {
    const _id = req.params.blogId;
    try {
        const deleteBlog = await Blog.findByIdAndDelete({ _id });
        res.status(200).json({
            msg: "Deletion Succesfull",
        });
    } catch (error) {
        const msg = error.message;
        res.status(500).json({
            msg,
        });
    }
}

async function updateBlog(req, res) {}

module.exports = { readAllBlogs, createNewBlog, deleteBlog };
