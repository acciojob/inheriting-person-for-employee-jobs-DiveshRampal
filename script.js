// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // greet method for greeting
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee class inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);  // Call the constructor of the parent (Person) class
    this.jobTitle = jobTitle;
  }

  // jobGreet method for greeting with job information
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example usage:

// Creating an instance of Person
const person = new Person("Alice", 25);
person.greet();
// Expected Output: Hello, my name is Alice, I am 25 years old.

// Creating an instance of Employee
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();
// Expected Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
