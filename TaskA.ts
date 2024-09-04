// 100 Days Of Coding Challenge!

/** Question 112: Creating a Country-Capital Map
Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.*/

//----------------------------------------------------------------------------------------------------------------------

// Create a Map to store country names as keys and their capitals as values
const countryMap: Map<string, string> = new Map();

// Add three countries to the Map
countryMap.set("Pakistan", "Islamabad");
countryMap.set('Germany', 'Berlin');
countryMap.set('Australia', 'Canberra');

// Log the Map to verify the entries
console.log(countryMap);
