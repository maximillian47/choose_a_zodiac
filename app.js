function askUserName(){
    var userName = prompt("What's your name?");
    document.write("Hello, " + userName.toUpperCase() + "!"); 
}

function askAboutZodiacSigns(){
    var ZodiacQuestion = confirm("Would you like to learn about zodiac signs?");
    if (ZodiacQuestion==true){
        alert("Let's go.");
    } else if (ZodiacQuestion==false){
        alert("Why are you here then?");
        window.location.replace('https://images.app.goo.gl/bp7EmakYpBW4asgV9');
    }
}  
    
function askUserHowManyZodiacSigns(){
    var userAnswer = prompt ('How many zodiac signs are there?');
    while (userAnswer != 12){
        userAnswer = prompt('Wrong answer.');
    } if (userAnswer = 12){
        alert('Good stuff.')
    }
}

function CurrentDate(){
    var todayDate = new Date(); 
    document.write(todayDate);
}

function numberGame(){
    var gameAnswer = prompt('Pick a number between 1 and 50. You have 4 guesses.');
    for (var i = 0; i <40 ; i++){
        if(gameAnswer === '13'){
            alert('Correct.');
            break;
        } 
        if(i === 4 && gameAnswer != 13){
            alert('Sorry, maybe next time.'); 
        }
        gameAnswer = prompt(`Pick a number between 1 and 50. You have ${13-i} guesses!`); 
    }
}
