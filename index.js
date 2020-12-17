
var randomnumber=Math.random();
randomnumber=Math.floor(randomnumber*6)+1;
var diceimage="dice"+randomnumber+".png";
var source="images/"+diceimage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",source);

var randomnumber2=  Math.random();
randomnumber2=Math.floor(randomnumber2*6)+1;
var diceimage2="dice"+randomnumber2+".png";
var source2="images/"+diceimage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",source2);
if(randomnumber>randomnumber2)
{
document.querySelector("h1").innerHTML="🚩Player1 wins";
}
else if(randomnumber2>randomnumber)
{
document.querySelector("h1").innerHTML="🚩Player2 wins";
}
else
{
document.querySelector("h1").innerHTML="Draw";
}
