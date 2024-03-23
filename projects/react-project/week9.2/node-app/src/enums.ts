// Enums-> Enumeration  
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

// // Example 1 - Game 
// Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.


// when you that something will be some defined constant only 

// we can implement like this also

// type key="up"|"down"|"left"|"right";
// function gamePlayedBykey(keypressed:key){
//     console.log(keypressed);
// }

// gamePlayedBykey("up");


// But the better way to do this using enums when you clearly know upfront the thing is constant
enum keys{
    up=20,
    down=31,
    left="up",
    right="right"
}

function gamePlayedBykey(keypressed:keys){
    console.log("keys");
}

gamePlayedBykey(keys.up);
console.log(keys.right);


// General use of this could be storing the Response status
// enums responseStatus{
//      success=200,
//      NotFound=404,
//        Error=500
//}