const happy = document.getElementById("happy");
const sad = document.getElementById("sad");
const hungry = document.getElementById("hungry");
const thirsty = document.getElementById("thirsty");
const health = document.getElementById("healthy");
const clean = document.getElementById("clean");



//global variables 
const removeEgg1 = document.getElementById("egg1")
const removeEgg2 = document.getElementById("egg2")
const removeEgg3 = document.getElementById("egg3")

class Pet {
    constructor(happy, sad, clean, hungry, thirsty, healthy) {
        this.happy = happy;
        // happy bar when low is going to be sad
        this.sad = sad;
        this.clean = clean;
        this.hungry = hungry;
        this.thirsty = thirsty;
        this.healthy = healthy;
    }



    feedPet() {
        this.happy += 10;
        this.sad -= 10;
        this.clean -= 10;
        this.hungry -= 10;
        this.thirsty += 10;
        this.healthy += 10;

        // event listener 
        // chosenPet.method()
        const feedButton = document.getElementsByClassName('button1');
        feedButton.addEventListener("click", () => {
            renderData(this);
            // hungry.textContent = `hungry: ${pet.hungry}`;
        })


    };

      
      drinkPet() {
        this.happy += 10;
        this.sad -= 10;
        this.clean -= 10;
        this.hungry += 10;
        this.thirsty -= 10;
        this.healthy += 10;
      };
    
      playPet() {
        this.happy += 10;
        this.sad -= 10;
        this.clean -= 20;
        this.hungry += 10;
        this.thirsty += 10;
        this.healthy += 10;
      };
    
      cleanPet() {
        this.happy += 10;
        this.sad -= 10;
        this.clean += 20;
        this.hungry += 10;
        this.thirsty += 10;
        this.healthy += 10;
      };
    
      healPet() {
        this.happy += 10;
        this.sad -= 10;
        this.clean += 10;
        this.hungry += 10;
        this.thirsty += 10;
        this.healthy += 20;
      };
    
      poopPet() {
        this.happy += 10;
        this.sad -= 10;
        this.clean += 10;
        this.hungry += 10;
        this.thirsty += 10;
        this.healthy += 10;
      };
    
    };
    


class Seal extends Pet {
    //constructor for the seal 
    constructor(happy, sad, clean, hungry, thirsty, healthy) {
        //the constructor from the parent class 
        super(happy, sad, clean, hungry, thirsty, healthy);

    }
}

// class sugar glider here
// and class frog

function playGame() {
        // add logic to buttons
        // call on this for game to start

}


//other functions -----
class SugarGlider extends Pet {
}


class Frog extends Pet {

}



    let chosenPet = {};

    // event listener listens for click on eggs
    removeEgg1.addEventListener("click", () => {


        // REMOVES ALL EGGS 
        removeEgg1.style.display = "none";
        removeEgg2.style.display = "none";
        removeEgg3.style.display = "none";


        //SEAL POP UP
        const img = document.createElement("img");
        img.src = "seal1px.png";
        document.body.appendChild(img);

        // CHANGES THE BACKGROUND
        let changeBackgroundImg = document.getElementsByClassName("bgimg")[0];
        changeBackgroundImg.addEventListener("click", function(){
        changeBackgroundImg.style.backgroundImage = "url(sealsea.gif)";
        

        //  CHOOSE PET NAME 
        input.style.display = "block"
        submit.style.display = "block"

        //SHOW BUTTON CHOICES
        // function hideButtons() {
        //   document.getElementsByClassName('btnlayout').style.display = 'none';
        // } 
        // hideButtons()
        chosenPet = new Seal(50, 10, 70, 60, 30, 20);
        renderData(chosenPet);
        console.log(chosenPet);
    });

    
})

// render data here
function renderData(pet) {

    happy.textContent = `happy: ${pet.happy}`;
    sad.textContent = `sad: ${pet.sad}`;
    clean.textContent = `clean: ${pet.clean}`;
    hungry.textContent = `hungry: ${pet.hungry}`;
    thirsty.textContent = `thirsty: ${pet.thirsty}`;
    health.textContent = `health: ${pet.healthy}`;

}
      
    // event listener listens for click on eggs
    removeEgg2.addEventListener("click", () => { 
        
        // when clicks egg, remove all eggs 
        removeEgg2.style.display = "none";
        removeEgg1.style.display = "none";
        removeEgg3.style.display = "none";

        //SUGAR GLIDER POP UP
        const img = document.createElement("img");
        img.src = "sugarglider2px.png";
        document.body.appendChild(img);

        let changeBackgroundImg = document.getElementsByClassName("bgimg")[0];
        changeBackgroundImg.addEventListener("click", function() {
        changeBackgroundImg.style.backgroundImage = "url(squirrelforest.gif)";

          //  CHOOSE PET NAME 
        input.style.display= "block"
        submit.style.display = "block"

        chosenPet = new SugarGlider(50, 10, 70, 60, 30, 20);
        renderData(chosenPet);
        console.log(chosenPet);

        });
        
    })
  
    // event listener listens for click on eggs
    removeEgg3.addEventListener("click", () => { 
        
        // when clicks egg, remove all eggs 
        removeEgg1.style.display = "none";
        removeEgg2.style.display = "none";
        removeEgg3.style.display = "none";

         //FROG POP UP
         const img = document.createElement("img");
         img.src = "frog2px.png";
         document.body.appendChild(img);

        let changeBackgroundImg = document.getElementsByClassName("bgimg")[0];
        changeBackgroundImg.addEventListener("click", function(){
        changeBackgroundImg.style.backgroundImage = "url(frogpond.gif)";
        
    });

        //  CHOOSE PET NAME 
        input.style.display= "block"
        submit.style.display = "block"

        chosenPet = new Frog(50, 0, 70, 60, 30, 20);
        renderData(chosenPet);
        console.log(chosenPet);
        
    })


// input your pet name
    const headertext = document.getElementById("headertext");
    const input = document.getElementById("input");
    const submit = document.getElementById("submit");

    input.style.display= "none"
    submit.style.display = "none"

    submit.addEventListener("click", () => {

     headertext.textContent = input.value

     input.value=""
})
 


 
const timingFunction = () => {
    window.setTimeout(() => {
        this.happy -= 10;
        this.sad -= 2;
        this.clean -= 2;
        this.hungry -= 2;
        this.healthy -= 2;
        this.thirsty -= 2;
        renderData();
        timingFunction();
    }, 2000);
}
timingFunction();
renderData();


// if() all numbers on bars == 0 
// upload full screen image of dead pet 
// say game over



//function playGame() {
    // add logic to buttons
    // call on this for game to start
    // div name for buttons is 'btnlayout'
    //when click on feed/pet etc, display timing function and render function

//    const buttons = document.getElementsByClassName('btnlayout')
//     buttons.addEventListener("click", () => {
//         renderData();
//         timingFunction();
    
//     })
//         renderData();
//         timingFunction();


// }




// example() {
  //  // btn1.addEventListener
  // }

  //start here on this class
  // add event listener for egg 
  // inside eventlistener
  // loads img
  // give cyberPet new value = new Seal(happy values, hungry values, thirsty values)
  // load other seal properties within class
  // UPLOADS SEAL TO THE SCREEN AFTER CLICKING EGG 1
  //Image 
  // super(happiness, sadness, cleanness, hungry, thirsty, health) {
  // }
//  constructor(feed, drink, play, clean, heal, poop, ball) {