import dogs from '/data.js'

class Dog {

    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `
            <img src="${avatar}" class="dog">
            <div class="action">
                <img src="/images/badge-like.png" class="hidden" id="like">
                <img src="/images/badge-nope.png" class="hidden" id="nope">
            </div>
            <div class="text">
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>
                `
    }
}

export default Dog

