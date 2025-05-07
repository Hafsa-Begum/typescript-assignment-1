function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        console.log(input.toLowerCase())
        return input.toLowerCase();
    }
    else{
        console.log(input.toUpperCase())
        return input.toUpperCase()
    }
}

// formatString("Hello");          // Output: "HELLO"
// formatString("Hello", true);   // Output: "HELLO"
// formatString("Hello", false);  // Output: "hello"

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filteredData = items.filter(item => item.rating >= 4  );
    console.log(filteredData);
    return filteredData;
}

// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
//   ];
  
// filterByRating(books); 

function concatenateArrays<T>(...arrays: T[][]): T[]{

}