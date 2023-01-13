import mongoose from 'mongoose';
import { TimeSpent } from '../../../libs/models/src';
const { Schema } = mongoose;

const timeSpentSchema = new Schema<TimeSpent>({
  startingTime: { type: Number, required: true },
  endingTime: { type: Number, required: true },
});

export const timeSpentModel = mongoose.model('timeLog', timeSpentSchema);
