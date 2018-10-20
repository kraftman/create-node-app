'use strict';

const express = require('express');
const app = express();
const port = 3000;

const homeRouter = require('./routes/home');

app.use('/', homeRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error(res.locals);
  // render the error page
  res.status(err.status || 500);
  res.send(res.locals);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
