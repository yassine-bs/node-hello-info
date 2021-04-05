const express = require('express')
const app = express()
const port = 8080


console.log("aaa")
MongoClient.connect("mongodb://admin:FDOhyc48514@node61061-env-6457908.jcloud-ver-jpe.ik-server.com :27017/admin", { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
console.log("aaa2");
if(!err) {
   console.log({db});
   console.log("You are connected!");
   };
      db.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})