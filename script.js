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

/*
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
*/
/*
//For loops
john = ['hat', 25, 'cake', 'random data'];
for (var i = 0; i < john.length; i++) {
console.log(john[i]);
}

//While loops
//in while loop we only have the condition
var i = 0;
while(i < john.length) {
    console.log([i]);
    i++;
}
*/
//both are the exact same thing.

//continue and break statements

// john = ['hat', 25, 'cake', 'random data'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }


// john = ['hat', 25, 'cake', 'random data'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

//break will stop the whole lopp
//continue will keep going but ignoring the difference

//Loops and Iteration
/*for (var i = 0; i < 10; i++) {
    console.log(i)
}
*/
//i is a standar variable and will be updated in every loop

//while loop- we only have the condition
/*
var john = ['cat', 'dog', 'cake', 'rad'];
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/
//continued & break statements
//continue quits the current iteriation of the loop
//eg:
/*
var john = ['rad', 'random', 'more random', 1990, 'lol', 1234];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
//this skips anything that isn't a string for example.
//break on the otherhand, stops the loop completely 
var john = ['rad', 'random', 'more random', 1990, 'lol', 1234];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//looping backwards
for (var i = john.length -1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/*
var john = {
    restaurantBills: [124, 48, 268, 180, 42],
    billCalc: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.restaurantBills.length; i++) {
            var percentage;
            var bills = this.restaurantBills[i];
            if (bills < 50) {
            percentage = .2;
            } else if (bills >= 50 && bills < 200) {
                percentage = .15; 
                } else {
                    percentage = .1;
                }
                this.tips[i] = bills * percentage;
                this.finalValues[i] = bills + bills * percentage;
            }
        }
    }
john.billCalc();
console.log(john);

var mark = {
    fullName : 'mark',
    restaurantBills : [77, 475, 110, 45],
    markBillCalc : function() {
        this.tips = [];
        this.finalValues = [];
    for (var i = 0; < this.restaurantBills.length; i++) {
            var percentage;
            var bills = this.restaurantBills[i];
            if (bills < 100) {
                percentage = .2;
            } else if (bills >= 100 && bills < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }
            this.tips[i] = bills * percentage;
            this.finalValues[i] = bills + bills * percentage;
        }
    }
}


*/

