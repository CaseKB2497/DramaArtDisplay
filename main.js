// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');

const front1 = document.querySelector('#f1');
const front2 = document.querySelector('#f2');
const front3 = document.querySelector('#f3');

// Event listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 1;
let numOfPapers = 3;
let maxState = numOfPapers + 1;


function openBook(isFirstPage) {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isFirstPage) {
    if(isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
    if(currentState < maxState) { 
        switch(currentState) {
            case 1:
                openBook(true);
                paper1.classList.add("flipped");
                paper1.style.zIndex = 3;
                paper2.style.zIndex = 2;
                paper3.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 3;
                paper1.style.zIndex = 1;
                paper3.style.zIndex = 2;
                break;
            case 3:
                closeBook(false);
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                paper1.style.zIndex = 1;
                paper2.style.zIndex = 2;
                break;
            default: 
                throw new Error("unkown state");    
        }

        currentState++;
    }
}

function goPrevious() {
    if(currentState > 1) {
        switch(currentState) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                paper2.style.zIndex = 2;
                paper3.style.zIndex = 1;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                paper1.style.zindex = 1;
                paper3.style.zindex = 2;
                break;
            case 4: 
                openBook()
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                paper1.style.zindex = 1;
                paper2.style.zIndex = 2;
                break;
        }

        currentState--;
    }
}