var diceVal1=Math.floor(Math.random()*6)+1;
var imageList=document.querySelectorAll("img");
imageList[0].setAttribute("src","./images/dice"+diceVal1+".png");
var diceVal2=Math.floor(Math.random()*6)+1;
imageList[1].setAttribute("src","./images/dice"+diceVal2+".png");
var WinnerText="";
if(diceVal1>diceVal2){
    WinnerText="Player 1 Wins!";
}
else if(diceVal1<diceVal2){
    WinnerText="Player 2 Wins!";
}
else{
    WinnerText="It's a tie!";
}
document.querySelector("h1").textContent=WinnerText;