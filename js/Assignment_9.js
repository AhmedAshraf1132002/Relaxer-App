var btn=document.querySelector('#btn');



var quote=[

{
  'qoute':"It's not what happens to you, but how you react to it that matters.",
  'auther':'--Epictetus'
},
{
  'qoute':"The best revenge is massive success.",
  'auther':'--Frank Sinatra'
},
{
  'qoute':"You miss 100% of the shots you don't take.",
  'auther':'--Wayne Gretzy'
},
{
  'qoute':"Do not take life too seriously. You will not get out alive.",
  'auther':'--Elbert Hubbard'
},
{
  'qoute':"Resentment is like drinking poison and waiting for your enemies to die.",
  'auther':'--Nelson Mandela'
},
]


btn.addEventListener('click',function()
{
  var num=Math.floor(Math.random()*quote.length)
  console.log(num);

  document.getElementById('quote').innerHTML=quote[num].qoute;
  document.getElementById('auther').innerHTML=quote[num].auther;
})