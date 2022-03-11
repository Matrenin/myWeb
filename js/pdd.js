function getRandomNumberAsArray() {
    let generated = String(Math.random() * 100000000000);
    let result = [];
    for (let value of generated) {
        if (!result.includes(value)) {
            result.push(value);
        }
        if (result.length == 3) {
            return result;
        }
    }
}

function startGame() {
    let riddle = getRandomNumberAsArray();
    while (true) {
        let answer = prompt("Угадайте 3-х значное число").split("");
        let result = getBullsAndCowsCount(riddle, answer);
        console.log("Ваш ответ: " + answer + ", быков: " + result.bullsCount + ", коров: " + result.cowsCount + ".\n");
        if (riddle.toString() == answer.toString() || answer.toString() == undefined) {
            console.log("Вы попедили");
            break;
        }
    }
    console.log("Загадка: " + riddle);
}

function getBullsAndCowsCount(riddle, answer) {
    let bullsCount = getBullsCount(riddle, answer);
    let cowsCount = getCowsCount(riddle, answer);
    return {
        "bullsCount": bullsCount,
        "cowsCount": cowsCount - bullsCount,
    }
}

<<<<<<< HEAD
function getBullsCount(riddle, answer) {
    let count = 0;
    for (let i = 0; i < riddle.length; i++) {
        if (riddle[i] == answer[i]) {
            count++;
        }
    }
    return count;
}

function getCowsCount(riddle, answer) {
    let count = 0;
    for (let value of riddle) {
        if (answer.includes(value)) {
            count++;
        }
    }
    return count;
}

startGame();
=======
const employee1 = new Employee("Pavel", "male", "Teacher");

// ========== ES6 =============

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  
  sayName() {
    console.log("Меня зовут " + this.name);
  }
}

const person1 = new Person("Roman", "male");

class Employee extends Person {
  constructor(name, gender, position) {
    super(name, gender);  // super означает вызови функцию конструктор(Person) и передай туда name и gender
    this.position = position;
  }
  
  sayPosition() {
    console.log("Я ваш " + this.position);
  }
}

const employee1 = new Employee("Pavel", "male", "teacher");
>>>>>>> 8344174c12dbed767b4aaca10ce48d89e19b970a
