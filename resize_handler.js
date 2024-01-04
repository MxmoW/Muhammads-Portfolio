let titletext = document.getElementsByClassName("name-head")[0];

let resizeFunc = () => {
    if(window.innerWidth > 1200){
        titletext.innerText = "Bryan Soares";
    }
    else if(window.innerWidth > 840){
        titletext.innerText = "Bryan Soares";
    }
    else if(window.innerWidth > 460){
        titletext.innerText = "Bryan";
    }
    else{
        titletext.innerText = "BRY-S";
    }
}

window.addEventListener("resize", resizeFunc);

resizeFunc();
