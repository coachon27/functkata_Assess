let firstNumber = document.querySelector("#first-number");
let secondNumber = document.querySelector("#second-number");
let addNums = document.querySelector("#add-nums");
let addTotal = document.querySelector("#add-total");
let productTotal = document.querySelector("#product-total");
let powerTotal = document.querySelector("#power-total");
let factorialTotal = document.querySelector("#factorial-total");
let fibonacciTotal = document.querySelector("#fibonacci-total");

// KATA 1 ADD
function add(a, b) {
  return a + b;
}

// KATA 2 MULTIPLY
function multiply(a, b) {
  let product = 0;
  let i = 0;
  while (i < b) {
    product = add(product, a);
    i++;
  }
  return product;
}

// KATA 3 Exponentiation
function power(x, n) {
  let result = 1;
  let i = 0;
  while (i < n) {
    result = multiply(result, x);
    i++;
  }
  return result;
}

// KATA 4 Factorial
function factorial(a) {
  let result = 1;
  console.log(a);
  while (a > 0) {
    result = multiply(result, a);
    a--;
  }
  return result;
}

// KATA 5 Fibonacci
function fibonacci(a) {
  let fib1 = 0;
  let fib2 = 1;
  let i = 2;
  let term = 10;
  console.log(fib2, term, a);
    if ((a === 2)) {
        term = fib2;
    } else if ((a === 1)) {
        term = fib1;
    }
  // console.log("if finished");
    while (i < a) {
      term = add(fib1, fib2);
      fib1 = fib2;
      fib2 = term;
      i++;
    }
  return term;
}
addNums.addEventListener("click", function () {
  firstNumber = Number(firstNumber.value);
  secondNumber = Number(secondNumber.value);
  addTotal.innerHTML =
    " The sum of your 2 #'s is: " + add(firstNumber, secondNumber);
  productTotal.innerHTML =
    " The product of your 2 #'s is: " + multiply(firstNumber, secondNumber);
  powerTotal.innerHTML =
    " The exponentiation of your 2 #'s is: " + power(firstNumber, secondNumber);
  factorialTotal.innerHTML =
    " The factorial of your 1st # is: " + factorial(firstNumber);
  fibonacciTotal.innerHTML =
    " The " +
    firstNumber +
    "th term of the fibonacci sequence is: " +
    fibonacci(firstNumber);
});
