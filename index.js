// Code your solution here
/*const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(array, string) {
  const matches = []; // Create an empty array to store matches
  for (const driver of array) { // Iterate through the array
    if (driver.toLowerCase() === string.toLowerCase()) { // Check for a case-insensitive match
      matches.push(driver); // Add the matching driver to the matches array
    }
  }
  return matches;
}
console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));

function fuzzyMatch(array, string){
    const fuzzy = [];
    for(const driver of array){
        if(driver.includes(string)){
            fuzzy.push(driver)
        } 
    }
return fuzzy
}*/
// Im
function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
}


describe('fuzzyMatch()', function () {
    const drivers = [];

    beforeEach(function () {
        drivers.length = 0; // Clear the array
        drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    });

    it('returns a driver if beginning provided letters match', function () {
        expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
    });

    it('does not return drivers if only middle or ending letters match', function () {
        expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
    });

    it('does not return drivers if only middle or ending letters match', function () {
        expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
    });
});
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(array, string) {
  const matches = []; // Create an empty array to store matches
  for (const driver of array) { // Iterate through the array
    if (driver.toLowerCase() === string.toLowerCase()) { // Check for a case-insensitive match
      matches.push(driver); // Add the matching driver to the matches array
    }
  }
  return matches;
}
console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));

    // Implementation of matchName
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}

// Test Suite
describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function () {
        const drivers = [
            { name: 'Bobby', hometown: 'Pittsburgh' },
            { name: 'Sammy', hometown: 'New York' },
            { name: 'Sally', hometown: 'Cleveland' },
            { name: 'Annette', hometown: 'Los Angeles' },
            { name: 'Bobby', hometown: 'Tampa Bay' }
        ];

        expect(matchName(drivers, 'Bobby')).to.eql([
            { name: 'Bobby', hometown: 'Pittsburgh' },
            { name: 'Bobby', hometown: 'Tampa Bay' }
        ]);
    });
});


