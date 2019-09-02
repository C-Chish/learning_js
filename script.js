var teamJohnAverage = (1500 + 94 + 123) / 3;
var teamMikeAverage = (116 + 94 + 123) / 3; 
var teamMaryAverage = (16516 + 94 + 123) / 3;

// var highestAverage = teamJohnAverage > teamMikeAverage ? 
//  console.log('Team John is the winner with a score of '+ teamJohnAverage): 
//     console.log('Team Mike is the winner with a score of ' + teamMikeAverage);

var highestAverage;
switch(true) {
    case highestAverage = teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage:
        console.log('Team John is the winner with a score of '+ teamJohnAverage);
        break;
        case highestAverage = teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage:
        console.log('Team Mike is the winner with a score of ' + teamMikeAverage);
        break; 
        case highestAverage = teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMikeAverage:
            console.log('Team Mary is the winner with a score of ' + teamMaryAverage);
            break;
        default: 
        console.log("It's a draw!! lol");
}
