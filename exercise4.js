// Create variables
let travelerName = "Moses Kebee";
let destination = "Paris";
let month = "June";
let hasPassport = true;

// Anonymous function
let createTravelPlan = function(name, dest, travelMonth, passportStatus) {
    if (passportStatus === true) {
        return `${name} can travel to ${dest} in ${travelMonth}. He has a valid passport.`;
    } else {
        return `${name} cannot travel yet. Please get a passport first.`;
    }
};

// Calling the function 
let travelResult = createTravelPlan(travelerName, destination, month, hasPassport);

// Print 
console.log(travelResult);