import { tagModel } from './tag';
import { Task } from '@slicetime/models';
import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema<Task>({
  name: { type: String, required: true},
  deadline: { type: Number, required: true },
  estimatedTime: { type: Number, required: true },
  tags: { type: [tagModel], required: true },
  projectId: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Number, required: true},
  modifiedAt: {type: Number, required: true},
  creatorId: { type: String, required: false}
});

export const taskModel = mongoose.model('Task', taskSchema);
