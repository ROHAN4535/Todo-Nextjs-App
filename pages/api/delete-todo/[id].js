import { MongoClient, ObjectId } from "mongodb";

const DeteleHandler = async (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://grohan468:vL36mLl4mTA0Z1y5@cluster0.q4g0csj.mongodb.net/todoData?retryWrites=true&w=majority"
      );
      const db = client.db();
      const todosCollection = db.collection("todos");
      const result = await todosCollection.deleteOne({ _id: new ObjectId(id) });
      client.close();

      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Todo removed." });
      } else {
        res.status(404).json({ message: "Todo not found." });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default DeteleHandler;