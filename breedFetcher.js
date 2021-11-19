const request = require('request');

//const url = "https://api.thecatapi.com/v1/breeds/search?q=";
//const search = url + cat;

const fetchBreedDescription = function(breedName, callback) {
  let search = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  
  request(search, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback(error, 'No Cat Found.');
    } else {
      callback(null, data[0]['description']);
    }
  });
};

module.exports = {fetchBreedDescription};