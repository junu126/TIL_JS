const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String, // 타입
    required: true, // 필수 여부
    unique: true, // 고유값 여부
  },
  age: {
    type: Number,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,  // 기본 값
  },
});

module.exports = mongoose.model('User', userSchema);