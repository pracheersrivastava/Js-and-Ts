"use strict";
function greet1(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hello");
    }
}
greet1(null);
greet1(undefined);
