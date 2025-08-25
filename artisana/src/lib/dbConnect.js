import { MongoClient, ServerApiVersion } from "mongodb";

export default function connectToDatabase( collectionName ) {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.MONGODB_DB).collection(collectionName);
}
