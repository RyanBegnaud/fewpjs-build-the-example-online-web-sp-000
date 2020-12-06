// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let jsHeart = document.getElementsByClassName("like-glyph")[0]
jsHeart.addEventListener("click", function(e){
  if (e.target.innerText === EMPTY_HEART) {
    e.target.innerText = FULL_HEART;
    jsHeart.background.style.color = "blue";
  }
  
  if (e.target.innerText === FULL_HEART) {
    e.target.innerText = EMPTY_HEART;
  }
});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
