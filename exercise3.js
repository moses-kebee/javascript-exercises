// Function using console.log()
function showClubName() {
    console.log("Tech Innovators Club");
}

//Function using return
function getClubName() {
    return "Tech Innovators Club";
}

// Store results
let loggedResult = showClubName()
let returnedResult = getClubName()

// Print stored variables
console.log("showClubName():", loggedResult);  
console.log("getClubName():", returnedResult); 

// one more function
function createClubMessage(clubName, meetingDay, isOpen) {
    if (isOpen === true) {
        return `${clubName} is open and will meet on ${meetingDay}.`;
    } else {
        return `${clubName} is currently closed. No meetings scheduled.`;
    }
}

// Test
let message1 = createClubMessage("Tech Innovators Club", "Wednesday", true);
console.log(message1);

let message2 = createClubMessage("Tech Innovators Club", "Friday", false);
console.log(message2);

let message3 = createClubMessage("Chess Club", "Monday", true);
console.log(message3);