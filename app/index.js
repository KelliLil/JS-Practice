// create sample data for e-commerce store
const userName = "joec1982";
const firstName = "Joe";
const lastName = "Cowin";

const product1 = "T-Shirt";
const product2 = "Socks";

const cartTotal = 100;
const discount = 0.1;

function getFullName(fName, lName) {
  return fName + " " + lName;
}

const welcomeMsg = "Welcome to the store," + getFullName(firstName, lastName);

// Template literals with interpolation - USE backticks and add $ to implement JS
const welcomeMsg2 = `Welcome to the store, ${getFullName(firstName, lastName)}`;

console.log(welcomeMsg);

// TODO: write an 'if' statement such that is total is over $100, get 10% discount. Otherwise no discount. Log out the correct output. Use template literals to interpolate discount amount and the tolal

if (cartTotal > 100) {
  console.log(`You get a ${discount*100}%`discount!);
  // Create sample data for a e-commerce store
const username = "joec1982";
const firstName = "Joe";
const lastName = "Cowin";

const product1 = "T-Shirt";
const product2 = "Socks";

const cartTotal = 101;
const discount = 0.1;

function getFullName(fName, lName) {
  return fName + " " + lName;
}

// Template literals with interpolation
const welcomeMsg = `Welcome to the store, ${getFullName(firstName, lastName)}`;

console.log(welcomeMsg);

// TODO: Write an 'if' statement such that if the total is over $100, the user gets a 10% discount. Otherwise, there is no discount. Either way log out the correct output. Use template literals to interpolate the discount amount and the total.

if (cartTotal > 100) {
  console.log(`You get a ${discount * 100}% discount!`);
  console.log(`Your total is now $${cartTotal * (1 - discount)}`);
} else {
  console.log(`Your total is $${cartTotal}`);
}