# An impactful blog post on Type, Interface, keyof Keyword in Typescript


1. What are some differences between interfaces and types in TypeScript?
2. What is the use of the keyof keyword in TypeScript? Provide an example.

## Differences between interfaces and types in TypeScript

TypeScript is a powerful superset of JavaScript. It has gained popularity among developers for its highly sophisticated typing system. There are two ways of defining data types, such as interfaces and types. Both interface and type are used to define the structure of objects, but they differ in flexibility and usage. While types are used for variables allowing unions, intersections, and more complex type definitions, interfaces shape syntax for classes, properties, methods, and events. But how do we choose between them? Knowing the subtle differences and use cases is essential for efficient development. Let's deep dive to know that.

## Differences between types and interfaces
While types and interfaces share similarities in some case, there are key differences between them, such as:

- handling primitive types
- union and intersection types
- declaration merging
- function and tuple types

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

There are difference in type and interface. Now let's know some practical use case for both of these.

Types and interfaces have practical use cases in various aspects of TypeScript development. Depending on the specific situation, one might be more suitable than the other.

- In object-oriented programming, interfaces are better suited due to their ability to extend classes and support inheritance. 
- When working with complex data structures, multiple types, including object types, are often more flexible and expressive, thanks to their support for union, intersection, and tuple types. They enable developers to create intricate and reusable data structures that can adapt to various scenarios. With mapped types, this flexibility is further enhanced, allowing for even more powerful type manipulation.
- Interfaces are useful for third-party library integration due to their ability to merge declarations, as mentioned earlier in the declaration merging section. This feature allows developers to customize the type definition of a third-party library to suit the requirements of a particular project.

## Use of the keyof keyword in TypeScript with example

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
We apply the keyof operator to the Developer type, and we get a developerKeys type in return, which represents all the property names. The result is a union of string literal types: “name” | “salary“: