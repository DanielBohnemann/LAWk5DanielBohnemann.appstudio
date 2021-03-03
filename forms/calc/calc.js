//this is my third program

function Calculate(num1, num2) {
  sum = num1 + num2
  return sum
  }
  
number1 = parseInt(prompt("What is the first number: "))
number2 = parseInt(prompt("What is the second number: "))
summedNumbers = Calculate(number1, number2)
console.log(`The sum of ${number1} + ${number2} is ${summedNumbers}`)