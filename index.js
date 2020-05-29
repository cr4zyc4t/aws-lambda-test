// https://62xns314rc.execute-api.ap-southeast-1.amazonaws.com/fisrt-api?name=ToanVQ
const _ = require("lodash");

exports.handler = async function(event, context, callback) {
  const name =  event['queryStringParameters']['name'];
  const id = _.random(100000, 999999);

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello ${name} Lambda! This is your id: ${id}`),
  };
  return response;
};
