//Arrays

/*var names = ['lol','cake','egg'];
var years = new Array(1990, 1999, 1929);

names[1] = 'ben';
names[names.length] = "mary";
console.log(names);
*/

/*

//functions are called methods
 lina  = ['red', 'leslie', 25, false];
 //.push add to the last array (appends)
 lina.push('cake');
 //.unshift insert new elements into the start of an array
 lina.unshift('Mrs');
 //.pop removes the last element of an array and returns it
 lina.pop()
 //.shift removes the first element of an array and returns it
 lina.shift();
 console.log(lina);
//.indexOf returns the position of the value in the array
console.log(lina.indexOf('leslie')); 

var isSkinny = lina.indexOf('skinny') === -1 ? 'lina is fat' : 'lina is skinny';
console.log(isSkinny);
*/

// 125, 48, 268
//20% if $50, 15% if 50-200 and 10% if 200>
// end arrays contain all 3 tips for each bill
//second contains all three final paid amounts bill and tip

/*
var tipCalc = function(bill) { 
    if (bill <=50) {
        return "$" + bill * .2 //percentage
    } else if (bill => 50 && bill <= 200) {
        return "$"+ bill * .15;
    } else if (bill => 200) {
    return "$" + bill * .1;
    } else {
        return bill * .1;
    }
    }

    
var spendingArray = [125, 48, 268];
var tipArray = [tipCalc(125), tipCalc(48), tipCalc(268)];

*/
/*
function tipCalc(bill){
    var percentage;
    if (bill <=50) {
        percentage = .2;
    }else if (bill => 50 && bill <200) {
        percentage = .15; 
    } else {
        percentage = .1;
    }
    return percentage * bill;
        }

var bills = [125, 48, 268];
var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

var finalValue = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(finalValue);
*/

//Objects and properties
//object literal is filled with properties {}
//Object literal - defines objects using the syntax below

/*
 var john = {
    //key : value (key value pair)
    firstName: 'John',
    lastName: 'Smith', //separate with comma,
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    //as an array you can add another obkect/or array
    job: 'teacher',
    isMarried: false //no comma or semicolon

}
console.log(john.isMarried); //use . to access properties in object
console.log(john['lastName']); //can also access properties/strings []
var x = "birthYear";
console.log(john[x]); //can also add a var 'str' to a property to use inside []


//mutate data:
john.job = "Banana";
john['isMarried'] = true;
*/

//new object syntax
/*
var lina = new Object();
lina.firstName = 'Lina';
lina.birthYear = 1990;
lina['lastName'] = 'Falado'
console.log(lina);

*/

/* var john = {
    //key : value (key value pair)
    firstName: 'John',
    lastName: 'Smith', //separate with comma,
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    //as an array you can add another obkect/or array
    job: 'teacher',
    isMarried: false, //no comma or semicolon
    calcAge: function(birthYear) {
        return 2018 - this.birthYear;
    }
}
console.log(john.calcAge());
*/

//arrays are objects and have methods (only objects have methods).
// THIS method adds the data that is already inserted in the current object

// function expressions vs function declaration

var mark = {
    fullName : 'Mark',
    mass : 62,
    height : 1.2,
    bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};
mark.bmiCalc();
console.log(mark);

var john = {
    fullName : 'John',
    mass : 66,
    height : 1.63,
    bmiCalc : function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};
john.bmiCalc();
console.log(john);

if (john.bmi > mark.bmi) {
    console.log("John is higher with a BMI of " + john.bmi)
} else if (john.bmi < mark.bmi) {
    console.log("mark is higher with a BMI of " + mark.bmi);
} else {
    console.log("it's a draw");
}
