
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
    constructor(name, gender) {  // Заменяет 3-ю строку
        this.name = name;
        this.gender = gender;
    }

    sayHello() {    // Замена 9-ой строки
        console.log("Меня зовут " + this.name);
    }
}
