require('dotenv').config()
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const classroomRoutes = require('./routes/classroomRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api', userRoutes);
app.use('/api', classroomRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
