// 100 Days Of Coding Challenge!

/** Question 114: Iterating Over Student IDs and Names
Iterate over a Map of student IDs and names, and log each pair to the console.*/

//-------------------------------------------------------------------------------

// Create a Map to store student IDs as keys and their names as values
const studentMap: Map<number, string> = new Map([
  [101, "Adrian"],
  [102, "Brian"],
  [103, "Carl"],
]);

// Iterate over the Map and log each student ID and name
studentMap.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
