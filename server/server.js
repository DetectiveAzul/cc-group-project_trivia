const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
let port = process.env.PORT || 8080;
// const indexRouter = require('./routers/index_router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());
// app.use(indexRouter);

app.listen(port, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
