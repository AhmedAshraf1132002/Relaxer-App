// var btn = document.getElementById("btn");
// var quoteOutputone = document.getElementById("quoteOutput");
// var quoteOutputtwo = document.getElementById("authorOutput");

// var Quotes=[

//     {'author': 'Jim Rohn',
//      'quote': 'Beware of what you become in pursuit of what you want.'
//     },
//     {'author': 'Epictetus',
//      'quote': 'It\'s not what happens to you, but how you react to it that matters.'
//     },
//     {'author': 'Frank Sinatra',
//      'quote': 'The best revenge is massive success.'
//     },
//     {'author': 'Wayne Gretzy',
//      'quote': 'You miss 100% of the shots you don\'t take.'
//     },
//     {'author': 'Nelson Mandela',
//      'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
//     },
//     {'author': 'Elbert Hubbard',
//      'quote': 'Do not take life too seriously. You will not get out alive.'
//     },

// ];

// btn.addEventListener('click',function(){
//     var randomQuote=Quotes[Math.floor(Math.random()*Quotes.length)]
//     quoteOutputone.innerHTML=randomQuote;
//     quoteOutputtwo.innerHTML=randomQuote;
// })

var productContainer = [];

function generalQoutes() {
  var coversation = {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  };
  
  
  productContainer.push(coversation);
  console.log(coversation);
  displayData();
}

function displayData() {

     var cartona="";
     var cartonaTwo="";
     console.log(productContainer);

  for (var i = 0; i < productContainer.length; i++) 
  {
    
    cartona +=`Jim Rohn`;
    console.log(cartona);

    cartonaTwo+=` Beware of what you become in pursuit of what you want.`;
   console.log(cartonaTwo);
  }
  document.getElementById("demo").innerHTML=cartona;
  document.getElementById("demo_2").innerHTML=cartonaTwo;
 




}
