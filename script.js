function splitString() {
  var inputString = document.getElementById("string").value;

  if (document.getElementById("comma").checked) {
    var delimiter = ",";
  }
  else if (document.getElementById("space").checked) {
    var delimiter = " ";
  }
  else if (document.getElementById("other").checked) {
    var delimiter = document.getElementById("otherDelimiter").value;
  }

  if (document.getElementById("trimYes").checked) {
    var splitString = inputString.split(delimiter).map(element => element.trim());
  }
  else if (document.getElementById("trimLeft").checked) {
    var splitString = inputString.split(delimiter).map(element => element.trimLeft());
  }
  else if (document.getElementById("trimRight").checked) {
    var splitString = inputString.split(delimiter).map(element => element.trimRight());
  }
  else if (document.getElementById("trimNo").checked) {
    var splitString = inputString.split(delimiter);
  }

  if (document.getElementById("delimiterYes").checked) {
    var output = splitString.join(delimiter + '\n');
  }
  else if (document.getElementById("delimiterNo").checked) {
    var output = splitString.join('\n');
  }
  document.getElementById("output").value = output;
}

let theme = "light";
function toggleTheme() {
  if (document.getElementById("switch-knob").style.left === "0px") {
    document.getElementById("switch-knob").style.left = "25px";
    document.getElementById("theme").href = "dark.css";
    theme = "dark";
  } else {
    document.getElementById("switch-knob").style.left = "0px";
    document.getElementById("theme").href = "light.css";
    theme = "light";
  }
}