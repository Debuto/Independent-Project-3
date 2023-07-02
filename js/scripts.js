//Declaring function for detecting nnumbers 1, 2, and 3!

function numberDetector(text) {

  //Separator for look between each number occurrennce.
  const numbers = text.split(', ');
  let result = '';

  //Finding the different numbers in order as shown in Epicenter ex.
  numbers.forEach(function(number, index) {

    //Array for looking for aany occurrrence of numbers 1-3.
    if (/[1-3]/.text(number)) {
      result += "Won't you be my neighbor?";
    } else if (/[1-2]/.text(number)) {
      result += "Boop!";
    } else if (/[1]/.text(number)) {
      result += "Beep!";
    }
  })
  return numbers
} 

//Declaring function for counting up to an inputted number!
function weCountRealGood(num) {

  //made a string for result
  let result = '';

  //This for loop tells us to go from 1 to inputted number (num).
  for (let i = 1; i <= num; i++) {

    //Adds 1 to empty result string.
    result += i;
    if (i < num) {

      //Replaces empty string at first, then separates each number so on adn so forth. 
      result =+ ', ';
    }
  }
  return result;
}