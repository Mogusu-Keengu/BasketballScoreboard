
let homeScore = document.getElementById("home-score")
let homeScoreValue = Number(homeScore.innerText)
let guestScore = document.getElementById("guest-score")
let guestScoreValue = Number(guestScore.innerText)

function oneScoreHome(){
    console.log("clicked")
    homeScoreValue += 1
    homeScore.textContent = homeScoreValue
}

function twoScoreHome(){
    console.log("clicked")
    homeScoreValue += 2
    homeScore.textContent = homeScoreValue
}

function threeScoreHome(){
    console.log("clicked")
    homeScoreValue += 3
    homeScore.textContent = homeScoreValue
}



function oneScoreGuest(){
    console.log("clicked")
    guestScoreValue += 1
    guestScore.textContent = guestScoreValue
}

function twoScoreGuest(){
    console.log("clicked")
    guestScoreValue += 2
    guestScore.textContent = guestScoreValue
}

function threeScoreGuest(){
    console.log("clicked")
    guestScoreValue += 3
    guestScore.textContent = guestScoreValue
}

