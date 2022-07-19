console.log("script running");

let correct = 0;

// Fix these querySelectors so that they each select the correct element.
const chocolateTile = document.querySelector("#chocolate");
const vanillaTile = document.querySelector("#vanilla");
const strawberryTile = document.querySelector("#strawberry");
const butterPecanTile = document.querySelector("#butter-pecan");
const mintChocolateChipTile = document.querySelector("#mint-chocolate-chip");
const cookiesAndCreamTile = document.querySelector("#cookies-and-cream");
const cookieDoughTile = document.querySelector("#cookie-dough");
const rockyRoadTile = document.querySelector("#rocky-road");
const coffeeTile = document.querySelector("#coffee");
const pistachioTile = document.querySelector("#pistachio");
const chocolateChipTile = document.querySelector("#chocolate-chip");
const neapolitanTile = document.querySelector("#neapolitan");


const messageBox = document.querySelector("#message");


// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
inputField.addEventListener('change', e =>{
  console.log("guessed!");
  //get user's guess
  let guess = inputField.value;
  console.log(guess);
  const array = ["cookies and cream", "mint chocolate chip", "vanilla", "chocolate", "cookie dough", "strawberry", "rocky road", "coffee", "butter pecan", "neapolitan", "pistachio", "chocolate chip"];
  
  if(array.includes(guess.toLowerCase())){
    guess = guess.toLowerCase();
    console.log("You guessed right!");
    while(guess.includes(" ")){
      let num = guess.indexOf(" ")
      guess = guess.slice(0,num) + "-" + guess.slice(num+1);
      console.log(guess);
    }
    //replace spaces with dashes
    let guessId = "#"+guess;
    console.log(guessId);
    document.querySelector(guessId).classList.remove("hidden");
    correct++;
  }
  
  inputField.value = ""
  console.log(correct);
  if (correct === 12){
    messageBox.innerHTML = "CONGRATULATIONS! YOU GUESSED ALL OF THEM!";
    messageBox.classList.remove("subtitle");
    messageBox.classList.add("has-background-warning");
    messageBox.classList.add("title");
    messageBox.classList.add("has-text-dark");
  }
})
