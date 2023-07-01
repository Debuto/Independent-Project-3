function numberDetector(text) {
  const numbers = text.split(', ');
  numbers.forEach(function(number, index) {
    console.log(index)
    if (/[321]/) {
      numbers[index] = number.replace("Won't you be my neighbor?");
    } else if (number === 2) {
      numbers[index] = number.replace("Boop!");
    } else if (number === 1) {
      numbers[index] = number.replace("Beep!");
    }
  })
  return numbers
} 