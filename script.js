let points = 0;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    showStart();
}

function showStart() {
    console.log("show start");
     document.querySelector("#game_background").classList.add("hide");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", playClickHandler);
}


function playClickHandler() {
    hideStart();
}


function hideStart() {
    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", playClickHandler);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");
     document.querySelector("#start").removeEventListener("animationend", startGame);
     document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("fade_out");
     document.querySelector("#points").innerHTML = points;
    document.querySelector("#pengesedel").addEventListener("click", clickMoney);
    document.querySelector("#pengesedel1").addEventListener("click", clickMoney);
    document.querySelector("#pengesedel2").addEventListener("click", clickMoney);
    document.querySelector("#pengesedel3").addEventListener("click", clickMoney);
    document.querySelector("#pengesedel4").addEventListener("click", clickMoney);
     document.querySelector("#dokument").addEventListener("click", clickDok);
     document.querySelector("#dokument1").addEventListener("click", clickDok);
     document.querySelector("#dokument2").addEventListener("click", clickDok);
     document.querySelector("#dokument3").addEventListener("click", clickDok);
     document.querySelector("#dokument4").addEventListener("click", clickDok);



}


function clickMoney(){
	console.log("pengeseddel");
    //points = points +1;
    //points += 1;
    points += 10;

    //kald en variabel
    console.log(points);
   //input i tom div
    document.querySelector("#points").innerHTML = points;
    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click" , clickMoney);

}



function clickDok(){
	console.log("dokumnet");

    points -= 50;

    //kald en variabel
    console.log(points);
   //input i tom div
    document.querySelector("#points").innerHTML = points;
    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click" , clickDok);
}
