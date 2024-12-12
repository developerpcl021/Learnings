const express = require('express');
const { json } = require('express');
const { MongoClient } = require('mongodb');


const app = express();
const port = 3002;

app.use(json());

// Connect to MongoDB
const uri = 'mongodb://127.0.0.1:27017/LibreChat';
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectToMongoDB();

// Define routes
app.get('/templates', async (req, res) => {
  try {
    const db = client.db('user-1');
    const tasks = await db.collection('user-data-1').find().toArray();
    res.json(tasks);
  } catch (err) {
    console.error('Failed to fetch tasks', err);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});
// Define routes
app.post('/templates', async (req, res) => {
  try {
    const { title, content } = req.body;
    
    // Assuming the database and collection are already created
    const db = client.db('user-1');
    const collection = db.collection('user-data-1');
    
    // Create a new template document
    const template = {
      title,
      content
    };

    // Insert the template into the collection
    const result = await collection.insertOne(template);

    // Send the response with the inserted template
    res.json(result.ops[0]);
  } catch (err) {
    console.error('Failed to add template', err);
    res.status(500).json({ error: 'Failed to add template' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/templates`);
});
