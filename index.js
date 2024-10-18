function calculateTotalPrice() {
    let basePrice = 100;
    let finalPrice = basePrice;

    let educationMultipliers = {
        "under": 1.5,
        "coll": 1.2,
        "high": 1.05,
        "mid": 0.9
    };

    let education_degree = document.getElementById("education_degree").value;
    finalPrice *= educationMultipliers[education_degree] || 1;

    let netWorth = document.getElementById("net-worth").value;
    let netWorthMultiply = 1;
    if (netWorth === "more_10000") netWorthMultiply = 2;
    else if (netWorth === "more_5000") netWorthMultiply = 1.5;
    else if (netWorth === "less_500") netWorthMultiply = 1.2;

    finalPrice *= netWorthMultiply;

    let caste = document.getElementById("caste").value;
    finalPrice += parseInt(caste, 10);

    let skillsValues = [10, 20, 15, 10]; 
    let skills = ["musical", "cook", "character", "sings"];
    for (let i = 0; i < skills.length; i++) {
        if (document.getElementById(skills[i]).checked) {
            finalPrice += skillsValues[i];
        }
    }

    let age = document.querySelector('input[name="age"]:checked').value;
    let ageMultiply = 1;
    if (age === "1.5") ageMultiply = 1.5;
    else if (age === "1.2") ageMultiply = 1.2;
    else if (age === "0.95") ageMultiply = 0.95;

    finalPrice *= ageMultiply;

    let reputationMultiplier = 1;

    let gossipsAboutParents = document.getElementById("gossip-parents").checked;
    let gossipsAboutCharacter = document.getElementById("gossip-character").checked;
    let generalGossip = document.getElementById("general-gossip").checked;

    if (gossipsAboutParents) {
        reputationMultiplier = 0.85;
    } else if (gossipsAboutCharacter) {
        reputationMultiplier = 0.9;
    }
    if (generalGossip) {
        finalPrice -= 20;
    }
    finalPrice *= reputationMultiplier;

    document.getElementById("final_price_display").innerText = "Final Price: $" + finalPrice.toFixed(2);
}
