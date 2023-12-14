const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/api/nutritionix-item', (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://trackapi.nutritionix.com/v2/search/item/?upc=49000000450',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-app-id': 'c1a13853',
        'x-app-key': '369a92284a0e668e4495e353572c95b6'
      }
    };
  
    request(options, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.send(body);
      }
    });
  });

router.post('/api/nutritionix-nutrients', (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': 'c1a13853',
      'x-app-key': '369a92284a0e668e4495e353572c95b6'
    },
    body: JSON.stringify({
      query: req.body.query // assuming the query is sent in the request body
    })
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {

      const data = JSON.parse(body);
      res.json(data); // Send the data received from Nutritionix API as a response
    }
  });
});

module.exports = router;