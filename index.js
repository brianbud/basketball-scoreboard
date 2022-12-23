let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore
    isWinning()
}

function isWinning() {
    if (homeScore > guestScore) {
        homeScoreEl.style.border = '1px solid yellow'
        guestScoreEl.style.border = 'none'
    } else if (guestScore > homeScore) {
        homeScoreEl.style.border = 'none'
        guestScoreEl.style.border = '1px solid yellow'
    } else {
        homeScoreEl.style.border = 'none'
        guestScoreEl.style.border = 'none'
    }
}

//Home Score functions
function addOneToHome() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
    isWinning()
}

function addTwoToHome() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
    isWinning()
}

function addThreeToHome() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
    isWinning()
}


//Guest score functions
function addOneToGuest() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
    isWinning()
}

function addTwoToGuest() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
    isWinning()
}

function addThreeToGuest() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
    isWinning()
}