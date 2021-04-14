"use strict";
const { getPage, parsePage, saveRatingsToDB, deployScraper} = require("./utils");

module.exports.scrape = (event, context, callback) => {
  // fetch the page
  getPage(event)
    // parse the page
    .then(page => parsePage(page))
    //save to database
    .then(yelpData => saveRatingsToDB(yelpData, event))
    .then(() =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Scraped ${event}`
        })
      })
    )
    .catch(error =>
      callback(new Error(`Error Scraping ${event}: ${error}`))
    );
};
module.exports.launch_scrapers = (event, context, callback) => {
  const fakeDatabaseResults = [
 "big-city-window-cleaners-los-angeles",
 "alliance-auto-body-pasadena",
 "the-last-bookstore-los-angeles"
  ];

  fakeDatabaseResults.forEach(businessName => {
    deployScrapers(businessName);
  });
};
 





























/* 'use strict';
const { getPage, parsePage, saveRatingsToDB } = require("./utils"); 

module.exports.scrape = (event,context,callback) => {
   // 1. fetch yelp page
    //getPage(event).then(page => console.log(page))
    //Pasamos página como argumento 
    getPage(event)
  // 2. parse the page
     .then(page => parsePage(page))
  // 3. save ratings data to our db  
      .then(yelpData => saveRatingsToDB(yelpData, event))
      .then(() => 
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
         message:`Scraped ${events}`
        })
 */
  /* const response = {
    statusCode: 200,
    body: JSON.stringify({
     message:'Scraped $(events)'
      */
      // message: 'Go Serverless v1.0! Your function executed successfully!',
        //input: event,
    /* })
  )
  .catch(error =>
    callback(new Error(`Error Scraping ${event}: ${JSON.stringify(error)}`))
  );
};

 */









