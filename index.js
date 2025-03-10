function shout(string) {
    return string.toUpperCase(); //returns string in all caps
}
function whisper (string) {
    return string.toLowerCase(); //returns string in all lowercase
}
function logShout(string) {
    console.log(string.toUpperCase()); //logs string in all caps
}
function logWhisper(string) {
    console.log(string.toLowerCase()); //logs string in all lowercase
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}
