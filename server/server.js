const express = require('express');
const path = require('path');


const PORT = 3000;

const app = express();


app.use(express.json());
app.use(express.urlencoded());


// HOME PAGE
app.get('*',
  (req, res) => {
    res.status(202).sendFile(path.join(__dirname, '../client/index.html'))
  }
);



/*** 404 handler ***/
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/*** Global error handler ***/
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, ()=>{ console.log(`Beep boop 🤖 Listening on port ${PORT}...`); });

module.exports = app;
