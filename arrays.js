var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var superheroines = ['cat woman', 'she-hulk', 'mystique'];
superheroines.push('wonder woman');

var cities = ['New York', 'San Francisco'];
cities.unshift('Philadelphia');

var cities = ['New York', 'San Francisco'];
['Philadelphia',...cities];

function addElementToBeginningOfArray(array, element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array 
}

function addElemetToEndOfArray(array, element){
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array 
}

