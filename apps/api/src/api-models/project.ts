import { Project } from '@slicetime/models';
import mongoose, { Schema } from 'mongoose';

export const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Number, required: true},
  modifiedAt: {type: Number, required: true},
  creatorId: { type: String, required: false}
});

export const projectModel = mongoose.model('project', projectSchema);
