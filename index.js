import data from '/data.js'
import Dog from '/Dog.js'

let currentDogIndex = 0
let currentDog = new Dog(data[currentDogIndex])
document.getElementById('liked').addEventListener('click', yes)
document.getElementById('swiped').addEventListener('click', no)

render()

function render() {
    document.getElementById('container').innerHTML = currentDog.getDogHtml()

    if (currentDogIndex >= data.length) {
        document.body.innerHTML = `<h1 class="end">No dogs left in your area!</h1>                         
                                  `
    }
}

function getNewDog() {
    currentDogIndex++
    currentDog = new Dog(data[currentDogIndex])
    render()
}

function yes() {
    currentDog.setMatchStatus(true)
    console.log(document.getElementById('hidden'))
    document.getElementById('hidden').classList.remove('hidden')
    setTimeout(() => {
        getNewDog()
    }, 2000)
}

function no() {
    currentDog.setMatchStatus(false)
    setTimeout(() => {
        getNewDog()
    }, 2000)
}

