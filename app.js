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