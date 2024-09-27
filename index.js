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
function input() {
  let mark = prompt("Student mark (0-100):");
  mark = parseFloat(mark);
  if (!isNaN(mark) && mark >= 0 && mark <= 100) {
    let grade = grades(mark);
    alert(`Grade: ${grade}`);
  } else {
    alert("NOT VALID!!!");
  }
}

console.log(input);
