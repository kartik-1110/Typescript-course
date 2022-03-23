// defining variable
const hello: string = "world";

// defining funtions
const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};
console.log(getFullName("kartik", "pal"));

// creating objects
const user: { name: string; age: number } = {
  name: "Alex",
  age: 24,
};
// defining interface
interface User {
  name: string;
  age?: number;
}
const user2: User = {
  name: "Tony",
};

// union operator
//  |  this is union operator
let pageName: string | number = "1";
let errorMsg: string | null = null;

// union + type aliases
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}
const popularTags: PopularTag[] = ["dragon", "coffee"];
const dragonTags: MaybePopularTag = null;

// void
// when we do not want to return anything from the function we return void
// void is a set of undefined and null
const doSomething = (): void => {
  console.log("do something");
};

// any
// any type turns off typescript checks
let foo: any = "foo";
console.log(foo.bar());

// never
// function with "never" cant be executed to the end
// function that returns "never" , never ends
const doSomething2 = (): never => {
  console.log("do something 2");
};
const doSomething3 = (): never => {
  throw "never";
};

// unknown
//  we can assign unknown directly in the other types
let vAny: any = 10;
let vUnknown: unknown = 10;
let s1: string = vAny;
// let s2: string = vUnknown
// unknown is not assignable to a string

// assertion
// we want to convert one type to another
//  "as" operator makes type assertion
let g1: string = vAny;
let g2: string = vUnknown as string;

// Working with DOM

// this has type: Element
// Element is the highest class in heirarchy
const someElement = document.querySelector(".foo");
console.log("some element ", someElement);

// Event listeners
// event also has highest class in heirarchy
const someAthorElement = document.querySelector(".foo");
someAthorElement.addEventListener("blur", (e) => {
  const target = e.target as HTMLInputElement;
  console.log("event", target.value);
});

//Classes in typescript
// everything is public by default
// private means we can use only inside a class
// Protected is allowed only in class and children
// if you want ot use const in class use word "readonly"
class ClassUser {
  private firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
const classUser = new ClassUser("Alex", "Ferguson");
