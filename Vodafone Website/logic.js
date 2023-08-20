let flag = 0;
function closemenu() {
    if (flag == 0) {
        document.getElementById("menu").style.visibility = "hidden";
        document.getElementById("menu").style.backgroundColor = "white";
        console.log("hidden")
        flag = 1;
    }
    else{
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("menu").style.backgroundColor = "white";
        console.log("visible")
        flag = 0;
    }
}



