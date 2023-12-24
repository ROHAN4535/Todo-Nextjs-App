import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
        "mongodb+srv://grohan468:vL36mLl4mTA0Z1y5@cluster0.q4g0csj.mongodb.net/todoData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");
    const result = await todosCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Todo Inserted.",todo: result });
  }
};

export default handler;