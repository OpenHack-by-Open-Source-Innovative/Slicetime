import { timeSpentSchema } from './time-spent';
import { TimeLog } from '@slicetime/models';
import mongoose, { Schema } from 'mongoose';

const timeLogSchema = new Schema<TimeLog>({
  timeLogId: { type: String, required: true },
  estStartingTime: { type: Number, required: true },
  estEndingTime: { type: Number, required: true },
  taskId: { type: String, required: true },
  spentTimes: { type: [timeSpentSchema], required: true },
  createdAt: { type: Number, required: true},
  modifiedAt: {type: Number, required: true},
  creatorId: { type: String, required: false}
});

export const timeLogModel = mongoose.model('timeLog', timeLogSchema);
