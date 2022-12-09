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

const products = [
  {
    name: "Socks",
    price: 5.99,
    description: "A pair of warm, fuzzy socks",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Pants",
    price: 10.99,
    description: "A nice pair of pants",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Shoes",
    price: 25.99,
    description: "A nice pair of shoes",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
];

// Template literal - looks like creating a catalogue using JS
function createProductTile(prod) {
  return `
  <figure>
     <img src="${prod.imgUrl}" alt="${product.name}">
     <figcaption>
       <h2>${prod.name}</h2>
       <small>${prod.price}</small>
       <p>${prod.description}</p>
     </figcaption>
  </figure>
  `;
}
const firstProduct = products[0];
console.log(createProductTile(firstProduct));

const productTile = createProductTile(product);
console.log(productTile);

const cartTotal = 101;
const discount = 0.1;

function getFullName(fName, lName) {
  return fName + " " + lName;
}

// Template literals with interpolation
const welcomeMsg = `Welcome to the store, ${getFullName(firstName, lastName)}`;

console.log(welcomeMsg);

if (cartTotal > 100) {
  console.log(`You get a ${discount * 100}% discount!`);
  console.log(`Your total is now $${cartTotal - cartTotal * discount}`);
} else {
  console.log(`Your total is $${cartTotal}`);
}

// Arrays are collections that are indexed by implicitly generated numbers
// The first item in the array is at index 0, the second at index 1, and so on
// Arrays are zero-indexed, meaning the first item is at index 0
const num = ["Socks","Shoes","Pants","Shirt","Hat"];

const fistItem = num[0]
const secondItem = num[1]
const thirdItem = num[2]

console.log(firstItem)
console.log(secondItem)
console.log(thirdItem)

const catalog = []