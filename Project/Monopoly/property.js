// JavaScript Document

var boardAry = [];//Array of board spaces

//Property Constructor
function Property(name, price, rent, owned){
	this.name = name;
	this.price = price;
	this.rent = rent; //Change rent to a function that determines what rent is later
	this.owned = owned;
}

function RailRoad(name, price, rent, owned, numOwned){
	this.name = name;
	this.price = price;
	this.rent = rent; //Change rent to a function that determines what rent is later
	this.owned = owned;
	this.numOwnded = numOwned;
}

var Chance = {
	chance: 1
};

var CommChest = {
	comm: 1
};

var Go = {
	go1: 1
};

var GoToJail = {
	goToJail: 1
}

var VisitJail = {
	visitJail: 1
}

var FreePkg = {
	freePkg: 1
};

var LuxTax = {
	luxTax: 1
};

var Utility = {
	utility: 1
};

var IncTax = {
	incTax: 1
};


//Setting Board Objects...
	boardAry[0] = Go;
	boardAry[1] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[2] = CommChest;
	boardAry[3] = new Property("Baltic Avenue", 60, 30, false);
	boardAry[4] = IncTax;
	boardAry[5] = new RailRoad("Reading Railroad", 200, 60, false, 1);
	boardAry[6] = new Property("Oriental Avenue", 100, 50, false);
	boardAry[7] = Chance;
	boardAry[8] = new Property("Vermont Avenue", 100, 50, false);
	boardAry[9] = new Property("Connecticut Avenue", 120, 60, false);
	boardAry[10] = VisitJail;
	boardAry[11] = new Property("St. Charles Place", 140, 70, false);
	boardAry[12] = Utility;
	boardAry[13] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[14] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[15] = new RailRoad("Pennsylvania Railroad", 200, 60, false, 1);
	boardAry[16] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[17] = CommChest;
	boardAry[18] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[19] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[20] = FreePkg;
	boardAry[21] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[22] = Chance;
	boardAry[23] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[24] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[25] = new RailRoad("Pennsylvania Railroad", 200, 60, false, 1);
	boardAry[26] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[27] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[28] = Utility;
	boardAry[29] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[30] = GoToJail;
	boardAry[31] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[32] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[33] = CommChest;
	boardAry[34] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[35] = new RailRoad("Pennsylvania Railroad", 200, 60, false, 1);
	boardAry[36] = Chance;
	boardAry[37] = new Property("Mediterranean Avenue", 60, 30, false);
	boardAry[38] = LuxTax;
	boardAry[39] = new Property("Mediterranean Avenue", 60, 30, false);
	
	//Write a function that takes in the current player's location, then prompts
	//Based on the location for that particular property...
	
	function buy(location){
		//First check if location is a purchaseable property
		if("owned" in boardAry[location]){
			document.getElementById("messageDisplay").innerHTML = "<h5>"+"This property is available"+"</h5>";
			var btn = document.createElement("BUTTON");
			var text = document.createTextNode("Buy Property");
			btn.appendChild(text); //Putting text into button
			btn.setAttribute("id", "buyBtn");
			
			document.getElementById("messageDisplay").appendChild(btn);
			document.getElementById("buyBtn").onclick = function handleBuy(){
			var buyPrmt = confirm("Are you sure you want to buy this property?");
				}
			}//End if
			else{
			document.getElementById("messageDisplay").innerHTML = "<h5>"+"Not purchasable"+"</h5>";
			}	
	}//End function Buy
	

	
	
	
	
