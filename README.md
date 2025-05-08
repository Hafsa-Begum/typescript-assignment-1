# An impactful blog post on


- What are some differences between interfaces and types in TypeScript?
- What is the use of the keyof keyword in TypeScript? Provide an example.


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