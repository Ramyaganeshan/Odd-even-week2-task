function Validate(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57) || x == 44) {
    return true;
  }
  return false;
}

function seperateOddEven() {
  let even = [];
  let odd = [];

  let inputValue = document.getElementById("textInput1").value;
  inputValue = inputValue ? inputValue.split(",") : [];

  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] % 2 == 0) {
      even.push(inputValue[i]);
    } else {
      odd.push(inputValue[i]);
    }
  }

  document.getElementById("output").innerHTML = even;
  document.getElementById("output2").innerHTML = odd;
}
