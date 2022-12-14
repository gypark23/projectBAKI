
const countDownEl = document.getElementById("timer");
function clicked() {
    document.getElementById("timerButton").style.display = "none";
    document.getElementById("timerExplanation").style.display = "none";
    document.body.style.visibility = "visible";
    setInterval(updateCounter, 1000);
}


//60 seconds start from 59
let time = 59;
function updateCounter() {
    console.log("hi");
  const minutes = Math.floor(time / 6000);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time--;

  if(time < 0) {
    window.location = "/test2_gestures/test2_set2/gestures_set2.html";
  }
}


function like() {
  navigator.vibrate([150]);
  buttonPressed = true;
}
function love() {
  navigator.vibrate([150, 100, 150]);
  buttonPressed = true;
}
function laugh() {
  navigator.vibrate([300, 100, 150, 100, 300]);
  buttonPressed = true;
}
function care() {
  navigator.vibrate([150, 100, 150, 100, 300, 100, 300]);
  buttonPressed = true;
}
function sad() {
  navigator.vibrate([300, 100, 300]);
  buttonPressed = true;
}
function angry() {
  navigator.vibrate([300, 100, 300, 100, 300, 100, 300]);
  buttonPressed = true;
}



const map = [like, love, laugh, care, sad, angry];

const totalTest = 12;
var correct = 0;
var reactionNumber = 0;
var buttonPressed = -1;
var input = 0;
var testNo = 1;
var firstRun = true;
var vibrationDone = false;

// Note: code inspired from https://devinus.tistory.com/47?category=983141

const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;
let slideItems = document.querySelectorAll(".slide_item");
const maxSlide = slideItems.length;
let currSlide = 1;
const pagination = document.querySelector(".slide_pagination");

let submitted = false;

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement(startSlide.tagName);
const endElem = document.createElement(endSlide.tagName);

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;
startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

slideItems = document.querySelectorAll(".slide_item");
let offset = slideWidth * currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  console.log(currSlide);
  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;

    setTimeout(() => {
      
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  console.log(currSlide);
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}


window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

for (let i = 0; i < maxSlide; i++) {

  paginationItems[i].addEventListener("click", () => {

    currSlide = i + 1;

    const offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}


// swiping part
let startPoint = 0;
let endPoint = 0;
let startPointY = 0;
let endPointY = 0;

slide.addEventListener("mousedown", (e) => {
    e.preventDefault()
  startPoint = e.pageX;
  startPointY = e.pageY;
});

slide.addEventListener("mouseup", (e) => {
    e.preventDefault()
  endPoint = e.pageX;
  endPointY = e.pageY;

  //y moved more, vertical move
  if (Math.abs(endPointY - startPointY) > Math.abs(endPoint - startPoint)) {
    //submit
      console.log("submit");
      buttonPressed = currSlide;
      console.log(currSlide);
      submitted = true;
      while(currSlide != 1) prevMove();

  }
  //horizontal move, x changed more
  else {
    
      if (startPoint < endPoint) {
        prevMove();
      } else if (startPoint > endPoint) {
        nextMove();
      }
  }


});

//mobile touch event
slide.addEventListener("touchstart", (e) => {
    e.preventDefault()
    startPoint = e.touches[0].pageX;
    startPointY = e.touches[0].pageY;
});
slide.addEventListener("touchend", (e) => {
    e.preventDefault()
    endPoint = e.changedTouches[0].pageX;
    endPointY = e.changedTouches[0].pageY;
  
  
  
  //y moved more, vertical move
  if (Math.abs(endPointY - startPointY) > Math.abs(endPoint - startPoint)) {
      console.log("submit");
      buttonPressed = currSlide;
      console.log(currSlide);
      submitted = true;
      while(currSlide != 1) prevMove();
  }
  //horizontal move, x changed more
  else {
    
      if (startPoint < endPoint) {
        prevMove();
      } else if (startPoint > endPoint) {
        nextMove();
      }
  }
});
