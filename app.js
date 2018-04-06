//class User {
//	constructor(password, username)
//	{
//		this.password = password;
//		this.username = username;
//	}
//}
const allCardFaceDown = 1;
const twoCardValue = 1;
const ThreeCardValue = 2;
const FourCardValue = 3;
const FiveCardValue = 4;
const spadeType = 1;
const clubType = 2;
const diamondType = 3;
const heartType = 4;
var facedownCard = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewIKS55HnANFp_U1m4QuV4ni9TflYoJtiH4SnNqC_2aBnCLPNKQ";
let comparisonCard;
console.log("hello");
var deckOfCards = {myCard : [
	
	{"Twospade" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cards-2-Spade.svg/2000px-Cards-2-Spade.svg.png",
     "spadeDown" : facedownCard,
 	  id : twoCardValue, type: spadeType},
    {"Twoclub" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/2000px-2_of_clubs.svg.png",
     "spadeDown" : facedownCard,
       id : twoCardValue, type: clubType},
    {"TwoDimond" : "https://st2.depositphotos.com/2810953/8331/v/950/depositphotos_83316630-stock-illustration-poker-playing-card-2-diamond.jpg",
	 "spadeDown" : facedownCard,
	   id : twoCardValue, type : diamondType},
    {"TwoHeart" : "https://i.pinimg.com/236x/ef/40/8a/ef408a46f21678fa25ad51bc83261993--house-of-cards-heart-cards.jpg",
	 "spadeDown" :facedownCard,
	  id : twoCardValue, type : heartType},
	  {"Threespade" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaU1_m67G_svhDdJNeSjqH0yXs3KpxzgRpfCTcU45W8l_y-hYq",
	   "spadeDown" : facedownCard,
	   id : ThreeCardValue, type : spadeType},
	   {"Threeclub" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA1VpqJHt6ssrp-Uz70CbaOF5rS0-KeJ4A5iNiJ6YRjmJoRMGyng",
	   	"spadeDown" : facedownCard,
	   	id : ThreeCardValue, type : clubType},
	   	{"ThreeDiamond" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZ2NGFNW0IWTD_oKmekMQYdkuZuXKXXGkC7-dENPZMcLbguQc3Q",
	    "spadeDown" : facedownCard,
		id : ThreeCardValue, type : diamondType},
		{"ThreeHeart" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xeVJQ8VzNn-tAeSJEPbks2cOYsI0b0MgRPsJa8ueTw_BVp65",
		"spadeDown" : facedownCard,
		id : ThreeCardValue, type : heartType},
		{"Fourspade" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZiS-6I2BmiMrOL4-WFwq0pzf2QeT49ErQMC6FjLhJPA6EpWZNg",
		"spadeDown" : facedownCard,
		id : FourCardValue, type : spadeType },
		{"FourClub" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwy2iqM41LsrRHqdfMJZ6Fy37TdNL21syQmQ1YNiK8XipTjjVyQ",
		"spadeDown" : facedownCard,
		id: FourCardValue, type: clubType},
		{"FourDiamond" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwbzZICeXKHfxBOeXDyouKFPEiA-jCl71tkm8NqcA5xcjodOKKw", 
		"spadeDown" : facedownCard,
		id: FourCardValue, type: diamondType},
		{"FourHeart" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDBnXRpQ8AWv5Gdb-oRuEGUlELQ_qQhT12UMeSLsmaXWfr4_6",
		"spadeDown" : facedownCard,
		id : FourCardValue, type: heartType},
		{"Fivespade": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CS_Q-lhiM46tckqPTKBG7rPy0EInbr8p2wptUgZfODpEgbdbzw",
		"spadeDown" : facedownCard,
		id : FiveCardValue, type : spadeType},
		{"FiveClub" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQjZ3JFmWPy41ZAsv00Gejz5wbmsl4nsWBKER1gqAzgP9zl2q",
		"spadeDown" : facedownCard,
		id : FiveCardValue, type : clubType},
		{"FiveDiamond" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfX8VG4dxjgLuws5wV8aUYvj6KkPUvqncRhtlqf6lEA-FMYBAw",
		"spadeDown" : facedownCard,
		id : FiveCardValue, type: diamondType},
		{"FiveHeart" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwp5HMRi7yd5Un_Jr6zGFHqFEKnWBHf_Aoz49QGga6BL8JujVbAg",
		"sapdeDown" : facedownCard,
		id : FiveCardValue, type: heartType}
		// {},
		// {},
		// {},
		// {},
		// {},
		// {},
]};

//var myImage = document.createElement("img");

//var myImage = $('<img id="img">');
//console.log(myImage);
var spanList;
var myDiv;


var mytable = $('<table></table>').attr({ id: "basicTable" });
var row;
var column;
var index = 0;
for (var i = 0; i < 4; i++)
{
	row  = $("<tr></tr>");
	for (var j = 0; j < 4; j++){

		column = $("<td></td>");
		var myImage = $( '<img />', {
			value: allCardFaceDown.toString(),
			src: deckOfCards.myCard[index].spadeDown
		})
		//index++;
		//console.log(index);
		column.append(myImage);
		row.append(column);
	}
	//row.append(column);
	mytable.append(row);
	$("body").append(mytable);

}

//mytable.append(row);
//$("body").append(mytable);
//document.body.append(myDiv);

//myImage.src = deckOfCards.myCard[3].TwoHeart;
//$("#card").append(myImage);


// function takes in a click event 
// give the random number between (0-13)
// 0 would give me A 
// 1 would give me 2
// 2 would give me 3
// 3 would give me 4
// 4 would give me 5
// 5 would map me 6

let image = $('img');

Array.from(image).forEach(function(image){
	image.addEventListener('click', function()
	{
	//console.log("test");
		var cardChosen = Math.floor((Math.random() * 4) + 1);
		console.log(cardChosen);
	//console.log(cardChosen);
		for (var i = 0; i < deckOfCards.myCard.length; i++)
		{
			if (cardChosen === deckOfCards.myCard[i].id )
			{
				var temp = Object.values(deckOfCards.myCard[cardChosen]);
				var key = Object.keys(deckOfCards.myCard[cardChosen]);
				var type = key[0];
				var mytemp = temp[0];
				console.log(mytemp);
				console.log(type);

				//console.log(deckOfCards.myCard[cardChosen].indexOf(1));
				$(this).attr('src', mytemp); // setter
				var src = $(this).attr('src'); // getter
				if (comparisonCard !== undefined) {
					console.log(checkMatch(deckOfCards.myCard[cardChosen]));
					//checkMatch($(this));
					comparisonCard = undefined;	
					//deckOfCards.myCard[cardChosen];
					$(this).attr('disabled', 'disabled');
				} else {
					comparisonCard = deckOfCards.myCard[cardChosen];
					//$(this).attr('disabled', 'disabled');
					//console.log('whatup')
					//comparisonCard = $(this);
					//comparisonCard.attr('disabled', 'disabled');
				}
				//comparisonCard.attr('disabled', 'disabled');
				//$(this).attr('disabled', 'disabled');
				//console.log(deckOfCards.myCard.length);
				//spanList.val(deckOfCards.myCard[0].Twospade);
				//if(deckOfCards.myCard.length > 0){
					//movingChosenCardToArray(cardChosen);
					// checkMatch(cardChosen);	
				//}
				break;
			}
		}
	//
	})
})


checkMatch = (compareCard) => {
	
	return (compareCard.id === comparisonCard.id);
	//console.log(comparisonCard);
	//console.log(compareCard);

	//var values = Object.values(deckOfCards.myCard[cardChosen]);
	//console.log(values);
	//console.log(compareCard.attr('value'));
	//console.log(comparisonCard, compareCard)
	//console.log(comparisonCard.attr('value') === compareCard.attr('value'))
}

movingChosenCardToArray = ( n_cardChosen)=> {
	var cardSaver = deckOfCards.myCard[n_cardChosen];
	//console.log(cardSaver);
	deckOfCards.myCard.splice(n_cardChosen, 1);
	var stackOfCard = [];
	stackOfCard.push(cardSaver);
	console.log(stackOfCard);
}
//console.log(image);

