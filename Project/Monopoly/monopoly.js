// JavaScript Document

//Declaring variables
	var plrAry = [];
	
	var globalLoc = 0;
	var prevLoc = 0;
	
	var propAry = [];
	
//Dice Roll Functions/Objects
	function Dice(){
		var Dice = {
			die1: Math.floor(Math.random() * 6 +1),//Adding one eliminates a zero roll
			die2: Math.floor(Math.random() * 6 +1),
			sum: function(){
				return this.die1 + this.die2;
			},
			doubles: function(){
				if(this.die1 === this.die2)
				return true;
				else
				return false;
			}
		}
		return Dice;
		}//End function rollDice
	
	function rollDice(){
		var DiceRoll = new Object();
		DiceRoll = Dice();
		document.getElementById("diceDisplay").innerHTML = "<h4>"+DiceRoll.die1+" "+DiceRoll.die2+" "+"</h4>";
		
		prevLoc = globalLoc; //Storing previous location here to delete later
		
		globalLoc += DiceRoll.sum(); //Add sum of dice to location to determine where to move
		
		if(globalLoc >= 40){ //If player reaches or passes GO, reset location 
		                     //Note: this would be a good place to add the $200 collect feature
			globalLoc -= 40;
		}
		
		//First test object...
	var P1 = {
		name: "Joel",
		img: "dog.png",
		location: globalLoc,
		money: 200,
		properties: "boardwalk"//Make this an array later...
	};
	
	//Begin game loop here?
	//var CurPlyr = new Object();
	//Write code here later to decice what player is current... loop
	//CurPlyr = P1;//Use array index and add to index.../reset when at end to beginning etc. etc. 
	//Move player according to diceroll result
	//CurPlyr.location = DiceRoll.die1+DiceRoll.die2;
	
	
	var View = {
		displayMove: function(location){
			var boardSpace = document.getElementById(location);
			boardSpace.setAttribute("class", "avatar");
		},
		deleteOldMove: function(location){
			var oldBoardSpace = document.getElementById(location);
			oldBoardSpace.removeAttribute("class");
		}
	};
	
	View.deleteOldMove(prevLoc);
	View.displayMove(P1.location);
	
		
		
	}//End function rollDice////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//displayGamePiece(location){
		//var boardSpace = document.getElementById(location);
		//boardSpace.setAttribute("class", "avatar");
	//}
	
	//Don't forget to end the game loop
