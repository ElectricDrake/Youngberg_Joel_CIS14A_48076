// JavaScript Document
/* Dr. Mark E. Lehr
   Oct 9th, 2013
   Card Class
*/

function Deck(){
	this.cards=new Array(52);
	for(var num=0;num<52;num++){
		this.cards[num]=new Card(num);
	}
	this.position=0;
}

Deck.prototype.display=function(){
	for(var i=0;i<this.cards.length;i++){
		document.write(this.cards[i].toString());
	}
}

Deck.prototype.shuffle=function(nTimes){
	for(var fan=1;fan<=nTimes;fan++){
		for(var num=this.cards.length-1;num>=1;num--){
			//Swap the cards
			var rand=Math.floor((Math.random()*num)); 
			var temp=this.cards[num];
			this.cards[num]=this.cards[rand];
			this.cards[rand]=temp;
		}
	}
}

Deck.prototype.deal=function(nCards){
	var cards=new Array(nCards);
	if(this.position>=51-nCards){
		this.shuffle(7);
		this.position=0;
	}
	for(var i=0;i<nCards;i++){
		cards[i]=this.cards[this.position++];
	}
	return cards;
}