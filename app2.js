const happy = document.getElementById("happy");
const sad = document.getElementById("sad");
const clean = document.getElementById("clean");
const hungry = document.getElementById("hungry");
const thirsty = document.getElementById("thirsty");
const healthy = document.getElementById("healthy");



class Pet {
    constructor(happy, sad, clean, hungry, thirsty, healthy) {
        this.happy = happy;
        this.sad = sad;
        this.clean = clean;
        this.hungry = hungry;
        this.thirsty = thirsty;
        this.healthy = healthy;
    }
}

class Seal extends Pet {
    //constructor for the seal 
    constructor(happy, sad, clean, hungry, thirsty, healthy, backgroundImage) {
        //the constructor from the parent class 
        super(happy, sad, clean, hungry, thirsty, healthy);

        this.backgroundImage = backgroundImage;
    }
}

// class sugar glider 
// class frog

function playGame() {
        // add logic to buttons
        // call on this for game to start
}


// user selects an egg, we store the selection
// seal, frog, sugar glider
// 'element' will store everything related to the click event, use console.log(element) to see exactly what's stored

const capturedPet = "";

for (i = 0; i < egg.length; i++) {
// presume the egg array stores [element1, element2, element3]
    const nextEgg = egg[i];
    nextEgg.addEventListener("click", (e) => {
        const capturedPet = e.id;
        //this test will run once
        if(capturedPet == "seal") {
            //add extra values for individual pet e.g. bg image
            const pet = new Seal(10, 0, 10, 10, 5, 10, "url()");
        } else if(capturedPet == "frog") {
            const pet = new Frog(happy, sad, clean, hungry, thirsty, healthy, backgroundImage);
         } else {
            const pet = new SugarGlider(happy, sad, clean, hungry, thirsty, healthy);
        }

    })
}



function displaySetup() {
    // all the display changes come here 
    // images, hide buttons, etc 
}