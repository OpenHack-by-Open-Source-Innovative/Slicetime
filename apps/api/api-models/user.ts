import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    id : {type:Number , required:true},
    userName: {type:String , required:true},
    email: {type:String , required:true} 
});

export const userModel = mongoose.model('User', userSchema);