let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

let homeScore = 0
let guestScore = 0

function addOnePointHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoPointsHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreePointsHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}



function addOnePointGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoPointsGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreePointsGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

