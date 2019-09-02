// Why pay a fortune teller when you can just program your fortune yourself ?

//     Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberOfChildren, partnerName, geoLocation, job) {
    var fortune = ("You will be a " + job + "in " + geoLocation + ',' + "and married to " + partnerName + "with " + numberOfChildren
        + 'kids')
    alert(fortune);
}

var numberOfChildren = prompt("pick a number from 1-4?");
var partnerName = prompt("Tell me your partner's name");
var geoLocation = prompt("where do you live");
var job = prompt("what do you want to be when you're older?");
console.log(tellFortune(numberOfChildren, partnerName, geoLocation, job));