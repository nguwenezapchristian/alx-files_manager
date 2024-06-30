const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || '27017';
    const dbName = process.env.DB_NAME || 'files_manager';
    const uri = `mongodb://${host}:${port}/${dbName}`;

    this.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = dbName;

    this.client.connect()
      .then(() => {
        console.log('Connected to MongoDB');
        this.db = this.client.db(this.dbName);
      })
      .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
      });
  }

  isAlive() {
    // Check if the client is alive
    return this.client.connected;
  }

  async nbUsers() {
    if (!this.db) {
      return 0;
    }
    const collection = this.db.collection('users');
    const result = await collection.countDocuments();
    return result;
  }

  async nbFiles() {
    if (!this.db) {
      return 0;
    }
    const collection = this.db.collection('files');
    const result = await collection.countDocuments();
    return result;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
