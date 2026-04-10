//Create variables for student details
let studentName = "Moses Kebee";
let age = 21;
let country = "Kenya";
let course = "Software Engineering";
let hasPaidFees = true;  // true or false

//Create the regular function
function checkEligibility(name, studentAge, studentCountry, studentCourse, feesStatus) {
    //Use conditional to check both conditions
    if (studentAge >= 18 && feesStatus === true) {
        return `${name} is eligible to join the ${studentCourse} course.`;
    } else {
        return `${name} is NOT eligible to join the course.`;
    }
}

// Calling the function 
let result = checkEligibility(studentName, age, country, course, hasPaidFees);

//Display the result
console.log(result);