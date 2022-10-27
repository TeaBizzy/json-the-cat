const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      process.exit();
    }

    let data = JSON.parse(body); // Have to parse the data first to check if this was a bad inquiry.

    // Check for a bad inquiry,
    if (data.length < 1) {
      const invalidInquiryErr = new Error(`Invalid inquiry: ${breed}. Please try again...`);
      callback(invalidInquiryErr, null);
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };

