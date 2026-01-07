
const express = require("express");
const app = express();
const loginController = require("./controller/login");
const registerController = require('./controller/register')
const googleAuthController = require("./controller/googlelogin");
var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());



app.post("/register", registerController);
app.post("/login", loginController);
app.post("/googleauth", googleAuthController);



app.listen(3000, () => {
  console.log("Server started on port 3000");
});



// app.get("/health", (req, res) => {
//   res.send("Hello this is healty server");
// });

// app.post("/giveDetails", (req, res) => {
//   console.log(req.body);
//   res.send("Details received");
// });

// app.post("/postdata", (req, res) => {
//   console.log(req.body);
//   res.send("Data received successfully");

// });

// app.post("/users", (req, res) => {
//   const { name , gender } = req.body;
//   // const name= req.body.name;
//   // const age = req.body.age;
//   // const gender = req.body.gender;


//   res.json({ message: "User created", user:{name , gender} });

// });