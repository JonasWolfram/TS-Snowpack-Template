/* Your Code goes here */
function Logger() {
  return function (constructor: Function) {
    console.log('Logging . . . ');
    console.log(constructor);
  };
}

@Logger()
class Person {
  name = 'Jonas';

  constructor() {
    console.log('Creating Person Object . . .');
  }
}

const pers = new Person();

console.log(pers);
