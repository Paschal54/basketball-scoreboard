let homeCount = 0
let awayCount = 0

let countHm = document.getElementById("home-el")
let countAw = document.getElementById("away-el")

function addH1() {
    homeCount += 1
    countHm.textContent = homeCount
}

function addH2() {
    homeCount += 2
    countHm.textContent = homeCount
}

function addH3() {
    homeCount += 3
    countHm.textContent = homeCount
}

function addA1() {
    awayCount += 1
    countAw.textContent = awayCount
}

function addA2() {
    awayCount += 2
    countAw.textContent = awayCount
}

function addA3() {
    awayCount += 3
    countAw.textContent = awayCount
}

function resetHome() {
    countHm.textContent = 0
    homeCount - 0
}

function resetGuest() {
    countAw.textContent = 0
    awayCount = 0 
}