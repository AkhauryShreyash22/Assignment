const blog_schema = require("../models/blog.js");


async function add_blog(req, res) {
    var params = req.body;

    var title  = params.title;
    var content = params.content;
    var author   = params.author;

    var apiresponse;
    var response; 

    try {
        if (!title) {
            throw new Error('Please specify title');
        }
        if (!content) {
            throw new Error('please specify content');
        }

        const result = await blog_schema.create({
            'title': title,
            'content': content,
            'author': author
        });

        apiresponse = {
            'code' : "0000",
            'type'  : "OK",
            'severity' :"INFO",
            'message' : "Blog Created Succesfully",
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

async function list_blog (req, res) {
    var params = req.query;

    var blog_id = params.blog_id;
    var title    = params.title;
    var author   = params.author;

    var apiresponse;
    var response;

    try {
        var blog_list;
        if (blog_id) {
            blog_list = await blog_schema.findById(blog_id);
        }
        if (!blog_id) {
            blog_list = await blog_schema.find({});
        }
        if (title) {
            blog_list = await blog_schema.find({'title':  new RegExp(title)  });
        }
        if (author) {
            blog_list = await blog_schema.find({'author': author});
        }

        apiresponse = {
            'code' : "0000",
            'type'  : "OK",
            'severity' :"INFO",
            'message' : "Operation Completed Succesfully",
        };

        response = {'apiresponse': apiresponse, 'blogs': blog_list};  
    }

    catch (err) {
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

async function update_blog (req, res) {
    var params = req.body;
    
    var blog_id     = params.blog_id;
    var title  = params.title;
    var content    = params.content;
    var author  = params.author;

    var apiresponse;
    var response;

    try {
        if (!blog_id) {
            throw new Error("Please specify blog id to udpate the question");
        }

        var search_blog = await blog_schema.findById(blog_id);

        if (!search_blog) {
            throw new Error ("No Blog Exist With Id" + blog_id);
        }

        await blog_schema.updateOne({_id : blog_id}, {$set: {'title': title, 'content': content, 'author': author}});


        apiresponse = {
            'code' : "0000",
            'type'  : "OK",
            'severity' :"INFO",
            'message' : "Blog Updated Succesfully",
        };

        response = {'apiresponse': apiresponse};
    }

    catch (err) {
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

async function delete_blog (req, res) {
    var params = req.query;

    var id = params.id;

    var apiresponse;
    var response;

    try {
        if (!id) {
            throw new Error("Please specify Id");
        }
        await blog_schema.findByIdAndDelete(id);
        
        apiresponse = {
            'code' : "0000",
            'type'  : "OK",
            'severity' :"INFO",
            'message' : "Operation Completed Succesfully",
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

module.exports = {
    add_blog,
    list_blog,
    update_blog,
    delete_blog
}