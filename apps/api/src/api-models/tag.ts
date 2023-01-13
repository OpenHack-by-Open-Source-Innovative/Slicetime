import { Tag } from '@slicetime/models';
import mongoose, { Schema } from 'mongoose';

export const tagSchema = new Schema<Tag>({
  name: { type: String, required: true },
  createdAt: { type: Number, required: true},
  modifiedAt: {type: Number, required: true},
  creatorId: { type: String, required: false}
});

export const tagModel = mongoose.model('Tag', tagSchema);
