function greet1(name : string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hello");
    }
}

greet1(null);
greet1(undefined);



//greet(null); // Error: Argument of type 'null' is not assignable to parameter of type 'string'.
//greet(undefined); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string'.