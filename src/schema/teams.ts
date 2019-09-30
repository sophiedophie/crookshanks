import mongoose, { Schema } from 'mongoose';

const teamSchema = new Schema({
  name: 'string',
  members: { type: Schema.Types.ObjectId, ref: 'users'},
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
