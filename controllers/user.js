const user_schema = require("../models/user.js");

async function add_user(req, res) {
    var params = req.body;

    var name  = params.name;
    var email = params.email;
    var age   = params.age;

    var apiresponse;
    var response; 

    try {
        if (!name) {
            throw new Error('Please specify name');
        }
        if (!email) {
            throw new Error('please specify mail');
        }

        const result = await user_schema.create({
            'name': name,
            'email': email,
            'age': age
        });

        apiresponse = {
            'code' : "0000",
            'type'  : "OK",
            'severity' :"INFO",
            'message' : "Questions Created Succesfully",
        };

        response = {'apiresponse': apiresponse};
    } catch (err) {
        var error = err.toString();
        error = error.replace("Error", "");
        apiresponse = {
            'code' : "0000",
            'type'  : "ERROR",
            'severity' :"ERROR",
            'message' : error
        };

        response = {'apiresponse': apiresponse};
    };

    return res.json(response);
}

async function  list_users(req, res) {
    var apiresponse;
    var response;

    try {
        user_list =  await user_schema.find({});


        apiresponse = {
            'code' : "0000",
            'type'  : "OK",
            'severity' :"INFO",
            'message' : "Operation Completed Succesfully",
        };

        response = {'apiresponse': apiresponse, 'user': user_list};
        
    } catch(err) {
        var error = err.toString();
        apiresponse = {
            'code' : "0000",
            'type'  : "ERROR",
            'severity' :"ERROR",
            'message' : error
        };

        response = {'apiresponse': apiresponse};
    };

    return res.json(response);
}

async function fetch_user_by_email (req, res) {
    var params = req.query;

    var email = params.email;

    var apiresponse;
    var response;

    try {
        if (!email) {
            throw new Error('Please specify email');
        }

        user = await user_schema.find({'email':  email  });
        console.log(user.length);
        if (user.length == 0) {
            throw new Error(`No user found with email ${email}`);
        }
        apiresponse = {
            'code' : "0000",
            'type'  : "OK",
            'severity' :"INFO",
            'message' : "Operation Completed Succesfully",
        };

        response = {'apiresponse': apiresponse, 'user': user};
    } catch(err) {
        var error = err.toString();
        error = error.replace("Error", "");
        apiresponse = {
            'code' : "0000",
            'type'  : "ERROR",
            'severity' :"ERROR",
            'message' : error
        };

        response = {'apiresponse': apiresponse};
    };

    return res.json(response);

}

module.exports = {
    add_user,
    list_users,
    fetch_user_by_email
}