// add solution here
<<<<<<< HEAD
function theBeatlesPlay(musArr, instrArr) {
  var empty = [];
  for (let i = 0; i < musArr.length; i++) {
    let phrase = musArr[i] + " plays " + instrArr[i];
=======
function the BeatlesPlay(musArr, instrArr) {
  var empty = [];
  for (let i = 0; i < musArr.length; i++) {
    let phrase = musArr[i] instrArr[i];
>>>>>>> d94adb7f6218303b14427bc251e48ef75781d931
    empty.push(phrase);
  }
  return empty;
}

function johnLennonFacts(arr) {
  var counter = 0;
  while (counter < arr.length) {
    arr[counter] = arr[counter] + "!!!";
    counter++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return newArr;
}