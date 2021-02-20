var arr = [6, 4, 4, 2, 2, 4, 2];

var countUniversalArrays = function (input) {
  var count = 0;
  var size = input.shift();
  for (var i = 0; i < size; i++) {
    var newArr = [];
    var differentNumberDetected = false;
    var countX = 0;
    var countY = 0;

    for (var j = i; j < size; j++) {
      newArr.push(input[j]);

      if (newArr.length > 1 && input[j] !== newArr[newArr.length - 2]) {
        if (!differentNumberDetected) {
          differentNumberDetected = true;
        } else {
          continue;
        }
      }

      if (!differentNumberDetected) {
        countX++;
      } else {
        countY++;
      }

      if (countX == countY) {
        console.log(newArr);
        count++;
      }
    }
  }

  return count;
};

// merged to above to avoid another loop
var isUniversalArray = function (subArray) {
  var differentNumberDetected = false;
  var countX = 0;
  var countY = 0;
  for (var i = 0; i < subArray.length; i++) {
    if (i > 0 && subArray[i] !== subArray[i - 1]) {
      if (!differentNumberDetected) {
        differentNumberDetected = true;
      } else {
        return 0;
      }
    }

    if (!differentNumberDetected) {
      countX++;
    } else {
      countY++;
    }
  }

  return differentNumberDetected && countX == countY ? 1 : 0;
};

console.log(countUniversalArrays(arr));
