import mongoose, { Schema } from 'mongoose';

const noteSchema = new Schema({
  title: String,
  contents: String,
  bookId: { type: Schema.Types.ObjectId, ref: 'books'},
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
