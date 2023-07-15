//toUpperCase() using return value
function shout(string) {
    return string.toUpperCase()
}
shout("hello")

//toLowerCase() using return value

function whisper(string) {
    return string.toLowerCase()
}
shout("HELLO")

//toUpperCase() using console.log

function logShout(string) {
    console.log(string.toUpperCase())
}
logShout("hello")

//toLowerCase() using console.log
function logWhisper(string) {
    console.log(string.toLowerCase())
}
logWhisper("HELLO")

//conditionals

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    else { return "I would love to!" }
}
console.log(sayHiToHeadphonedRoommate("can you hear me?"))
console.log(sayHiToHeadphonedRoommate("ARE YOU HAVING A GREAT DAY?"))
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))
