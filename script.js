let points = 0;
let life = 3;

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
    document.querySelector("#pengesedel").addEventListener("click", clickElement);
    document.querySelector("#pengesedel1").addEventListener("click", clickElement);
    document.querySelector("#pengesedel2").addEventListener("click", clickElement);
    document.querySelector("#pengesedel3").addEventListener("click", clickElement);
    document.querySelector("#pengesedel4").addEventListener("click", clickElement);
     document.querySelector("#dokument").addEventListener("click", clickElement);
     document.querySelector("#dokument1").addEventListener("click", clickElement);
     document.querySelector("#dokument2").addEventListener("click", clickElement);
     document.querySelector("#dokument3").addEventListener("click", clickElement);
     document.querySelector("#dokument4").addEventListener("click", clickElement);



}


function clickElement(){
       console.log("clickElement");

    if (this.classList.contains("dok")) {
        console.log("Dokument");
        document.querySelector("#life" + life).classList.add("hide");
        life--;

    } else if (this.classList.contains("pengesedel")) {
        console.log("pengesedel");
        points += 10;
        document.querySelector("#points").innerHTML = points;
    }


    gameStatus();
}


function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        document.querySelector("#gameover").classList.remove("hide");
    } else if (points == 100) {

        document.querySelector("#levelcomplete").classList.remove("hide");
}
}



