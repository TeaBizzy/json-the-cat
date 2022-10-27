const { fetchBreedDescription } = require("./breedFetcher");


fetchBreedDescription("Bengal", (error, description) => {
  console.log(description);
});