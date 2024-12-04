// shows current year for copyright
document.getElementById("year").innerHTML = new Date().getFullYear();

// I take a picture of you when you hover me!
document.querySelector("#picofme").addEventListener("mouseover", function() {
	document.getElementById("picofme").src = "../images/pictureofmeflash.png";
});
document.querySelector("#picofme").addEventListener("mouseout", function() {
	document.getElementById("picofme").src = "../images/pictureofme.jpg";
});

// make the instructions appear as the youtube video reaches that timestamp
video = document.getElementById("thevideo")

document.querySelector("#thevideo").addEventListener("timeupdate", function() {
    thistime = video.currentTime;
    //1:37 instruction
    if (thistime >= 97) {
        document.getElementById("137").style.display = "list-item";
    }
    if (thistime < 97) {
        document.getElementById("137").style.display = "none";
    }
    //1:50 instruction
    if (thistime >= 110) {
        document.getElementById("150").style.display = "list-item";
    }
    if (thistime < 110) {
        document.getElementById("150").style.display = "none";
    }
    //2:45 instruction
    if (thistime >= 165) {
        document.getElementById("245").style.display = "list-item";
    }
    if (thistime < 165) {
        document.getElementById("245").style.display = "none";
    }
    //3:05 instruction
    if (thistime >= 185) {
        document.getElementById("305").style.display = "list-item";
    }
    if (thistime < 185) {
        document.getElementById("305").style.display = "none";
    }
    //3:16 instruction
    if (thistime >= 196) {
        document.getElementById("316").style.display = "list-item";
    }
    if (thistime < 196) {
        document.getElementById("316").style.display = "none";
    }
    //3:40 instruction
    if (thistime >= 220) {
        document.getElementById("340").style.display = "list-item";
    }
    if (thistime < 220) {
        document.getElementById("340").style.display = "none";
    }
    //3:44 instruction
    if (thistime >= 224) {
        document.getElementById("344").style.display = "list-item";
    }
    if (thistime < 224) {
        document.getElementById("344").style.display = "none";
    }
    //4:00 instruction
    if (thistime >= 240) {
        document.getElementById("400").style.display = "list-item";
    }
    if (thistime < 240) {
        document.getElementById("400").style.display = "none";
    }
    //4:06 instruction
    if (thistime >= 246) {
        document.getElementById("406").style.display = "list-item";
    }
    if (thistime < 246) {
        document.getElementById("406").style.display = "none";
    }
    //4:50 instruction
    if (thistime >= 290) {
        document.getElementById("450").style.display = "list-item";
    }
    if (thistime < 290) {
        document.getElementById("450").style.display = "none";
    }
});
