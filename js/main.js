// ABbCDEFGHIJKLMNOpQqRSTUVWXyz
const letters = "abcdefghijklmnopqrstuvwxyz";
const letterArr= Array.from(letters.toUpperCase());
const letterContainer = document.querySelector(".litters")
// letterContainer.innerHTML="red"
letterArr.forEach(letter => {
    const span =document.createElement("span");
    // fill letter in 
    const theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className="letter-box";
    letterContainer.appendChild(span)
    
});
const words= {
    programing:['php',"java","phy thon",'c++','C#'],
    movies:["prestige",'Inc eption',"parasite","whiplash"],
    people:["Hichcock","Ale xander","Cleopatra"],
    countries:["syria",'eg ypt',"Yemen","Qatar"]
};
let allKeys= Object.keys(words);
let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);
//category
let randomPropertyName   = allKeys[randomPropertyNumber];
//category words 
let randomPropertyvalue   = words[randomPropertyName];
//random number depend on
let randomValueNumber  = Math.floor(Math.random( ) * randomPropertyvalue.length);
//the chosen word
let randomValueValue =randomPropertyvalue[randomValueNumber];

document.querySelector(".category span").innerHTML = randomPropertyName;

let letterAndSpace = Array.from(randomValueValue)
let letterGuess = document.querySelector(".letter-guess");

letterAndSpace.forEach( lettSpace =>{
    let emptySpan= document.createElement("span");
    if( lettSpace === " "){
        emptySpan.className= "with-space";
    }
    letterGuess.appendChild(emptySpan);
});
//wrong attempts
let worngAttempts=0;
const theDraw= document.querySelector(".hangman-draw")
let guessSpan = document.querySelectorAll(".letter-guess span")
document.addEventListener('click',(e)=>{
    if(e.target.className == "letter-box"){
        let theStatus = false;
        e.target.classList.add("clicked");
        let clickLetter = e.target.innerHTML.toLowerCase();
        let theChosenWord = Array.from(randomValueValue.toLowerCase())

        theChosenWord.forEach((wordLetter,wordIndex) =>{
                // if the clicked letter is quel one of the chosen letter
        
            console.log(wordLetter)
                if(clickLetter == wordLetter){
                    theStatus=true
                // fill the chosen letter 
                guessSpan.forEach((span,spanIndex)=>{
                    if (wordIndex == spanIndex)
                    span.innerHTML=clickLetter;
                });
            };   
         });

         if(theStatus !== true){
            worngAttempts++;
            theDraw.classList.add(`worng-${worngAttempts}`);
         }
         if(worngAttempts == 8){
            letterContainer.classList.add("finished");
            endGame();
         }
      
    }
});

function endGame(){
    let div = document.createElement("div");
    let divText = document.createTextNode(`....Game over , the word is ${randomValueValue}`);
    div.appendChild(divText);
    div.className="popup";
    document.body.appendChild(div);
    console.log(randomValueValue)
}