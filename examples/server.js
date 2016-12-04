const express = require('express')
const path = require('path')

const app = express()

app.set('port', 8000)
app.use(express.static(path.join(__dirname, 'build')));

function catchAll(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
}

app.get('/', catchAll)
app.get('*', catchAll)

app.listen(app.get("port"), function(){
  console.log("server started at", (new Date()));
  console.log("listening on *:", app.get("port"));
});