const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // to read JSON data

// 👉 1. Connect MongoDB
mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("MongoDB Connected Successfully");
}).catch(err => console.log(err));

// 👉 2. Create Schema
const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// 👉 3. Create Model
const Student = mongoose.model("Student", StudentSchema);

// ------------------ CRUD OPERATIONS ------------------


// URL: POST http://localhost:3000/add
app.post('/add', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send("Student Added Successfully!");
});


// URL: GET http://localhost:3000/students
app.get('/students', async (req, res) => {
  const data = await Student.find();
  res.json(data);
});


// URL: PUT http://localhost:3000/update/:id
app.put('/update/:id', async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send("Student Updated!");
});


// URL: DELETE http://localhost:3000/delete/:id
app.delete('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Student Deleted!");
});

// -----------------------------------------------------


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
