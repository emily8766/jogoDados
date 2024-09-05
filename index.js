var numeroRandom1 = Math.floor(Math.random()*6)+1;
var numeroRandom2 = Math.floor(Math.random()*6)+1;

function numeroAleatorio(numeroRandom1) {
    switch(numeroRandom1){
        case 1: 
            document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        break;
        case 2: 
            document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
        break;
        case 3: 
            document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
        break;
        case 4: 
            document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
        break;
        case 5: 
            document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
        break;
        case 6: 
            document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        break;

    }
}

function numeroAleatorio2(numeroRandom2) {
    switch(numeroRandom2){
        case 1: 
            document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        break;
        case 2: 
            document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        break;
        case 3: 
            document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        break;
        case 4: 
            document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
        break;
        case 5: 
            document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        break;
        case 6: 
            document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        break;

    }
}


document.querySelector(".img1").addEventListener("click", numeroAleatorio(numeroRandom1));
document.querySelector(".img1").addEventListener("click", numeroAleatorio2(numeroRandom2));
if(numeroRandom1>numeroRandom2){
    document.querySelector("h1").innerHTML="JOGADOR 1 GANHOU";
}else if (numeroRandom2>numeroRandom1){
    document.querySelector("h1").innerHTML="JOGADOR 2 GANHOU";
}else{
    document.querySelector("h1").innerHTML="EMPATOU";
}