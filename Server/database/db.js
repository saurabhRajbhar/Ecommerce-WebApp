import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-web.dnvl2d7.mongodb.net/ECOMMERCE-WEB?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting to the database', error.message);
  }
};
export default Connection;