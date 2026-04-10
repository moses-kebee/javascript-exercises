function createLearnerSummary() {
    
    // Nested function 1- returns learner name
    function getName() {
        return "Moses Kebee";
    }
    
    // Nested function 2- returns learner age
    function getAge() {
        return 21;
    }
    
    // Nested function 3- returns favorite programming language
    function getFavoriteLanguage() {
        return "JavaScript";
    }
    
    // Nested function 4- returns city
    function getCity() {
        return "Nairobi";
    }
    
    // Condition -is learner adult or young
    let age = getAge();
    let ageStatus;
    
    if (age >= 18) {
        ageStatus = "an adult learner";
    } else {
        ageStatus = "a young learner";
    }
    
    let summary = `${getName()} is ${ageStatus} from ${getCity()} who loves ${getFavoriteLanguage()}.`;
    
    // the final sentence
    return summary;
}

// Call the outer function and display the result
let result = createLearnerSummary();
console.log(result);