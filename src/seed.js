require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('./models/User');

async function createDefaultAccount() {
  const saltRounds = 10; // Adjust salt rounds as needed
  const password = process.env.PRINCIPAL_PASSWORD;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = new User({
    email: 'Principal@classroom.com',
    password: hashedPassword,
    role: 'Principal',
  });

  try {
    await user.save();
    console.log('Default account created successfully');
  } catch (error) {
    console.error('Error creating default account:', error);
    process.exit(1);
  }
}

createDefaultAccount();
