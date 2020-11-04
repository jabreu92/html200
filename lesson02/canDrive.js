/** CanDrive Program **/
let firstName = 'John';
let lastName = 'Smith';
let validAgeToDrive = 16;

let driversAgePrompt= prompt('Please enter your age');
let driversAge = parseInt(driversAgePrompt);

if (driversAge >= validAgeToDrive) {
 console.log(`The driver ${firstName}  ${lastName} has an age of ${driversAge} and is old enough to drive` );
} else {
   console.log(`The driver ${firstName} ${lastName} is not old enough to drive !` );
}