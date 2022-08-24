const { builder } = require("@netlify/functions")

async function handler(event, context) {


  var todayDate = new Date().toISOString();
  return {
    statusCode: 200,
    ttl: 60,
    headers: {
      "Content-Type": "text/html",
    },
    body: `<html>${todayDate}</html>`
  };
console.log(todayDate)
}

exports.handler = builder(handler);
