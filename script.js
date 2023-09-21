function sayHello() {
    const name = prompt("What is your name?");
    alert("Hello, " + name + "! Welcome to my website");
}

sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) +1;
    alert("You have rolled a " + dice + "!");
}

rollDice();

function jobsearch() {
    let month = 0;
    let dice = Math.floor(Math.random() * 6 +1);
    month = dice;
    alert ("It will take you " + month + " months to get your first job as a developer");
} 
jobsearch();


function comfortLevel(html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        alert("You're already on your way to being a pro!");
    } else if (average >= 4) {
        alert("Don't worry, you'll get there! It just takes time and practice.");
    } else {
        alert("The only way to get better is to keep trying! You can do this!");
    }
}
comfortLevel(8, 9, 10);

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "white";
}