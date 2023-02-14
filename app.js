const happiness = document.getElementById("happiness");
const sad = document.getElementById("sad");
const hungry = document.getElementById("hungry");
const thirsty = document.getElementById("thirsty");
const health = document.getElementById("health");


// global variables 
const removeEgg1 = document.getElementById("egg1")
const removeEgg2 = document.getElementById("egg2")
const removeEgg3 = document.getElementById("egg3")

// image files etc 
// images should load from top
class Pet {
  constructor(happiness, sadness, cleanness, hungry, thirsty, health) {
    this.happiness = happiness;
    this.sadness = sadness;
    this.cleanness = cleanness;
    this.hungry = hungry;
    this.thirsty = thirsty;
    this.health = health;
};

// class Pet {
//    constructor(feed, drink, play, clean, heal, poop) {
//     this.feed = feed;
//     this.drink = drink;
//     this.play = play;
//     this.clean = clean;
//     this.heal = heal;
//     this.poop = poop;

//     happiness = 100; 
//     sad = 0;
//     hungry = 50;
//     thirsty = 50;
//     health = 100;
//   } 

    
    feedPet() {
    this.hungry = 0;
    this.happiness += 10;
  }
}


//global v = let cyberPet equal empty string
class Seal extends Pet {
  super(happiness, sadness, cleanness, hungry, thirsty, health) {
 //seal constructor & add super C ?
  }  

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
}


//other functions -----
// class SugarGlider extends Pet {
// }

// class Frog extends Pet {

// }




// const removeEgg1 = document.getElementById("egg1")
// const removeEgg2 = document.getElementById("egg2")
// const removeEgg3 = document.getElementById("egg3")

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
    });
})
      
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
        
    })


    //***** jacks code */ const displaySeal = () => {
    //   if (removeEgg1.addEventListener("click", () => {
    //       sealImage.style.display = "block"; })
    
    //   else if (removeEgg2.addEventListener("click", () => {
    //     squirrelImage.style.display= "block"; })
    
    //   else if (removeEgg3.addEventListener("click", () => {
    //     frogImage.style.display="block"
    //   }))
    

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
 




 



