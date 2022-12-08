// create sample data for e-commerce store
const userName = "joec1982";
const firstName = "Joe";
const lastName = "Cowin";

const product1 = "T-Shirt";
const product2 = "Socks";

function getFullName(fName, lName) {
  return fName + " " + lName;
}

const welcomeMsg = "Welcome to the store," + getFullName(firstName, lastName);

// Template literals with interpolation - USE backticks and add $ to implement JS
const welcomeMsg2 = `Welcome to the store, ${getFullName(firstName, lastName)}`;

console.log(welcomeMsg);
