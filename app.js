// if and else if 

const marks = 65;
if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 70) {
    console.log("A");
}
else if (marks >= 60) {
    console.log("A-");
}
else if (marks >= 50) {
    console.log("B");
}
else if (marks >= 40) {
    console.log("C");
}
else if (marks >= 33) {
    console.log("D");
}
else {
    console.log("F");
}

// Converting Number Variables Into String

const num = 50;
const convertedNum = num.toString();
console.log(typeof convertedNum);

// Converting Number Variables Into String -  Option 2

const number = 50;
const convertedNumber = String(number);
console.log(typeof convertedNum);

// Converting String Variables Into Number

const myName = "Tahia";
const convertedName = Number(myName);
console.log(typeof convertedName);

// Equality Operators

console.log(50 == "50");
console.log(50 === "50");

// Operators (&&  || )

const yourAge = 40;
const bribe = 700000;
const relativeOfGoverment = true;
if ((yourAge <= 35 && bribe >= 500000) || relativeOfGoverment) {
    console.log("You will get government job.");
} else {
    console.log("You won't get government job");
}

// Operators (&&  || ) - Example : 2

const year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} it's not a leap year.`);
}

// Type Coerction

console.log(100 + 10);
console.log(10 + "100");
console.log(10 - "10");
console.log(10 * "100");
console.log(10 / "100");
console.log(10 % "100");
console.log(10 ** "100");
console.log("Tahia" + "Bushra");

// Switch Case

const mark = 75;
switch (true) {
    case mark >= 80:
        console.log("A+");
        break;
    case mark >= 70:
        console.log("A");
        break;
    case mark >= 60:
        console.log("A-");
        break;
    case mark >= 50:
        console.log("B");
        break;
    case mark >= 40:
        console.log("C");
        break;
    case mark >= 33:
        console.log("D");
        break;
    default:
        console.log("F");
}

// Switch Case - Example:2

const day = "Friday";
switch (day) {
    case "Sunday":
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Working Day");
        break;
    case "Friday":
    case "Saturday":
        console.log("It's holiday.");
        break;
    default:
        console.log("Invalid day.");
}

// Ternery Operator

const teamA = 3;
const teamB = 5;
const winner = teamA > teamB ? "teamA" : "teamB";
console.log(winner);

// Ternery Operator - Example:2

const digit = 20;
const result = digit % 2 === 0 ? "Even" : "Odd";
console.log(result);
