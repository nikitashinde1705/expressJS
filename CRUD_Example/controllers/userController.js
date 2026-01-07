
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/users.json")

//Read users
function readUsers () {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

//Write users
function writeUsers(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

//get all users

exports.getUsers = (req, res) => {
    const users = readUsers();
    res.json(users);
};

exports.getUserById = (req, res) => {
    const users = readUsers();

    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);
    if(!user){
        return res.status(404).send("User not found");
    }
    res.json(user);
}


//POST - ADD User

exports.addUser = (req,res) => {
    const users = readUsers();

    const newUser = {
        id : users.length + 1,
        name : req.body.name,
        email : req.body.email
    };

    users.push(newUser);
    writeUsers(users);

    res.status(201).send("User added successfully");
}

//PUT - Update user

exports.updateUser = (req, res) => {
    const users = readUsers();
    const userId = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === userId);
    if(index === -1){
        return res.status(404).send("User not found");
    }

    users[index].name = req.body.name;
    users[index].email = req.body.email;

    writeUsers(users);
    res.send("User Updated successfully");
}


//DELET user
 exports.deleteUser = (req, res) => {
    const users = readUsers();
    const userId = parseInt(req.params.id);

    const filter = users.filter((u) => u.id !== userId);
    writeUsers(filter);
    res.send("user deleted succesfully");

 }



