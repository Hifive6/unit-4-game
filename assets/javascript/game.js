//How do I reset my game? I have tried may ways and I dont know how to do it.
//Ask so I can finish.



$(document).ready(function(){

    //These are our chosen variables for the game//
        var wins = 0;
        var loss = 0;
        var userScore = 0;
        var genRandom = 0;
        var num = 0;
    
        
    //Made this function so that I could call back later for the rules of winnings
        function Win(){
            wins += 1;
            alert("Winner Winner");
            $("#win").html(wins + " <br>");
            $("#picture").empty();
            num = 0;
            startReset();
        }

    //this function is calling back later and used for the rules of losing
        function Lose(){
            loss += 1
            alert("Too Bad");
            $("#lose").html(loss);
            $("#picture").empty();
            num = 0;
            startReset();
        }
    //next on the document when the document loads I need the generated number to be created then stored.
    function startReset(){
    
    
    
    //This is were the generated number is from btw 19 -  120
    genRandom = Math.floor(Math.random() * 101) + 19;
    
     console.log(genRandom);
    
    //this is function will add the value that has been stored in genNumber and add to the div on the html behind the random number words in that div.
    $("#genNumber").html("<br><div>" + genRandom);
    
    
    //This loop will dynamically make 4 buttons, and assign them a random number.
    for (var i = 0; i < 4; i++){
        var ranBtn = Math.floor(Math.random() * 11) + 1
        console.log(ranBtn);
     //This var is holding the div so i can call the div and add the random number to this div later   
        var picture = $("<button>");
     //This will add classes to the buttons, and also assign the random number and give it to the button   
        picture.addClass("btn btn-outline-primary number");
        picture.attr("data-random", ranBtn);
        
        // $("#picture").empty();
    //     
        $("#picture").append("<div><br>", picture);
          console.log($("#picture"));
        }
    
    }
    startReset();
    
    //This will create an onclick event attacthed the button I created above
    $(".number").on("click",function() {
    //    need to add parseIntin here
        userScore = parseInt($(this).attr("data-random"));
        
        
        num = num + userScore;
        console.log(num);
        $("#score").html(num);
    
        //this is my if else statement for deciding how the game will decide wins and losess
        if (num > genRandom){
            // console.log(num);
            // console.log(genRandom);
            Lose();
         }
    
        else if (num === genRandom){
            Win();
        }
    
        
    
        
    });
        
    
    
    
    
    
    
    
    
    
    
        
     })