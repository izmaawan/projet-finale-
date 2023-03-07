input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    if (Minutes < 59) {
        Minutes += 1
    } else {
        Minutes = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    time = "" + hours + (":" + Minutes)
    basic.showString(time)
})
let Minutes = 0
let hours = 0
let time = ""
let ampm = false
ampm = false
time = ""
let adjust = 0
hours = 0
Minutes = 0
