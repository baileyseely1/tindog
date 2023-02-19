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
            <div class="action hidden" id="hidden">
                <img src="/images/badge-like.png">
            </div>
            <div class="text">
                <h1>${name}, ${age}</h1>
                <p>How you doin?</p>
            </div>
                `
    }
}

export default Dog

