import bcrypt from 'bcrypt';
import db from '../models/index.js';

const User = db.User;

export const createUser = async (inputData) => {
  const {username, email, password} = inputData;

  if (!username || !email || !password) {
    throw new Error(`All fields required`);
  }
  try {
    const existingUser = await User.findOne({where: {email}});
    if (existingUser) {
      throw new Error('User already exist');
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    return await User.create({
      username,
      email,
      password: hasedPassword,
    });
  } catch (err) {
    console.log('Error in userService', err);
  }
};
