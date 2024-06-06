import mongoose from 'mongoose';

const MONGO_DB_NAME = 'backend';
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.mpwutye.mongodb.net/';

const connectionConfig = { dbName: MONGO_DB_NAME, autoIndex: true };
mongoose.set('strictQuery', true);

try {
  await mongoose.connect(MONGO_URL, connectionConfig);
  console.log('Connection with mongo database successfully');
} catch (error) {
  console.error('Error to connect with mongo database');
  console.error(error);
}
