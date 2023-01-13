import { User } from '@slicetime/models';
import mongoose, { Schema } from 'mongoose';

export const userSchema = new Schema<User>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Number, required: true},
  modifiedAt: {type: Number, required: true},
  creatorId: { type: String, required: false}
});

export const userModel = mongoose.model('User', userSchema);
