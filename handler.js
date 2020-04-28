"use strict";

const apikey = require("./credentials/index").key;
const data = require("./dictionary.json");

module.exports.dictionary = async (event) => {
  let word = event.queryStringParameters.word;

  let meaning = data.filter(
    (dict) => word.toLowerCase() === dict.word.toLowerCase()
  );

  let api = event.queryStringParameters.api;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: 200,
        word,
        meaning:
          api.toLowerCase() === apikey
            ? meaning[0].meaning
            : "Use Correct API Key",
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
