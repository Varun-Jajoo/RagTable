import { ChromaClient } from 'chromadb'
const client = new ChromaClient();

const  main = async()=> {
    const collection = await client.getOrCreateCollection({
        name: "my_collection",
    });
    
    // switch `add` to `upsert` to avoid adding the same documents every time
    await collection.upsert({
        documents: [
            "This is a document about pineapple",
            "This is a document about oranges"
        ],
        ids: ["id1", "id2"],
    });
    
    const results = await collection.query({
        queryTexts: ["oranges"], 
        nResults: 1, 
    });
    
    console.log(results)
    
}
main();