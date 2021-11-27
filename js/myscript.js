var player_1 = prompt("Enter Name of Player-1");
var player_2 = prompt("Enter Name of Player-2");

document.getElementsByClassName("player-name")[0].innerHTML= player_1;
document.getElementsByClassName("player-name")[1].innerHTML= player_2;



function playAgain(){
    var num1 = (Math.floor(Math.random()*6))+1;
    var num2 = (Math.floor(Math.random()*6))+1;
    var count = 0;
    if (count >= 0){
        document.getElementsByClassName("refresh")[0].innerHTML = "Roll Again";
    }
    if (num1 > num2){
        document.getElementsByTagName("h1")[1].innerHTML= player_1+" Wins";
    }
    else if (num2 > num1){
        document.getElementsByTagName("h1")[1].innerHTML=player_2+ " Wins";    
    }
    else{
        document.getElementsByTagName("h1")[1].innerHTML="It's a Tie";   
    }
    if(num1 == 1){
        document.getElementById("first-image").src = "Images/DIce-1.png";
    }
    else if (num1 == 2){
        document.getElementById("first-image").src = "Images/DIce-2.png";
    }
    else if (num1 == 3){
        document.getElementById("first-image").src = "Images/DIce-3.png";
    }
    else if (num1 == 4){
        document.getElementById("first-image").src = "Images/DIce-4.png";
    }
    else if (num1 == 5){
        document.getElementById("first-image").src = "Images/DIce-5.png";
    }
    else if (num1 == 6){
        document.getElementById("first-image").src = "Images/DIce-6.png";
    }
    if(num2 == 1){
        document.getElementById("second-image").src = "Images/DIce-1.png";
    }
    else if (num2 == 2){
        document.getElementById("second-image").src = "Images/DIce-2.png";
    }
    else if (num2 == 3){
        document.getElementById("second-image").src = "Images/DIce-3.png";
    }
    else if (num2 == 4){
        document.getElementById("second-image").src = "Images/DIce-4.png";
    }
    else if (num2 == 5){
        document.getElementById("second-image").src = "Images/DIce-5.png";
    }
    else if (num2 == 6){
        document.getElementById("second-image").src = "Images/DIce-6.png";
    }
}