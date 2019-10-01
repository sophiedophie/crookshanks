import mongoose, { Schema } from 'mongoose';

const User = new Schema({
  lastLogin: { type: Date, default: Date.now() },
  name: String,
  avatar: String,
  snsLoginType: String,
  id: String,
  accessToken: String,
  emailaddress: String,
  notes: [{ type: Schema.Types.ObjectId, ref: 'notes'}],
  books: [{ type: Schema.Types.ObjectId, ref: 'books'}], 
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

User.statics.upsertUser = (args) => {
  const { id, ...metadata } = args;
  return this.findOneAndUpdate(id, metadata, { upsert: true }).exec();
};

User.statics.findUserById = (args: {id: string}) => {
  const { id } = args;
  return this.find({ id }).exec();
};

export default mongoose.model('User', User);
