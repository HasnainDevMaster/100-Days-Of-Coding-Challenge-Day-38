// 100 Days Of Coding Challenge!

/** Question 113: Checking for Canada’s Capital
Write a function that checks if a Map contains a key for `Canada` and logs the capital if it exists.*/

//-----------------------------------------------------------------------------------------------------

// Function to check if the Map contains a key for 'Canada' and log the capital if it exists
function checkCanadaCapital(map: Map<string, string>): void {
  // Check if 'Canada' is a key in the Map
  if (map.has("Canada")) {
    // If 'Canada' exists in the Map, log its capital
    console.log(`The capital of Canada is ${map.get("Canada")}`);
  } else {
    // If 'Canada' does not exist in the Map, log a message indicating so
    console.log("Canada is not in the Map");
  }
}

// Example Map with countries and their capitals
const country_Map: Map<string, string> = new Map();
country_Map.set("Pakistan", "Islamabad");
country_Map.set("Canada", "Ottawa");
country_Map.set("United Kingdom", "London");

// Call the function with the example Map
checkCanadaCapital(country_Map);
