function calculateDogAge(agePuppy) {
    var ageConversion = (agePuppy * 7);
    console.log("your puppy is " + ageConversion + " years old in dog years");
}
console.log(calculateDogAge(prompt("enter your dog's age in human years")));