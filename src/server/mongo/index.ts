import mongoose from 'mongoose';

export default async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoReconnect: true,
  };
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/crookshanks', options);
  } catch (error) {
    console.error(error);
  }
};
