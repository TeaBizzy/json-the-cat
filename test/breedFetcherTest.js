const { expect } = require("chai");
const { fetchBreedDescription } = require("../breedFetcher");

describe("fetchBreedDescription", () => {
  it("Should return a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      expect(err).to.be.null;

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      expect(desc.trim()).to.be.equal(expectedDesc);

      done();
    });
  });

  it("Should return an error for an invalid breed, via callback", (done) => {
    fetchBreedDescription("BeepBop", (err) => {
      expect(err).to.not.be.null;

      done();
    });
  });
});