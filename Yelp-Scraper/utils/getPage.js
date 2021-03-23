const request = require('request-promise')


module.exports = bussinessName => {
  //https://www.yelp.com/biz/the-last-bookstore-los-angeles
const url = `https://www.yelp.com/biz/${bussinessName}`;

return request({method: "GET", url:url });

};