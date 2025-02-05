```javascript
// Correct usage of $inc operator.
db.collection.updateOne({"_id":1},{"$inc":{"field":1}});
//Alternative solution to add to a string field
db.collection.updateOne({"_id":1},{"$set":{"field":  field + "string"}});
```