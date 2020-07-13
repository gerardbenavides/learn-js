let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num = 0) {
        this.meetings = this.meetings + num
    },

    meetDone: function (num = 0) {
        this.meetings = this.meetings - num
    },

    resetDay: function() { // NOT WORKINGGGGGGGGGG
        this.meetDone = 0
        this.meetings = 0
    },

    summary: function() {
        console.log(`You have ${this.meetings} meetings left for today`) 
    }

}

myTodos.addMeeting(1)
myTodos.addMeeting(10)
myTodos.resetDay
myTodos.meetDone(5)


console.log(myTodos.meetings) // Prints number of meetings
myTodos.summary() // Prints text with them meeting left for today