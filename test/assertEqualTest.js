//test code for assertEqual.js
const assertEqual = require("../assertEqual.js");

assertEqual("Lighthouse Labs", "Bootcamp"); //should fail
assertEqual(1, 1); //should pass
assertEqual("forty-two", 42); //should fail
assertEqual("towel", "towel"); //should pass
assertEqual("Babelfish", "Vogon"); //should fail
assertEqual(42, 42); //should pass
