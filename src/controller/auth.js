const bcrypt = require("bcryptjs");
const authModel = require("../models/authschema");

async function signup(req, res){
  var checkUser = await authModel.findOne({ email: req.body.email });
  //   console.log(checkUser);
  if (checkUser) {
    res
      .status(200)
      .send({ result: checkUser, message: "User already registed..." });
  } else {
    var hash_pass = await bcrypt.hash(req.body.password, 12);
    // res.send(hash_pass)

    let createUser = new authModel({
      email: req.body.email,
      password: hash_pass,
    });
    createUser.save().then((response) => {
      console.log("response=> ", response);
      res
        .status(200)
        .send({ result: response, message: "Data Shapatar" })
        .catch((err) => {
          console.log("Error=>", err.message);
          res
            .status(400)
            .send({ result: err.message, message: "Data Khallas" });
        });
    });
  }
};

async function signin (req, res) {
  var checkUser = await authModel.findOne({ email: req.body.email });
  // console.log(checkUser);
  if (checkUser) {
    var checkPass = await bcrypt.compare(req.body.password, checkUser.password);
    if (checkPass) {
      res.status(200).send({ message: "Login Successfull" });
    } else {
      res.status(403).send({ message: "Invalid Password" });
    }
  } else {
    res.status(403).send({ message: "User not registed..." });
  }
};

module.exports = {signup , signin};