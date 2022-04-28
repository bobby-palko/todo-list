/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import mongoose from 'mongoose';
import 'dotenv/config';

const databaseUrl = process.env.DATABASE_URL || '';

mongoose.connect(databaseUrl).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

export default db;
