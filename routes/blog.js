const express = require("express");
const router = express.Router();


const {
    add_blog,
    list_blog,
    update_blog,
    delete_blog
} = require("../controllers/blog.js");

router.post("/add_blog", add_blog);
router.get("/list_blog", list_blog);
router.post("/update_blog", update_blog);
router.delete("/delete_blog", delete_blog);


module.exports = router; 