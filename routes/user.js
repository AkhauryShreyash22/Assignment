const express = require("express");
const router = express.Router();


const {
    add_user,
    list_users,
    fetch_user_by_email
} = require("../controllers/user.js");

router.get("/", list_users);
router.get("/fetch_user_by_email", fetch_user_by_email);
router.post("/add_user", add_user);



module.exports = router; 