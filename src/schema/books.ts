import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema({
  title: 'string',
  author: 'string',
  price: 'string',
  publishedAt: { type: Date },
  notes: [{ type: Schema.Types.ObjectId, ref: 'notes'}],
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
