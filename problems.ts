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

formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"