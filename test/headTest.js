const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

//test the code:
assertEqual(head([5,6,7]), 5);//should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//should pass
assertEqual(head([]));//should pass as both are undefined
assertEqual(head([1]));//should pass