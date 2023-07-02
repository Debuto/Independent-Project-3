document.getElementById('numberForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const numberInput = document.getElementById('number').value;
  const outputDiv = document.getElementById('output');
  const result = numberDetector(Number(numberInput));
  outputDiv.innerText = result;
});

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
    } else if (/[456789]/.test(i.toString())) {
      result += ', ' + i;
    } else if (/[01]/.test(i.toString())) {
      result += ', "Beep!"';
    }
  }
  return result;
}
