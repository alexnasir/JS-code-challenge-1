
// (to detemine student grade the code below will output grade according to the input inserted)
function grades(mark) {
  if (mark > 79) {
    return "A";
  } else if (mark >= 60) {
    return "B";
  } else if (mark >= 49) {
    return "C";
  } else if (mark >= 40) {
    return "D";
  } else {
    return "E";
  }
}
// promts the user to input students mark so that it can be graded
function input() {
  let mark = prompt("Student mark (0-100):");
  mark = parseFloat(mark);
  if (!isNaN(grades) && mark >= 0 && mark <= 100) {
    let grade = (grades(mark));
    alert(`Grade: ${grades}`);
  } else {
    alert("error message: NOT VALID!!!");// appears when the mark is not between 0 to 100
  }
}

console.log(input); //callingback the function

