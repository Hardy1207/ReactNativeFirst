import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userScheme = new Schema({
  name: String,
  age: Number
});

export default userScheme;