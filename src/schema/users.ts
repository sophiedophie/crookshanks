import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  lastLogin: { type: Date, default: Date.now() },
  name: 'string',
  avatar: 'string',
  loginType: 'string',
  notes: [{ type: Schema.Types.ObjectId, ref: 'notes'}],
  books: [{ type: Schema.Types.ObjectId, ref: 'books'}], 
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

const User = mongoose.model('User', userSchema);

export default User;
