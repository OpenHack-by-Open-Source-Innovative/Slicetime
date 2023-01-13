import mongoose, { Schema } from 'mongoose';
import { Tag } from './../../../libs/models/src';

const tagSchema = new Schema<Tag>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
});

export const taksModel = mongoose.model('Tag', tagSchema);
