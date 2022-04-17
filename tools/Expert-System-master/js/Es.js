let questionBox = document.getElementById("questionToAsk");
let button = document.getElementById("buttonArea");


function show(){

}


let input = [
    { 
       que: "What Type of Activity do you Prefer?", 
       choices: ["Non Sporting Activity", "Sporting Activity"],
    },
    { 
       que: "How much should your Activity Cost?", 
       choices: ["Free", "Cheap", "Expensive"],
    },
    { 
       que: "Choose Company?", 
       choices: ["Solo", "Family", "Friends"],
    },
]

let output = {
    "Free": {
        "Solo": ["Volunteer", "Write a Blog or Novel"],
        "Family": ["Watch a Movie"],
        "Friends": ["Visit a Sanctuary"],
    },
    "Cheap": {
        "Solo": ["Read a Novel"],
        "Family": ["Painting", "Cooking"],
        "Friends": ["Nature Walk", "Watch Football match between Gor and AFC"],
    },
    "Expensive": {
        "Solo": ["Register for Classes"],
        "Family": ["Go for a Safari in Maasai Mara"],
        "Friends": ["Go Drinking"],
    },
    
}