import { MongoClient, ObjectId } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    const { id } = req.query;
    const { status } = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://grohan468:vL36mLl4mTA0Z1y5@cluster0.q4g0csj.mongodb.net/todoData?retryWrites=true&w=majority"
      );
      const database = client.db();
      const todosCollection = database.collection("todos");

      const objectId = new ObjectId(id);
      const result = await todosCollection.updateOne(
        { _id: objectId },
        { $set: { status } }
      );

      if (result.matchedCount > 0) {
        res.status(200).json({ message: "Todo status updated successfully." });
      } else {
        res.status(404).json({ message: "Todo not found." });
      }
      client.close();

    } catch (error) {
      console.error("Error updating todo status:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;