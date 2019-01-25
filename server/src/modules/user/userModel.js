import userScheme from './userScheme';
import mongoose from 'mongoose';
const userModel = mongoose.model("Users", userScheme);

export default userModel;
