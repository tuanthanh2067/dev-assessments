"use strict";
const data = require("./test_data.json");

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test2() {
  let results;

  // Write your code here.  The pre-written lines above and below are just suggestions, feel free to delete
  // them and start fresh.

  results = data
    .filter((obj) => obj.last_name === "Simpson")
    .map((obj) => {
      return {
        ...obj,
        example: `${obj.first_name} ${obj.last_name} says ${obj.catchphrase}`,
      };
    });

  return results;
};
