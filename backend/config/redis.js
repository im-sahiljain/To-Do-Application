const redis = require('redis');

const client = redis.createClient({
  host: 'localhost', 
  port: 6379,        
 
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});


client.on('connect', () => {
  console.log('Redis client connected');
});

module.exports = client;
