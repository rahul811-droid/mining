// backend/server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// backend/server.js
// ... (previous code remains unchanged)

const userSchema = new mongoose.Schema({
  userName: String,
  displayName: String,
  email: String,
  userImage: Buffer, // Use Buffer for storing images
  password: String,
  source: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', (req, res) => {
  // Assuming data comes from the frontend
  const userData = req.body;

  // Create a new user document
  const newUser = new User(userData);

  // Save the user to the database
  newUser.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('User created successfully');
    }
  });
});
