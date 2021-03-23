const cheerio = require("cheerio");

module.exports = page => {
 try {
     const $ = cheerio.load(page);
     const rating = $(".css-1h1j0y3 .css-e81eai")
     .attr("class")
     .trim()
     .split(" ")[0];
     const reviewCount = $(".css-1h1j0y3 .css-e81eai")
     .attr("class")
     .trim()
     .split(" ")[0];

     const yelpData = {
      rating,
      reviewCount

     };
    return Promise.resolve(yelpData);
     console.log(rating, reviewCount);
 } catch(error) {
     return Promise.reject(`Error parsing page: ${JSON.stringify(error)}`);
 }
};