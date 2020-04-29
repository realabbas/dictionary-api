"use strict";

const apikey = require("./credentials/index").key;
const data = require("./data/dictionary.json");

module.exports.dictionary = async (event) => {
  let word = event.queryStringParameters.word;

  let meaning = data.filter(
    (dict) => word.toLowerCase() === dict.word.toLowerCase()
  );

  let api = event.queryStringParameters.apikey;

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
};
