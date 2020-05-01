"use strict";

// const apikey = require("./credentials/index").key;
const data = require("./data/dictionary.json");
const listOfWords = require("./data/all_words.json");

module.exports.dictionary = async (event) => {
  let word = event.queryStringParameters.word;

  let meaning = data.filter(
    (dict) => word.toLowerCase() === dict.word.toLowerCase()
  );

  // let api = event.queryStringParameters.apikey;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        word,
        meaning: meaning.length > 0 ? meaning[0].meaning : "NOT FOUND",
      },
      null,
      2
    ),
  };
};

module.exports.wordExist = async (event) => {
  let wordExist = event.queryStringParameters.word;

  let result = listOfWords.filter(
    (index) => wordExist.toLowerCase() === index.toLowerCase()
  );

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        wordExist: result.length > 0 ? true : false,
      },
      null,
      2
    ),
  };
};
