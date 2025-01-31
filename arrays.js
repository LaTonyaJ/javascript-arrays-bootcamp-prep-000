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

function addElementToEndOfArray(array, element){
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array 
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array
}

