import { MongoClient } from "mongodb";

const GetTodos = async (req, res) => {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
        "mongodb+srv://grohan468:vL36mLl4mTA0Z1y5@cluster0.q4g0csj.mongodb.net/todoData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    const result = await todosCollection.find().toArray();

    client.close()

    res.status(200).json({ todos: result });
  }
};

export default GetTodos;