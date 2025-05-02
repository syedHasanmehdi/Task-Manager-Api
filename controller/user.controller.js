import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {config} from '../config/config.js';
import {createUser} from '../services/user.service.js';
import db from '../models/index.js';

const User = db.User;

export const register = async (req, res, next) => {
  try {
    const userData = req.body;// ← fixed
    const newUser = await createUser(userData);

    const token = jwt.sign(
        {id: newUser.id, username: newUser.username}, // ← use newUser
        config.jwtSecret,
        {expiresIn: '48h'},
    );

    res
        .status(201)
        .json({message: 'User Created Successfully', user: newUser, token});
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const {email, password} = req.body;// ← fixed

    const user = await User.findOne({where: {email}});
    if (!user) {
      const error = new Error('Invalid email id');
      error.statusCode = 400;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error('Invalid password');
      error.statusCode = 400;
      throw error;
    }

    const token = jwt.sign(
        {id: user.id, username: user.username},
        config.jwtSecret,
        {expiresIn: '48h'},
    );
    res.status(200).json({message: 'Login Successful', token});
  } catch (err) {
    next(err);
  }
};
