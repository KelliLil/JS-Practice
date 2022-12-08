// create sample data for e-commerce store
const userName = "joec1982";
const firstName = "Joe";
const lastName = "Cowin";

const product1 = "T-Shirt";
const product2 = "Socks";

const price1 = 10;
const price2 = 5;
const salesTax = 0.07;

// TODO: calculate total price of products
const totalPrice = calcPriceOf2Items(p1, p2);

// Don't reuse variable !!! Function parameters should NOT be the same as scope
function calcTotalPriceWithTax(total, taxRate) {
  return total + total * salesTax;
}

const totalPriceWithTax = calcTotalPriceWithTax(totalPrice, salesTax);
console.log(totalPriceWithTax);
