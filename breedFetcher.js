const request = require('request');
let cat = process.argv.slice(2);
cat = cat.join("_");
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const search = url + cat;

request(search, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    return console.log('No Cat Found.');
  }
  console.log(data[0]['description']);
});

