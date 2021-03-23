 'use strict';
const { getPage, parsePage, saveRatingsToDB } = require('./utils'); 

module.exports.scrape = (event,context,callback) => {

   // 1. fetch yelp page
    //getPage(event).then(page => console.log(page))
    //Pasamos página como argumento 
    getPage(event)
  // 2. parse the page
     .then(page => parsePage(page))
  // 3. save ratings data to our db  
      .then(yelpData => saveRatingsToDB(yelpData));



  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
    })
  };
};


/* 'use strict';
const {parsePage, saveRatingsToDB} = require("./utils");
const request = require("request-promise");
 
module.exports.scrape = async (event, context) => {
  // 1. Fetch page
  const response = await request({ method: "GET", url: `https://www.yelp.com/biz/${event}`})
  .then(page => parsePage(page)) // 2. Parse Page
  //.then(yelpData => saveRatingsToDB(yelpData, event)) // 3. Save ratings to DynamoDB
  .then(response => {
      console.log(response);
    }
  );
    
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};

 */