import mongoose, { Schema } from 'mongoose';
import { Project } from './../../../libs/models/src';

const projectSchema = new Schema<Project>({
  _id: { type: String, required: true },
  name: { type: String, reqired: true },
  description: { type: String, required: true },
});

export const projectModel = mongoose.model('project', projectSchema);
