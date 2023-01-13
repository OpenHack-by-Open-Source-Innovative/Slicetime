import { TimeSpent } from '@slicetime/models';
import mongoose, { Schema } from 'mongoose';

export const timeSpentSchema = new Schema<TimeSpent>({
  startingTime: { type: Number, required: true },
  endingTime: { type: Number, required: true },
  createdAt: { type: Number, required: true},
  modifiedAt: {type: Number, required: true},
  creatorId: { type: String, required: false}
});

export const timeSpentModel = mongoose.model('timeLog', timeSpentSchema);
