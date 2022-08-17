//GETTING DOM ELEMENTS
let oneBtn = document.getElementById("plus-one-home")
let twoBtn = document.getElementById("plus-two-home")
let threeBtn = document.getElementById("plus-three-home")

let oneGuestBtn = document.getElementById("plus-one-guest")
let twoGuestBtn = document.getElementById("plus-two-guest")
let threeGuestBtn = document.getElementById("plus-three-guest")

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score") 

//BUTTON FUNCTIONALITY
//HOME SECTION
let score = 0
function addOne(){
    let addedOne = score+=1
    homeScore.textContent = addedOne
}
function addTwo(){
    let addedTwo = score+=2
    homeScore.textContent = addedTwo
}
function addThree(){
    let addedThree = score+=3
    homeScore.textContent = addedThree
}

//GUEST SECTION
let guestSc = 0
function addOneG(){
    let addedOneGuest = guestSc+=1
    guestScore.textContent = addedOneGuest
}
function addTwoG(){
    let addedTwoGuest = guestSc+=2
    guestScore.textContent = addedTwoGuest
}
function addThreeG(){
    let addedThreeGuest = guestSc+=3
    guestScore.textContent = addedThreeGuest
}
//RESET SECTION
function reset(){
    guestSc = 0
    score = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}