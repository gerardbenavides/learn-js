let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    meetLeft: 0,

    addMeeting: function(num = 0) {
        this.meetings = this.meetings + num
    },

    done: function (num = 0) {
        this.meetDone = this.meetDone + num
    },

    resetDay: function() { // NOT WORKINGGGGGGGGGG
        this.meetDone = 0
        this.meetings = 0
    },

    summary: function() {
        this.meetLeft =   this.meetings - this.meetDone
        console.log(`You have ${this.meetLeft} meetings left for today`) 
    }

}

myTodos.addMeeting(1)
myTodos.addMeeting(10)
myTodos.done(5)

console.log(myTodos.meetDone) // Prints number of meetings
console.log(myTodos.meetings) // Prints number of meetings
myTodos.summary() // Prints text with them meeting left for today