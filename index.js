//task1
let name = prompt("Ваше имя?");
alert("Привет, " + name + "!");

//task2
let num = prompt("Введи число: ");
let degree = prompt("Введи степень:");
console.log(num ** degree);

//task4
let text = "my text";
if (text === "some text") {
  console.log(text = "another text");
} else {
  console.log(text = "some text");
}

//task5
let first = 7;
if (first === 0) {
  first = 1;
} else if (first < 0) {
  first = "less then ziro";
} else {
  first *= 10;
}
console.log(first);

//task6
let num1 = prompt("Ваше число:");
let num2 = Number(num1);
let result1;
if (num2 < 5) {
  result1 = 0;
} else {
  result1 = 1;
}
console.log(result1);

//task7
let numb1 = prompt("Ваше число:");
let numb2 = prompt("Введите второе число:");
if (numb1 > numb2) {2
  console.log("Большее число: " + numb1);
} else if (numb2 > numb1) {
  console.log("Большее число: " + numb2);
} else {
  console.log("Они равны");
}

//task8
let numbe1 = Number(prompt("Ваше первое число:"));
let numbe2 = Number(prompt("Введите второе число:"));
if (numbe1 % numbe2 === 0) {
  console.log("Является кратным");
} else {
  console.log("Не является кратным");
}

//task9
let mark1 = Number(prompt("Ваш средний балл:"));
if (mark1 >= 1 && mark1 <= 4) {
  console.log("Двоечник, иди учись!");
} else if (mark1 >= 5 && mark1 <= 8) {
  console.log("Неплохо, но давай еще поднажмем!");
} else {
  console.log("Ого, да ты настоящий отличник!");
}

//task10
let task1 = Number(prompt("Ваш балл за экзамен:"));
let project1 = Number(prompt("Ваше количество выполненных проектов:"));
if (task1 > 90 || project1 > 10) {
  console.log("Ваш общий выпускной балл:100");
} else if (task1 > 75 && project1 >= 5) {
  console.log("Ваш общий выпускной балл:90");
} else if (task1 > 50 && project1 >= 2) {
  console.log("Ваш общий выпускной балл:75");
} else {
  console.log("0");
}

//task11
let days = Number(prompt("Количество дней, на которые нужно арендовать авто:"));
let result = days * 40;
if (days >= 7) {
  console.log(result - 50 + "$");
} else if (days >= 3) {
  console.log(result - 20 + "$");
} else {
  console.log(result + "$");
}
