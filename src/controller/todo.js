const todoModel = require('../models/todoschema')


function addTodo (req, res) {
  let createTodo = new todoModel({
    todoName: req.body.todo,
  });
  // console.log(createTodo)
  createTodo.save().then((response) => {
    console.log("response=> ", response);
    res
      .status(200)
      .send({ result: response, message: "Data Shapatar" })

      .catch((err) => {
        console.log("Error=>", err.message);
        res.status(400).send({ result: err.message, message: "Data Khallas" });
      });
  });
};
async function getTodo(req, res) {
  var data = await todoModel.find({});
  res.status(200).send({ message: "Data Agya...", result: data });
};

module.exports = {addTodo, getTodo}
