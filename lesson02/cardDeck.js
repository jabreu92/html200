/** Card Deck Program **/
let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cardSuits = ['diamonds','hearts','spades','clubs'];

for(let i = 0; i < cardSuits.length; i++)
	{
		for(let j = 0; j < cardValues.length; j++)
		{
			console.log('Printing the card '+ cardValues[j] + ' of ' + cardSuits[i]);
		}
	}