import mongoose from 'mongoose';
import { Task } from '../../../libs/models/src';
const { Schema } = mongoose;

const taskSchema = new Schema<Task>({
    _id : {type:Number , required:true},
    deadline : {type:Number , required:true},
    estimatedTime : {type:Number , required:true},
    tag : {type:String , required:true},
    project : {type:String , required:true},
    description : {type:String , required:true}
});

export const taskModel = mongoose.model('Task', taskSchema);