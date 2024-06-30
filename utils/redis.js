// The constructor that creates a client to Redis
const { createClient } = require('redis');

class RedisClient {
  // The client to Redis
  constructor() {
    this.client = createClient();

    this.client.on('error', (err) => {
      console.log('Redis Client Error', err);
    });
  }

  isAlive() {
    // Check if the client is alive
    return this.client.connected;
  }

  async get(key) {
    // Get a value from Redis
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  }

  async set(key, value, duration) {
    // Set a value in Redis
    return new Promise((resolve, reject) => {
      this.client.set(key, value, 'EX', duration, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async del(key) {
    // Delete a value from Redis
    return new Promise((resolve, reject) => {
      this.client.del(key, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

const redisClient = new RedisClient();
module.exports = redisClient;
