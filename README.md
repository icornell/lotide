# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @icornell/lotide`

**Require it:**

`const _ = require('@icornell/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: uses eqArrays to check if two arrays are equal and prints out if they are equal or not
* `assertEqual(actual, expected)`: checks if two values are equal
* `assertObjectsEqual(actual, expected)`: uses eqObjects to check if two objects are equal and prints out if the assertion passed or failed
* `countLetters(sentence)`: counts all the letters in a given string or sentence
* `countOnly(allItems, itemsToCount)`: returns an object containing counts of everything in a string that the input object listed
* `eqArrays(array1, array2)`: takes two arrays and returns true or false, dependant on a perfect match
* `eqObjects(object1, object2)`: takes two objects and compares them to see if they are equal
* `findKey(obj, callback)`: returns the first key of a given object that matches the callback
* `findKeyByValue(object, value)`: finds the first key in a given object which matches the given value
* `flatten(arr)`: takes nested arrays and flattens them into one single-level array
* `head(arr)`: returns the first element, or head, of an array
* `letterPositions.js(sentence)`: returns an object where the keys are the letters in a given sentence and the values the index positions where they appear
* `map(array, callback)`: returns a new array based on the results of the callback function.
* `middle(arr)`: returns the middle element(s) of an array - one or two, depending on if the array is even or odd
* `tail(arr)`: returns the end elements, or tail, of an array (all but the head)
* `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning until the callback returns a truthy value
* `without(source, itemsToRemove)`: returns a new array after having removed the given items in itemsToRemove
