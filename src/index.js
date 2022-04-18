const express = require("express");
const connect = require("./configs/db");
const app = express();

const residentController = require('./controllers/resident.controller')
const blockController = require('./controllers/block.controller')
const  flatController= require('./controllers/flat.controller')
const port = process.env.PORT || 3002

app.use(express.json());

app.use('/resident', residentController)
app.use('/flat', flatController)
app.use('/block', blockController)


app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});
