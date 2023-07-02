//Declaring function for detecting nnumbers 1, 2, and 3!

function numberDetector(text) {

  //Separator for look between each number occurrennce.
  const numbers = text.split(', ');

  //Finding the different numbers in order as shown in Epicenter ex.
  numbers.forEach(function(number, index) {

    //Array for looking for aany occurrrence of numbers 1-3.
    console.log(index)
    if (/[3]/.text(number, index)) {
      numbers[index] = number.replace('3', "Won't you be my neighbor?");
    } else if (number === 2) {
      numbers[index] = number.replace('2'. "Boop!");
    } else if (number === 1) {
      numbers[index] = number.replace('1',"Beep!");
    }
  })
  return numbers
} 