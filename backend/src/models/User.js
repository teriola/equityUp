const { Schema, model, Types: { ObjectId } } = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/constants');

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    max: 30,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    minLength: [3, 'Username must be at least 3 characters long'],
    maxLength: [30, 'Username must be at most 30 characters long'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  // theme: {
  //     type: String,
  //     enum: ['light', 'dark'],
  // },
}, {
    timestamps: true,
  });

// userSchema.pre('save', function (next) {
//     return bcrypt.hash(this.password, SALT_ROUNDS)
//         .then(hash => {
//             this.password = hash;
//             return next();
//         });
// });

// userSchema.method('validatePassword', function (password) {
//     return bcrypt.compare(password, this.password);
// });

const User = model('User', userSchema);

module.exports = User;
