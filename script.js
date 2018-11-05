let points = 0;
let life = 3;
let timeLeft = 10;

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
    document.querySelector("#menu_knap1").addEventListener("click", showSettings);

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
    document.querySelector("#time_left").innerHTML = timeLeft;

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
    document.querySelector("#menu_knap").addEventListener("click", showSettings);
    document.querySelector("#music").play();
    showPenge();
    showPenge1();
    showPenge2();
    showPenge3();
    showPenge4();
    showDok();
    showDok1();
    showDok2();
    showDok3();
    showDok4();
    timeLeftFc();




}


function levelComplete () {
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#music").pause();
    document.querySelector("#win").play();
    document.querySelector("#levelcomplete").addEventListener('click', showStart1);
}

function clickElement() {
    console.log("clickElement");

    if (this.classList.contains("dok")) {
        console.log("Dokument");
        document.querySelector("#life" + life).classList.add("hide");
        life--;
        document.querySelector("#arrh").currentTime = 0;
        document.querySelector("#arrh").play();


    } else if (this.classList.contains("pengesedel")) {
        console.log("pengesedel");
        points += 10;
        document.querySelector("#points").innerHTML = points;
        document.querySelector("#wuhu").currentTime = 0;
        document.querySelector("#wuhu").play();
    }


    gameStatus();
}


function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        gameOver();
    } else if (points == 100) {

        levelComplete();
    }


}


function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#luk").addEventListener('click', hideSettings);
    document.querySelector("#musik").addEventListener('click', toggelMusic);
    document.querySelector("#lyd").addEventListener('click', toggelSound);




}

function toggelMusic() {

    console.log("toggelMusic")
    if (document.querySelector("#musik").classList.contains("hide")) {
        document.querySelector("#musik").classList.remove("hide");
        document.querySelector("#music").muted = true;

    } else {
        document.querySelector("#musik").classList.add("hide");
        document.querySelector("#music").muted = false;

    }
    document.querySelector("#musik_off").addEventListener('click', toggelMusic);

    if (document.querySelector("#musik_off").classList.contains("hide")) {
        document.querySelector("#musik_off").classList.remove("hide");
        document.querySelector("#music").muted = true;

    } else {
        document.querySelector("#musik_off").classList.add("hide");
        document.querySelector("#music").muted = false;

    }



}

function toggelSound() {

    console.log("toggelSound")
    if (document.querySelector("#lyd").classList.contains("hide")) {
        document.querySelector("#lyd").classList.remove("hide");
        document.querySelector("#wuhu").muted = true;
        document.querySelector("#arrh").muted = true;

    } else {
        document.querySelector("#lyd").classList.add("hide");
        document.querySelector("#wuhu").muted = false;
        document.querySelector("#arrh").muted = false;

    }
    document.querySelector("#lyd_off").addEventListener('click', toggelSound);

    if (document.querySelector("#lyd_off").classList.contains("hide")) {
        document.querySelector("#lyd_off").classList.remove("hide");
        document.querySelector("#wuhu").muted = true;
        document.querySelector("#arrh").muted = true;

    } else {
        document.querySelector("#lyd_off").classList.add("hide");
        document.querySelector("#wuhu").muted = false;
        document.querySelector("#arrh").muted = false;

    }



}


function timeLeftFc() {
    timeLeft--;
    console.log("tid tilbage" + timeLeft);
    if (timeLeft > 0) {
    setTimeout(timeLeftFc, 1000);
}else {
    gameOver();

    }
}

function gameOver(){
     document.querySelector("#gameover").classList.remove("hide")
    document.querySelector("#music").pause();
    document.querySelector("#lose").play();
     document.querySelector("#gameover").addEventListener('click', showStart1);

}

function showStart1(){
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    showStart();
}


function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings").classList.add("hide");
}




function showPenge() {
    document.querySelector("#pengesedel").classList.toggle("hide");
    setTimeout("doShow()", 2000);

}


function doShow() {
    console.log("doShow")

    document.querySelector("#pengesedel").classList.toggle("hide");
    setTimeout("showPenge()", 2000);


}

function showPenge1() {
    document.querySelector("#pengesedel1").classList.toggle("hide");
    setTimeout("doShow1()", 1000);

}


function doShow1() {
    console.log("doShow1")

    document.querySelector("#pengesedel1").classList.toggle("hide");
    setTimeout("showPenge1()", 500);


}

function showPenge2() {
    document.querySelector("#pengesedel2").classList.toggle("hide");
    setTimeout("doShow2()", 1000);

}


function doShow2() {
    console.log("doShow2")

    document.querySelector("#pengesedel2").classList.toggle("hide");
    setTimeout("showPenge2()", 1000);


}

function showPenge3() {
    document.querySelector("#pengesedel3").classList.toggle("hide");
    setTimeout("doShow3()", 1000);

}


function doShow3() {
    console.log("doShow3")

    document.querySelector("#pengesedel3").classList.toggle("hide");
    setTimeout("showPenge3()", 1000);


}

function showPenge4() {
    document.querySelector("#pengesedel4").classList.toggle("hide");
    setTimeout("doShow4()", 4000);

}


function doShow4() {
    console.log("doShow")

    document.querySelector("#pengesedel4").classList.toggle("hide");
    setTimeout("showPenge4()", 2000);


}




function showDok() {
    document.querySelector("#dokument").classList.toggle("hide");
    setTimeout("doShowdok()", 2000);

}


function doShowdok() {
    console.log("doShowdok")

    document.querySelector("#dokument").classList.toggle("hide");
    setTimeout("showDok()", 2000);


}

function showDok1() {
    document.querySelector("#dokument1").classList.toggle("hide");
    setTimeout("doShowdok1()", 1000);

}


function doShowdok1() {
    console.log("doShowdok1")

    document.querySelector("#dokument1").classList.toggle("hide");
    setTimeout("showDok1()", 500);


}

function showDok2() {
    document.querySelector("#dokument2").classList.toggle("hide");
    setTimeout("doShowdok2()", 1000);

}


function doShowdok2() {
    console.log("doShowdok2")

    document.querySelector("#dokument2").classList.toggle("hide");
    setTimeout("showDok2()", 1000);
}

function showDok3() {
    document.querySelector("#dokument3").classList.toggle("hide");
    setTimeout("doShowdok3()", 1000);
}


function doShowdok3() {
    console.log("doShowdok3")

    document.querySelector("#dokument3").classList.toggle("hide");
    setTimeout("showDok3()", 1000);
}

function showDok4() {
    document.querySelector("#dokument4").classList.toggle("hide");
    setTimeout("doShowdok4()", 4000);

}


function doShowdok4() {
    console.log("doShowdok")

    document.querySelector("#dokument4").classList.toggle("hide");
    setTimeout("showDok4()", 2000);
}
