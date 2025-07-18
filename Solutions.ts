function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase()
    }
}

 
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filteredData = items.filter(item => item.rating >= 4  );
    
    return filteredData;
}


function concatenateArrays<T>(...arrays: T[][]): T[]{
    let concated: T[]  = [];
    
    arrays.map(a=> concated.push(...a));

    return concated;
}

class Vehicle {
    private make: string;
    private year: number;
    constructor (make: string, year: number){
        this.make = make;
        this.year = year;
    }
    getInfo(){
        console.log(`"Make: ${this.make}, Year: ${this.year}"`)
    }
}

class Car extends Vehicle{
    private model: string;

    constructor(make: string, year: number, model: string){
        super(make, year)
        this.model = model;
    }
    getModel(){
        console.log(`"Model: ${this.model}"`)
    }
}


function processValue(value: string | number): number{
    if(typeof(value) === 'string'){
        return value.length;
    }
    else{
        return value * 2;
    }
}


interface Product {
    name: string;
    price: number;
}
  
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }
    else{
        let expensiveProduct:Product = products.reduce((max, obj) => obj.price > max.price ? obj : max, products[0]);
        return expensiveProduct;
    }
}


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
  
function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    }
    else{
        return "Weekday";
    }
}


async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject)=>{
        if(n>=0){
            setTimeout(()=>{
                resolve(n * n);
            }, 1000)
        }
        else{
            reject("Error: Negative number not allowed")
        }
    })
}