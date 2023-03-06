const express = require('express')
const fileUpload = require('express-fileupload');
const app = express()
const port = 3000

app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.post('/upload', (req, res) => {
  console.log("Files received");
  console.log(req.files)
  res.send(req.files);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})