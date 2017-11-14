const express = require('express');

const app = express()

app.get('/api/timestamp/:dateString?', (req, res) => {
  let date;
  if (req.params.dateString) {
    date = new Date(req.params.dateString);
  } else {
    date = new Date();
  }
  if (date.toString() === 'Invalid Date') {
    res.json({
      error: "Invalid Date"
    });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }
});

app.listen(3000, () => console.log('listening on 3000'));
