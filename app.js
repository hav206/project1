//class User {
//	constructor(password, username)
//	{
//		this.password = password;
//		this.username = username;
//	}
//}
const allCardFaceDown = 1;
const twoCardValue = 1;
var facedownCard = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewIKS55HnANFp_U1m4QuV4ni9TflYoJtiH4SnNqC_2aBnCLPNKQ";
console.log("hello");
var deckOfCards = {myCard : [
	
	{"Twospade" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cards-2-Spade.svg/2000px-Cards-2-Spade.svg.png",
     "spadeDown" : facedownCard,
 	  value : twoCardValue},
    {"Twoclub" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/2000px-2_of_clubs.svg.png",
     "spadeDown" : facedownCard,
       value : twoCardValue},
    {"TwoDimond" : "https://st2.depositphotos.com/2810953/8331/v/950/depositphotos_83316630-stock-illustration-poker-playing-card-2-diamond.jpg",
	 "spadeDown" : facedownCard,
	   value : twoCardValue},
    {"TwoHeart" : "https://i.pinimg.com/236x/ef/40/8a/ef408a46f21678fa25ad51bc83261993--house-of-cards-heart-cards.jpg",
	 "spadeDown" :facedownCard,
	  value : twoCardValue}
]};

//var myImage = document.createElement("img");

//var myImage = $('<img id="img">');
//console.log(myImage);
//var spanList;
//var myDiv;
for (var i = 0; i < 4; i++){
	//var myImage = document.createElement("img");
	//myImage.attr("value", "image " + i);
	var myImage = $( '<img />', {
		value: allCardFaceDown.toString(),
		src: deckOfCards.myCard[i].spadeDown
	})
	 var spanList = $("<span></span>");
	//console.log(spanList);
	var myDiv = $("<div></div>");
	console.log(myImage);
	//console.log(myDiv);
	//myImage.src = deckOfCards.myCard[i].spadeDown;
	
	console.log(myImage);
	spanList.append(myImage);
	myDiv.append(spanList);
	$("body").append(myDiv);
	//document.body.append(myDiv);
}

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
