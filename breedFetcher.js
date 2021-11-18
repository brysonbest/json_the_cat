const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=siberian"

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
});

