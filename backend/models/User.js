const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {};

User.createUser = async (email, password) => {
  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return { error: 'User already registered' }; 
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
    return { userId: result.insertId }; 
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  }
};

User.findByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0]; 
};

module.exports = User;
