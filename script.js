
const button = document.querySelector("#rolldie")
const result = document.querySelector("#die1")

const roll = (num) => {
    return Math.floor(Math.random() * num) + 1 
}

button.addEventListener("click", function () {
    let dieValue = document.querySelector("#diesides").value
    die1.innerHTML = roll(dieValue)
})


// function test
let testValue = 6
let functionTest = roll(testValue)
console.log(functionTest)
if (functionTest > testValue || functionTest < 1) {
    throw Error('Nope, this is not a good function')
}

