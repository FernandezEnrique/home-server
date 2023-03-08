const express = require('express')
const fileUpload = require('express-fileupload');
const fs = require('fs');


const app = express()
const port = 3000
const mainFolder = './mainFolder/'
app.use(fileUpload());

function getFromDir (path) {
  let directoriesInDirectory = fs.readdirSync(path, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
  let filesInDirectory = fs.readdirSync(path, { withFileTypes: true })
    .filter((item) => item.isFile())
    .map((item) => item.name);
    return [directoriesInDirectory, filesInDirectory]
}

app.get('/:path?', (req, res) => {
  if (!req.params.path) {
    path = ""
  } else {
    path = req.params.path.replaceAll('-','/');
  }
  let directories, files;
  [directories, files] = getFromDir(mainFolder+path);
  res.json({
              "path":mainFolder+path,
              "files":files,
              "dicts":directories,
          })
})

app.post('/upload', (req, res) => {
  console.log("Files received");
  console.log(req.files)
  res.send(req.files);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})