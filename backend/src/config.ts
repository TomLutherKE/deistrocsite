import 'dotenv/config';

export const config = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27107',
};
