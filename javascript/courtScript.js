let courts = ["Sunshine Court", "Moonlight Court"];
let court = "";

const courtScreen = () => {
    $("#opp_char_header").hide()
    $("#oppCharContainer").hide()
    courtSlct();
};


const courtSlct = () => {

    var courtTitle = document.createElement("h3");
    var text = document.createTextNode("Select a court");
    courtTitle.appendChild(text);
    document.getElementById("court_header").append(courtTitle);
    courtTitle.setAttribute("id", "courtTitle");

    const  displayScreen = ()=>{
        display()
    };

    // Court selection
    // Day Court
    let dayCourt = document.createElement("div");
    let dayCourtSub = document.createElement("div");
    let dayCourtName = document.createTextNode(courts[0]);
    let dayCourtImg = document.createElement("img");
    let dayCourtSelect = document.createElement("button");

    dayCourtImg.setAttribute("src", "bg.jpg");
    dayCourtImg.setAttribute("class", "courtImg");
    dayCourtImg.setAttribute("id","dayCourtId");
    dayCourtImg.setAttribute("alt", "day court");

    dayCourtSub.setAttribute("class", "courtSub");

    dayCourtSelect.setAttribute("class", "courtButton");
    dayCourtSelect.setAttribute("id", "dayCourt");
    dayCourtSelect.appendChild(dayCourtName);

    dayCourt.appendChild(dayCourtImg);
    dayCourt.appendChild(dayCourtSub);
    dayCourtSub.appendChild(dayCourtSelect);

    document.getElementById("courtSlctContainer").append(dayCourt);
    dayCourt.setAttribute("class", "courtClass");

    $("#dayCourt").click(() => {
        court = courts[0];
        console.log(`playing on ${court}`);
  
        displayScreen();
    });

    $("#dayCourtId").click(()=>{
        court = courts[0];
    
        displayScreen();
    });

    // Night Court
    let niteCourt = document.createElement("div");
    let niteCourtSub = document.createElement("div");
    let niteCourtName = document.createTextNode(courts[1]);
    let niteCourtImg = document.createElement("img");
    let niteCourtSelect = document.createElement("button");

    niteCourtImg.setAttribute("src", "bg.jpg");
    niteCourtImg.setAttribute("class", "courtImg");
    niteCourtImg.setAttribute("id","niteCourtId");
    niteCourtImg.setAttribute("alt", "night court");

    niteCourtSub.setAttribute("class", "courtSub");

    niteCourtSelect.setAttribute("class", "courtButton");
    niteCourtSelect.setAttribute("id", "niteCourt");
    niteCourtSelect.appendChild(niteCourtName);

    niteCourt.appendChild(niteCourtImg);
    niteCourt.appendChild(niteCourtSub);
    niteCourtSub.appendChild(niteCourtSelect);

    document.getElementById("courtSlctContainer").append(niteCourt);
    niteCourt.setAttribute("class", "courtClass");

    $("#niteCourt").click(() => {
        court = courts[1];
        console.log(`playing on ${court}`);

        displayScreen();

    });

    $("#niteCourtId").click(()=>{
        court = courts[1];
    
        displayScreen();
    });

};

