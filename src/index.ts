/* Your Code goes here */
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Jonas';

  constructor() {
    console.log('Creating Person Object . . .');
  }
}

const pers = new Person();

console.log(pers);
