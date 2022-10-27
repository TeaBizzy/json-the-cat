const request = require("request");

const args = process.argv.slice(2);
const breed = args[0];

request.get(`https://api.thetapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    throw (error);
  }

  let data = JSON.parse(body); // Have to parse the data first to check if this was a bad inquiry.

  // Check for a bad inquiry,
  if (data.length < 1) {
    const invalidInquiryErr = new Error(`Invalid inquiry: ${breed}. Please try again...`);
    throw (invalidInquiryErr);
  }
});