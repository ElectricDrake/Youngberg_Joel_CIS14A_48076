// JavaScript Document
/* Dr. Mark E. Lehr
   Oct 9th, 2013
   Card Class
*/

function Card(num){
	this.number=num;
	this.facevalue=this.face();
	this.suit=this.suit();
	this.name=this.name();
	this.picture="./Cards/"+
	              this.name+
				  this.suit+
				  ".jpg";
}

Card.prototype.face=function(){
	var num=this.number%13+1;
	if(num>10)return 10;
	else if(num==1)return 11;
	return num;
}

Card.prototype.suit=function(){
	if(this.number<13)return "spades";
	else if(this.number<26)return "diamonds";
	else if(this.number<39)return "clubs";
	else return "hearts";
}

Card.prototype.name=function(){
	switch(this.number%13){
		case 0: return "ace";
		case 1: return "two";
		case 2: return "three";
		case 3: return "four";
		case 4: return "five";
		case 5: return "six";
		case 6: return "seven";
		case 7: return "eight";
		case 8: return "nine";
		case 9: return "ten";
		case 10: return "jack";
		case 11: return "queen";
		default: return "king";
	}
}

Card.prototype.toString=function(){
	var str="<img src="+this.picture+"/>";
	str+=("<br/>Number = "+this.number);
    str+=("<br/>Name = "+this.name);
	str+=("<br/>Suit = "+this.suit);
	str+=("<br/>Face Value = "+this.facevalue);
	str+=("<br/><br/>");
	return str;
}