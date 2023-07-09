window.addEventListener('load', function() {
  document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numberInput = document.getElementById('number').value;
    const outputDiv = document.getElementById('output');
    const result = numberDetector(Number(numberInput));
    outputDiv.innerText = result;
  });p

  function numberDetector(input) {
    let result = '';
    for (let i = 0; i <= input; i++) {
      if (i === 0) {
        result += i;
      } else if (String(i).includes('3')) {
        result += ', "Won\'t you be my neighbor?"';
      } else if (String(i).includes('2')) {
        result += ', "Boop!"';
      } else if (String(i).includes('1')) {
        result += ', "Beep"';
      }
    }
    return result;
  }
})