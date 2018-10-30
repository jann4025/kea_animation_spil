window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    showStart();
}

function showStart() {
    console.log("show start");
     document.querySelector("#game_background").classList.remove("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", playClickHandler)
}


function playClickHandler() {
    hideStart();
}

function hideStart() {
    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", playClickHandler);
    document.querySelector("#play").classList.remove("pulse");

    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame)


}

function startGame() {
    console.log("start game");
     document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#game_background").classList.remove("hide");
     document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("fade_out");

}
