import mongoose from 'mongoose';
import { TimeLog } from '../../../libs/models/src';
const { Schema } = mongoose;

const timeLogSchema = new Schema<TimeLog>({
  timeLogId: {type:String,required:true},
  estStartingTime: {type:Number , required:true},
  estEndingTime: {type:Number , required: true},
  taskId: {type:String , required: true},
  spentTimes: {type:[Number], required:true}
});

export const timeLogModel = mongoose.model('timeLog', timeLogSchema);