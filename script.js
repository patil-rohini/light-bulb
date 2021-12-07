document.addEventListener('DOMContentLoaded', function(){
    const bulbBoard = document.getElementById("bulb-board");

    const imageOnOff = document.createElement('img');
    // Initial Off image
    imageOnOff.src = "./pic_bulboff.gif";
    imageOnOff.classList = ['image']
    imageOnOff.setAttribute('data-state', 'off');

    const onOffButton = document.createElement('button');
    onOffButton.classList = ['onoff'];
    onOffButton.innerHTML = "On";

    
    onOffButton.onclick = function () {
        console.log("onOff-Button Clicked");
        if(imageOnOff.getAttribute("data-state") === "on") {
            imageOnOff.src = "./pic_bulboff.gif";
            imageOnOff.setAttribute('data-state', 'off');
            onOffButton.innerHTML = "On";
        } else {
            imageOnOff.src= "./pic_bulbon.gif";
            imageOnOff.setAttribute('data-state', 'on');
            onOffButton.innerHTML = "Off";
        }
    }

    bulbBoard.appendChild(imageOnOff);
    bulbBoard.appendChild(onOffButton);

});