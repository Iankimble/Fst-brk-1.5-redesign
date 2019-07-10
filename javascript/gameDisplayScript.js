const display = () => {
    const game = () => {
        logic();
    }

    // Court display
    let bgDisplay = document.createElement("div");
    let bgSub = document.createElement("div");
    let bgName = document.createTextNode(court);
    let bgCourtImg = document.createElement("img");
    
    let outcome = document.createElement("div");
    outcome.setAttribute("id", "outcome");

    bgCourtImg.setAttribute("src", "bg.jpg");
    bgCourtImg.setAttribute("class", "displayCourtImg");
    bgCourtImg.setAttribute("alt", "");

    bgSub.setAttribute("class", "displaySub");

    bgDisplay.appendChild(bgCourtImg);
    bgDisplay.appendChild(bgSub);
    bgDisplay.appendChild(bgSub);
    bgSub.appendChild(bgName);

  document.getElementById("gameInfoContainer").appendChild(outcome);

    document.getElementById("imgBg").append(bgDisplay);
    bgDisplay.setAttribute("class", "displayContainer");
    

    // user

    let userCharDisplay = document.createElement("img");

    userCharDisplay.setAttribute("src", "demoImg.png");
    userCharDisplay.setAttribute("class", "userDisplayImg");

    document.getElementById("imgBg").append(userCharDisplay);

    // computer

    let compCharDisplay = document.createElement("img");

    compCharDisplay.setAttribute("src", "testImg.jpg");
    compCharDisplay.setAttribute("class", "compDisplayImg");

    document.getElementById("imgBg").append(compCharDisplay);





    game();

};