var randomNumber1=Math.round(Math.random()*6+1);
var newSrc="images/"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",newSrc);
var randomNumber2=Math.round(Math.random()*6+1);
var newSrc2="images/"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",newSrc2);
if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
else
document.querySelector("h1").innerHTML="Draw!";

