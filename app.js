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
var facedownCard = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewIKS55HnANFp_U1m4QuV4ni9TflYoJtiH4SnNqC_2aBnCLPNKQ";
console.log("hello");
var deckOfCards = {myCard : [
	
	{"Twospade" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cards-2-Spade.svg/2000px-Cards-2-Spade.svg.png",
     "spadeDown" : facedownCard,
 	  id : twoCardValue},
    {"Twoclub" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/2000px-2_of_clubs.svg.png",
     "spadeDown" : facedownCard,
       id : twoCardValue},
    {"TwoDimond" : "https://st2.depositphotos.com/2810953/8331/v/950/depositphotos_83316630-stock-illustration-poker-playing-card-2-diamond.jpg",
	 "spadeDown" : facedownCard,
	   id : twoCardValue},
    {"TwoHeart" : "https://i.pinimg.com/236x/ef/40/8a/ef408a46f21678fa25ad51bc83261993--house-of-cards-heart-cards.jpg",
	 "spadeDown" :facedownCard,
	  id : twoCardValue},
	  {"Threespade" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaU1_m67G_svhDdJNeSjqH0yXs3KpxzgRpfCTcU45W8l_y-hYq",
	   "spadeDown" : facedownCard,
	   id : ThreeCardValue}
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
for (var i = 0; i < 1; i++)
{
	row  = $("<tr></tr>");
	for (var j = 0; j < 4; j++){

		column = $("<td></td>");
		var myImage = $( '<img />', {
			value: allCardFaceDown.toString(),
			src: deckOfCards.myCard[index].spadeDown
		})
		index++;
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
		var cardChosen = Math.floor((Math.random() * 52) + 1);
	//console.log(cardChosen);
		for (var i = 0; i < 4; i++)
		{
			if (1 === deckOfCards.myCard[i].id )
			{
			//$('img[src=facedownCard]').attr('src', deckOfCards.myCard[0].Twospade);
			//$(mytable).find('img').attr('src', deckOfCards.myCard[0].Twospade );
			//console.log("test");
				$(this).attr('src', deckOfCards.myCard[0].Twospade);
				//spanList.val(deckOfCards.myCard[0].Twospade);
				break;
			}
		}
	//if(cardChosen === )
	})
})
console.log(image);

