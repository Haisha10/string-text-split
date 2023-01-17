function splitString() {
    var inputString = document.getElementById("string").value;
    var delimiter = "";
    var keepDelimiter = false;
    if (document.getElementById("commaSpace").checked) {
      delimiter = /[\s,]+/g;
      if (document.getElementById("yes").checked) {
        var output = inputString.replace(delimiter, '$&\n');
      } else {
        var output = inputString.replace(delimiter, '\n');
      }
    } else if (document.getElementById("comma").checked) {
      delimiter = ",";
      var splitString = inputString.split(delimiter);
      var output = splitString.join('\n');
    } else if (document.getElementById("space").checked) {
      delimiter = " ";
      var splitString = inputString.split(delimiter);
      var output = splitString.join('\n');
    } else if (document.getElementById("other").checked) {
      delimiter = document.getElementById("otherDelimiter").value;
      var splitString = inputString.split(delimiter);
      var output = splitString.join('\n');
    }
    if (document.getElementById("yes").checked) {
      keepDelimiter = true;
    }
    document.getElementById("output").value = output;
}