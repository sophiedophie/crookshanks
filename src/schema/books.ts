import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema({
  title: String,
  author: String,
  price: String,
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
