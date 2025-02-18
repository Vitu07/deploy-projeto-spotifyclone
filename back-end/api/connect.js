import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Vitor:Cr7126907@cluster0.u1usc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
