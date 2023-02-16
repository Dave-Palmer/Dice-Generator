
const button = document.querySelector("#rolldie")
const result = document.querySelector("#die1")
const diebox = document.querySelector("#diebox")

const roll = (num) => {
    return Math.floor(Math.random() * num) + 1 
}

button.addEventListener("click", function () {
    diebox.classList.toggle("animationshake")
    let dieValue = document.querySelector("#diesides").value
    setTimeout(function () {
        die1.innerHTML = roll(dieValue)
        diebox.classList.toggle("animationshake")
    },700)
})


// function test
let testValue = 6
let functionTest = roll(testValue)
console.log(functionTest)
if (functionTest > testValue || functionTest < 1) {
    throw Error('Nope, this is not a good function')
}

