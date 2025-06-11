// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}
// Returns the last two drivers from the array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}
// Array containing the two functions defined above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// Higher-order function that returns a function to multiply fares
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}
// Doubles the fare using the createFareMultiplier function
const fareDoubler = createFareMultiplier(2);
// Triples the fare using the createFareMultiplier function
const fareTripler = createFareMultiplier(3);
// Selects either the first two or last two drivers based on the passed function
function selectDifferentDrivers(drivers, driverSelectorFunction) {
  return driverSelectorFunction(drivers);
}