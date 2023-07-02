document.getElementById('numberForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const numberInput = document.getElementById('number').value;
  const outputDiv = document.getElementById('output');
  const result = numberDetector(Number(numberInput));
  outputDiv.innerText = result;
});

//Declared funnction for detecting numbers 1-3.0

function numberDetector(input) {
  let result = '';
  for (let i = 0; i <= input; i++) {
    if (i === 0) {
      result += i;
    } else if (i === 3) {
      result += ', "Won\'t you be my neighbor?"';
    } else if (i === 2) {
      result += ', "Boop!"';
    } else if (i === 1) {
      result += ', "Beep"';

    //Line here was to help fill out arguement if prrevious statements were false. Commenting this line gives closer desired output of goal. 

    // } else if (/[987654]/.test(i.toString())) {
    //   result += ', ' + i;
    
  
  } else if (/[01]/.test(i.toString())) {
      result += ', "Beep!"';
    }
  }
  return result;
}
