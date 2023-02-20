import data from '/data.js'
import Dog from '/Dog.js'

document.getElementById('liked').addEventListener('click', yes)
document.getElementById('swiped').addEventListener('click', no)

const matches = []
let currentDogIndex = 0
let currentDog = new Dog(data[currentDogIndex])

function getNewDog() {
    currentDogIndex++
    currentDog = new Dog(data[currentDogIndex])
    render()
}

function yes() {
    if (!currentDog.hasBeenLiked && !currentDog.hasBeenSwiped) {
        currentDog.setMatchStatus(true)
        matches.push(currentDog)
        document.getElementById('like').classList.remove('hidden')
        setTimeout(() => {
            getNewDog()
        }, 2000)
    }
}

function no() {
    if (!currentDog.hasBeenLiked && !currentDog.hasBeenSwiped) {
        currentDog.setMatchStatus(false)
        document.getElementById('nope').classList.remove('hidden')
        setTimeout(() => {
            getNewDog()
        }, 2000)
    }
}

function end() {
        document.body.innerHTML = ` 
        <div class="container">
        <h1 class="end">No dogs left in your area :(</h!>
        <h2>Here are your matches:</h2>
        </div>
        ` 
        + matches.map(match => {
            return `
            <section class="container top" id="container">
            <img src="${match.avatar}" class="dog">
            <div class="text">
                <h1>${match.name}, ${match.age}</h1>
                <p>${match.bio}</p>
            </div>
            </section>`
        }).join('')
}

function render() {
    document.getElementById('container').innerHTML = currentDog.getDogHtml()
    if (currentDogIndex >= data.length) {
        end()
    }
}

render()