const cheerio = require("cheerio");

module.exports = page => {
  try {
    const $ = cheerio.load(page);
    const rating = $(".css-e81eai")
     .text()
     /* .attr("class")
     .trim()
     .split(" ")[0];  */
     const reviewCount = $(".css-e81eai")
     .text()
     /* .trim() 
     .split(" ")[0]; */
     //console.log(rating);
     const yelpData = {
      rating, 
     reviewCount
      
     }; 
    return Promise.resolve(yelpData);
     //console.log(rating, reviewCount);
 } catch(error) {
     return Promise.reject(`Error parsing page: ${error}`);
 }
};