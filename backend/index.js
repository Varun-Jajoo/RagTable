import { ChromaClient } from "chromadb";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const client = new ChromaClient();

const app = express();

app.use(cors());
app.use(express.json());

const main = async (text, queryTexts) => {
  const collection = await client.getOrCreateCollection({
    name: "my_collection",
  });

  function splitTextByFullStop(text) {
    let sentences = text.split(/\. ?/);
    sentences = sentences.map((sentence, index) => {
      if (
        index !== sentences.length - 1 ||
        (index === sentences.length - 1 && sentence !== "")
      ) {
        return sentence + ".";
      }
      return sentence;
    });
    if (sentences[sentences.length - 1] === "") {
      sentences.pop();
    }

    return sentences;
  }

  function generateIds(documents) {
    return documents.map((_, index) => `id${index + 1}`);
  }

  const documents = splitTextByFullStop(text);
  const ids = generateIds(documents);

  await collection.upsert({
    documents,
    ids,
  });

  const results = await collection.query({
    queryTexts,
    nResults: 2,
  });
  console.log(results);
  return results;
};

app.post("/data", async (req, res) => {
  const { fields, docText } = req.body;

  console.log("Fields:", fields);
  console.log("Document Text:", docText);

  const description = () => {
    return fields.map((field) => `${field.description}`);
  }
  const queryTexts = description();

  try {
    const results = await main(docText, queryTexts);
    console.log("Query Results:", results.documents);
    res.status(200).json({ message: "Data received successfully", documents: results.documents,fields });
  } catch (error) {
    console.error("Error during query:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
