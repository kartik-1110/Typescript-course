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
