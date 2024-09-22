const mongoose = require('mongoose');

const blog_schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            requred: true
        },
        author: {
            type: String
        }
    },
    {timestamps: true}
);

const blogs = mongoose.model("blog", blog_schema);

module.exports = blogs;