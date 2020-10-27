// prompt-sync exports a create function
const createPrompt = require("prompt-sync");
// create a new prompt function with the create function.
const prompt = createPrompt();

//----------------------------------
// Variables
//----------------------------------
let menuChoice = "";

//----------------------------------
// Welcome Menu
//----------------------------------
console.log("");
console.log("Welcome to the Capsule-Hotel");
console.log("============================");
const numCapsules = parseInt(prompt("Enter the number of capsules available: "),10);
console.log("There are " + numCapsules + " unoccupied capsules ready to be booked.");

// Make and populate array
let roomArray = new Array(numCapsules);
for(let i=1; i<=numCapsules; i++) {
    roomArray[i] = {"roomNumber":i,"guest":null};
}

//----------------------------------
// Main Menu
//----------------------------------
while(menuChoice != "4") {
    console.log("");
    console.log("Guest Menu");
    console.log("==========");
    console.log("1. Check In");
    console.log("2. Check Out");
    console.log("3. View Guests");
    console.log("4. Exit");
    menuChoice = prompt("Choose an option [1-4]: ");
    console.log("");

    if(menuChoice === "1") {
        checkIn();
    }
    if(menuChoice === "2") {
        checkOut();
    }
    if(menuChoice === "3") {
        viewGuests();
    }
} 

//----------------------------------
// Functions
//----------------------------------
function checkIn() {
    console.log("Guest Check In");
    console.log("==============");
    let guestName = prompt("Guest Name: ");
    let capsuleValid = false;

    while(capsuleValid === false) {
        let capsuleNum = parseInt(prompt("Capsule #[1-" + numCapsules + "]: "),10);

        if(capsuleNum<1 || capsuleNum>numCapsules) {
            console.log("Please enter a capsule number between 1 and " + numCapsules + ".");
        } 
        else if (roomArray[capsuleNum].guest != null) {
            console.log("Error.");
            console.log("Capsule #" + capsuleNum + " is already occupied.");
        } else {
            roomArray[capsuleNum].guest = guestName;
            capsuleValid = true;
            console.log("Success!");
            console.log(guestName + " is booked in capsule #" + capsuleNum);
        }
    }
}

function checkOut() {
    console.log("Guest Check Out");
    console.log("==============");
    let capsuleValid = false;

    while(capsuleValid === false) {
        let capsuleNum = parseInt(prompt("Capsule #[1-" + numCapsules + "]: "),10);
        for(let i=1; i<=numCapsules; i++) {
            console.log(roomArray[i]);
        }
        console.log("");

        if(capsuleNum<1 || capsuleNum>numCapsules) {
            console.log("Please enter a capsule number between 1 and " + numCapsules + ".");
        } 
        else if (roomArray[capsuleNum].guest === null) {
            console.log("Error.");
            console.log("Capsule #" + capsuleNum + " is unoccupied.");
        } else {
            console.log("Success!");
            console.log(roomArray[capsuleNum].guest + " checked out of capsule #" + capsuleNum);
            roomArray[capsuleNum].guest = null;
            capsuleValid = true;
        }
    }
}

function viewGuests() {

}