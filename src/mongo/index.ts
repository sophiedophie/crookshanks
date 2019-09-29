import { User } from '../schema';

export const upsertUser = (args) => {
  const { id, ...metadata } = args;
  return User.findOneAndUpdate(id, metadata, { upsert: true });
}

export const findUser = (args: {id: string}) => {
  const { id } = args;
  return User.find({ id });
};
