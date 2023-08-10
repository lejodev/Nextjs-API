import mongoose from "mongoose";

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_DB || !MONGODB_URI) {
  throw new Error("Define MongoDB enviornment variables!");
}

const connection = { isConnected: false };

export const databaseConnect = async () => {
  // If the we are already connected it is not necesary to connect again
  if (connection.isConnected) {
    console.log("CONNECTED==================");
    return;
  }

  // If not connected, connect
  const databaseConnection = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // console.log(databaseConnection.connection.db)

  connection.isConnected = databaseConnection.connections[0].readyState; // Saves the connection status
};
