// ABbCDEFGHIJKLMNOpQqRSTUVWXyz
const letters = "abcdefghijklmopqrstuvwxyz";
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

document.addEventListener('click',(e)=>{
    if(e.target.className == "letter-box"){
        e.target.classList.add("clicked");
        let clickLetter = e.target.innerHTML.toLowerCase();
        letterAndSpace.forEach((wordLetter,index) =>{
                // if the clicked letter is quel one of the chosen letter
            if(clickLetter == wordLetter){
                console.log(index);
            }
        })
        
        
    }
})