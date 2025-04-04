// index.js

// Class for Cat
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Class for Dog
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Class for Bird
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Creating instances for testing
  const cat1 = new Cat("Whiskers", "female");
  console.log(cat1.speak()); // "Whiskers says meow!"
  
  const dog1 = new Dog("Rex", "male");
  console.log(dog1.speak()); // "Rex says woof!"
  
  const bird1 = new Bird("Polly", "female");
  console.log(bird1.speak()); // "Polly says squawk!"
  
  const bird2 = new Bird("Jack", "male");
  console.log(bird2.speak()); // "It's me! Jack, the parrot!"
  
  // Export classes for testing
  module.exports = { Cat, Dog, Bird };
  