
// Функция для создания объекта
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

// Кладем функцию в прототип, который для всех объектов Person один и тот же
Person.prototype.sayHello = function() {
    console.log("Меня зовут " + this.name);
}

// С помощью вызова функции создаем объект
const person1 = new Person("Roman", "male");

//      -----------

function Employee(name, gender, position) {
    // call вызовит функцию(Person), с этим объектом(this) внутри. Где this это тот самый объект который мы создаем.
    Person.call(this, name, gender);
    this.position = position;
}

// У prototype Employee будет прототип Persen.prototype
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.sayPosition = function() {
    console.log("Моя должность " + this.position);
}

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
