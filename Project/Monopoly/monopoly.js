// JavaScript Document

//Declaring variables - Game setup
	
	//Player constructor
	function Player(name, img, location, prevLoc, money){
		this.name = name;
		this.img = img;
		this.location = location;
		this.prevLoc = prevLoc;
		this.money = money;
	}

	var plrAry = [];//Array of player objects
	var imgAry = [];//Array of divs holding images...?
	
	
	//prompt here for number of players...
	var numPlyrs = prompt("Please enter the number of players for the game: ", "2-8");
	
	//Fill player array with player objects - make it the size of the amount of players...
	for (var i = 0; i < 8; i++){
		plrAry[i] = new Player();
	}
	
	//Initialize player objects with image names
	plrAry[0].img = "dogSmall.png";
	plrAry[1].img = "shipSmall.png";
	plrAry[2].img = "avatar";//Create the rest of the img & ref here..., make css as well...
	plrAry[3].img = "ship";
	plrAry[4].img = "avatar";
	plrAry[5].img = "ship";
	plrAry[6].img = "avatar";
	plrAry[7].img = "ship";
	
	//Initialize player objects with starting values
	for (var i = 0; i < numPlyrs; i++){
		plrAry[i].name = prompt("Please enter the name of player " + parseInt(i+1));
		plrAry[i].location = 0;
		plrAry[i].money = 1500;
		//Create image elements for tokens...
		var x = document.createElement("IMG");
		x.setAttribute("src", plrAry[i].img);
		x.setAttribute("id", "p"+i);
		document.getElementById("0").appendChild(x);
	}
	
	var plrIndx = 0;//Initialize a player index variable to switch between players
	//Display who's turn it is ...
		document.getElementById("playerDisplay").innerHTML = "<h4>"+"Starting Player: "+plrAry[plrIndx].name+"</h4>";
	
	// View control Declarations - Move control
	var View = {
		displayMove: function(location){
			var token = document.getElementById("p" + plrIndx);
			document.getElementById(location).appendChild(token);
		},
		displayMoney: function(){
			// Putting name and money stats in display area
			var txt = " ";
			for(var k = 0; k < numPlyrs; k++){
			txt += plrAry[k].name+": "+plrAry[k].money+" ";
			}
			document.getElementById("moneyDisplay").innerHTML = txt;
		}//End function display money
	};//End view
	View.displayMoney();
	
	
	//Dice Function Declaration
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
		}//End Dice object
		return Dice;
		}//End function Dice
	
	function rollDice(){
		
		var DiceRoll = new Object();
		DiceRoll = Dice();
		document.getElementById("diceDisplay").innerHTML = "<h4>"+DiceRoll.die1+" "+DiceRoll.die2+" "+"</h4>";
		
		//Player Selection happens here...
	    //Array Index decides what player is current... 
	    //Use array index and change index to change players../reset when at end to beginning etc. etc. 
	    //Move between players after each roll unless doubles are rolled....
		
		plrAry[plrIndx].location += DiceRoll.sum(); //Add sum of dice to location to determine where to move
		
		if(plrAry[plrIndx].location >= 40){ //If player reaches or passes GO, reset location 
		                     //Note: this would be a good place to add the $200 collect feature
			plrAry[plrIndx].location -= 40;
		}
		
	View.displayMove(plrAry[plrIndx].location);
	
	//Buy property stuff here
	//Write a function that takes in the current player's location, then prompts
	//Based on the location for that particular property...
	function buy(location, plrIndx2){
		//First check if location is a purchaseable property
		if("owned" in boardAry[location]){
			if(boardAry[location].owned === false){
			document.getElementById("messageDisplay").innerHTML = "<h5>"+"This property is available"+"</h5>";
			var btn = document.createElement("BUTTON");
			var text = document.createTextNode("Buy Property");
			btn.appendChild(text); //Putting text into button
			btn.setAttribute("id", "buyBtn");
			
			document.getElementById("messageDisplay").appendChild(btn);
			document.getElementById("buyBtn").onclick = function handleBuy(){
			var buyPrmt = confirm("Are you sure you want to buy this property?");
				if (buyPrmt){//if buy prompt is true (or user clicks ok)
					//Perform Buy actions
					plrAry[plrIndx2].money -= boardAry[location].price;//Subtracting money from buyer
					View.displayMoney();//updating display
					
					boardAry[location].owned = true;
					boardAry[location].ownedBy = plrIndx2;
			  }//End if buy prompt
			}//End Function handleBuy
		  }//End if owned = false
		  
		  else if(boardAry[location].owned === true){
			  
		  document.getElementById("messageDisplay").innerHTML = "<h5>"+boardAry[location].name+" is owned by "+plrAry[boardAry[location].ownedBy].name+"</h5>"; 
		  	  //Subtract Rent amount of property from 
			  var rent = boardAry[location].rent;
			  alert("You must pay "+plrAry[boardAry[location].ownedBy].name+" $"+rent);
			  plrAry[plrIndx2].money -= rent;
			  //Get access to property owner's money and pay them! Store owner's plr index in owned by!!! instead of name!!
			  plrAry[boardAry[location].ownedBy].money += rent;
			  View.displayMoney();//updating display
		  }
		}//End if owned in boardAry location
		else{// if the property is owned or not for sale....
			document.getElementById("messageDisplay").innerHTML = "<h5>"+"This board space not for sale"+"</h5>";
		}	
	}//End function Buy
	buy(plrAry[plrIndx].location, plrIndx);//Calling buy property function here
	
	plrIndx += 1;//Switch player
	
	if(DiceRoll.doubles())
	plrIndx -= 1;//If doubles are rolled... it is the same player's turn again
	
	if(plrIndx > numPlyrs - 1) //Go back to player 1 when all players have had a turn...
		plrIndx = 0;
		
	//Display who's turn it is ...
		document.getElementById("playerDisplay").innerHTML = "<h4>"+"Next Player Up to Roll Dice: "+plrAry[plrIndx].name+"</h4>";
	
	}//End function rollDice////////////////////////////////////////////////////////////
	
	
