import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
    servicesCollection: "products",
    userCollection: "users",
}

export default function connectToDatabase( collectionName ) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.NEXT_PUBLIC_MONGODB_DB).collection(collectionName);
}
