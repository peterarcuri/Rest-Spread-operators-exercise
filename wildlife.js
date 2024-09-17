/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

console.log('============================================================================');

function animalTracking(...sanctuaryAnimals) {
	console.log(`Animal sightings: ${sanctuaryAnimals}`);
}

animalTracking('chickens', 'fish', 'cows', 'goats', 'horses', 'pigs', 'turkeys', 'sheep');

console.log('============================================================================');


// ==================================================================
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const allHabitats = [ ...forestHabitats, ...savannahHabitats];

console.log(`Merged Habitats: ${allHabitats}`);

console.log('============================================================================');



// ==================================================================
/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const updatedRhinoStatus = ({...rhinoStatus, increasedPopulation: true, changeInHabitat: false});
console.log(updatedRhinoStatus);
console.log('====================================================');


// =======================================
/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */
console.log(lionProfile);

console.log('====================================================');

const geneticProfile = { ...lionProfile, genetics: {populationVariation: 'high', ancestralOrigins: ['Africa', 'Savanna']}};

console.log(geneticProfile);
console.log('====================================================');
console.log(lionProfile);
console.log('====================================================');

// created a new variable named "geneticProfile" which uses the spread operator and adds a property called "genetics" to the existing object. 
// After adding a new property and values to the existing object, the original was not changed. The new property added was not displayed in the original.

// ==================================================================
/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */

const updatedEcosystemHealth = {...ecosystemHealth, foodSupply: {herbivores: "Low", carnivores: "Abundant"}};

console.log(`Original Ecosystem Health: `, ecosystemHealth);
console.log(`Updated Ecosystem Health: `, updatedEcosystemHealth);
console.log(ecosystemHealth);

