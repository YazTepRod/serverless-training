/*'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        //message: 'Go Serverless v1.0! Your function executed successfully!',
        //input: event,
        event:event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};*/

"use strict";

module.exports.hello = (event, context, callback) => {
    console.log(event);
  

    const reply = `Hello ${event.pathParameters.name}`;
  
  //const { first, second } = event;
  //const added = first + second;
const response = {
    statusCode: 200,
    body: JSON.stringify({ 
      //message: "Go Serverless v1.0! Your function executed successfully!",
      //event: event
      //event: added
    //message: "Ola ke ase?"
     message: JSON.stringify(reply)
    })
  };
  
   callback(null, response);

  //callback(new Error("Something went wrong. Ooops!"));
};
 