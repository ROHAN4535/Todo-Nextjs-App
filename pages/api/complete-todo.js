import { MongoClient, ObjectId } from "mongodb";

const CompleteTodo = async (req, res) => {
  if (req.method === "PUT") {
    const { id } = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://grohan468:vL36mLl4mTA0Z1y5@cluster0.q4g0csj.mongodb.net/todoData?retryWrites=true&w=majority"
      );
      const db = client.db();
      const todosCollection = db.collection("todos");
      await todosCollection.updateOne(
        { _id: ObjectId(id) },
        { $set: { completed: true } }
      );
      client.close();

      res.status(200).json({ message: "Todo marked as completed." });
    } catch (error) {
      console.error("Error completing todo:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export default CompleteTodo;