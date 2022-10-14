const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/index.html')
})

app.get('/quiz', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/quiz.html')
})

app.get('/mindmap', (req, res) => {
  try {
    res.status(200).sendFile(__dirname + '/views/mindmap.html');
  } catch (error) {
    console.log(error);
    res.status(500);
  }
})


app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})

