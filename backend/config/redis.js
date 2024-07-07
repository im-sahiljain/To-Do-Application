const redis = require('redis');

// Create Redis client
const client = redis.createClient({
  host: 'localhost', // Redis server host
  port: 6379,        // Redis server port
  // Add more configuration options if needed
});

// Handle connection errors
client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Optional: Handle connect event
client.on('connect', () => {
  console.log('Redis client connected');
});

module.exports = client;
