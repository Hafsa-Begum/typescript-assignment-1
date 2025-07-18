# An impactful blog on Type, Interface, keyof Keyword in Typescript


1. What are some differences between interfaces and types in TypeScript?
2. What is the use of the keyof keyword in TypeScript? Provide an example.

## 1. Differences between interfaces and types in TypeScript

TypeScript is a powerful superset of JavaScript. It has gained popularity among developers for its highly sophisticated typing system. There are two ways of defining data types, such as interfaces and types. Both interface and type are used to define the structure of objects, but they differ in flexibility and usage. While types are used for variables allowing unions, intersections, and more complex type definitions, interfaces shape syntax for classes, properties, methods, and events. But how do we choose between them? Knowing the subtle differences and use cases is essential for efficient development. Let's deep dive to know that.

## Differences between types and interfaces
While types and interfaces share similarities in some case, there are key differences between them, such as:

- handling primitive types
- union and intersection types
- declaration merging
- function and tuple types
- Extending Class and Object

Knowing these differences is essential to select the appropriate data shape for the job and optimize TypeScript development.

### Primitive Types

Primitive types are inbuilt types in TypeScripts. They include number, string, boolean, null, and undefined types.
We can use define a type alias for a primitive type as below:

```
type Age = number;

```
We can combine primitive type with union type for making code more readable.

```
type NullOrUndefined = null | undefined;

```

It’s only possible to alias a primitive value using types, making them the recommended choice for defining primitive types, whereas interfaces can’t be used with primitive types.


### Union and Intersection Types

Union types help us to describe values that can be one of many types and create unions of various primitive, literal, or complex types:

```
type Vehicle = 'Bus' | 'Car' | 'Plane' | 'Bike';

```

This union type only can be described using type. There is no equivalent to union type in interference. But two interference can be combine using union type, such as:

```
interface Battery {
  power: number;
}

interface Engine {
  type: string;
}
type Car = Engine | Battery;

```

While interfaces can be combined to form union types, they don’t support intersection types, making union types more versatile and expressive in these situations.

### Declaration Merging

Unlike type, an interface can be defined multiple times, and will be treated as a single interface with members of all declarations being merged, such as:

```

interface Person { name: string; }
interface Person { age: number; }

// These two declarations become:
// interface Person { name: string; age: number; }

const person: Person = { name: "Jhon Doe"; age: 30; };

type Animal = {
    name: string;
};

// Error: Duplicate identifier 'Animal'.    
type Animal = { 
    age: number;
};

```

### Function and Tuple Types

Both types and interfaces can shape function types, but types are favored for legibility and advanced capabilities, such as conditional and union types. Tuple types can only be expressed using the type keyword, such as:

```
// Function using type

type Add =  (num1: number, num2:number) => number;

// Function using interface

interface Add {
   (num1: number, num2:number): number;
}

// Tuple using only type
type Point = [number, number];

```

Both type and interface similarly define function types, except for a subtle syntax difference of interface using : vs. => when using type. Type is preferred in this case because it’s shorter and thus easier to read.

### Extending Class and Object

Interfaces can extend other interfaces and classes using the extends keyword. Types can extend other types using intersection (&) types.

```

interface Shape {
    color: string;
}
    
interface Circle extends Shape {
    radius: number;
}
    
type Rectangle = Shape & {
    width: number;
    height: number;
};

```

These are differences in type and interface. What do you think? let me know.

## 2. Use of the keyof keyword in TypeScript with example

The keyof keyword is used to get new types from an existing object type's keys in TypeScript. It is a TypeScript construct commonly used for building block in generating advanced types from a source object type.

To know about keyof keyword's use, we know from The TypeScript handbook documentation:

*The keyof operator takes an object type and produces a string or numeric literal union of its keys.*

A simple example is shown below how it works:

```
type Developer = {
 name: string;
 salary: number;
} 
type developerKeys = keyof Developer; // "name" | "salary"

```
We apply the keyof operator to the Developer type, and we get a developerKeys type in return, which represents all the property names. The result is a union of string literal types: “name” | “salary“.

let's see an example of this operator.

```

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const account = {
  id: 1,
  email: "abc@gmail.com",
  accountNo: 222,
};

const id = getProperty(account, "id");  // 1
const email = getProperty(account, "email");    // "abc@gmail.com"

const invalid = getProperty(account, "password"); // Error: "password" is not a key of account.

```

The keyof operator prevents invalid property access in object, helps developers with IDE intellisense, It helps in Generic reuse where allows writing flexible and reusable utility functions.