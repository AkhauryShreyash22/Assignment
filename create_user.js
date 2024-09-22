const user_schema = require("./models/user.js");
const { faker } = require('@faker-js/faker');


async function create_user(name,email,age) {
    try {
        console.log(`name is ${name}, email is ${email},age is ${age}`);

        const result = await user_schema.create({
            'name': name,
            'email': email,
            'age': age
        });

        const id = result._id;

        console.log(`user created with id ${id}`);
        
    }
    catch(err){
        var error = err.toString();
        console.log(`There was some error ${error}`);
    }
}

for (var i =0 ; i <=15; i++) {
    console.log(`processing ${i}`)
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const age = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    create_user(name, email, age);
}

