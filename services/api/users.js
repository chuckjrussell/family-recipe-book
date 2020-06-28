function users(db) {
  const userCollection = db.collection("users");
  return userCollection.find().toArray();
}

function user(db, id) {
  const userCollection = db.collection("users");
  return userCollection.findOne({
    id: id,
  });
}

function createUser(db) {}

module.exports = { users, createUser };
