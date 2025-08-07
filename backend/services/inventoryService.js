const redis = require("redis");
const client = redis.createClient();

// Reserve stock for a user
const reserveStock = async (productId, quantity, userId) => {
  const key = `reservation:${productId}:${userId}`;
  await client.setex(key, 900, quantity); // 15 minute reservation
};

// Release reserved stock
const releaseStock = async (productId, userId) => {
  const key = `reservation:${productId}:${userId}`;
  await client.del(key);
};

module.exports = { reserveStock, releaseStock };
