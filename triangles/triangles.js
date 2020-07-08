/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
    size >= 2 &&
    size <= 50);
}

// const AOK = validateEdge(a); //true or false
// const BOK = validateEdge(b); //true or false

/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;

  let aOk = validateEdge(a); //true or false
  let bOk = validateEdge(b); //true or false

  let aMsg = aOk ? "" : "Invalid!";
  let bMsg = bOk ? "" : "Invalid!";

  if (aOk && bOk){
    document.getElementById("msg").innerHTML = printHypotenuseAndArea(a, b);
  }

  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;
}

function calculateHypotenuse(a, b){
  let hypot = Math.floor(Math.sqrt(a * a + b * b));
  
  return hypot;  
}

function printHypotenuseAndArea(a,b){
  let area = calculateArea(a, b);
  let hypot = calculateHypotenuse(a,b);
  
  let msg = "";
  if (a && b) {
    // let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
    // let msg = "";
    if (area > 50) {
      msg += ` That's a really big triangle!`;
    } else {
      msg += `Hypotenuse is ${hypot} and area is ${area}.`;
    };
  };
  return msg;
}

function calculateArea(a, b){
  if (a && b) return a * b / 2;
}


// expect(getResultsFromSideLengths(3, 4)).toEqual(
//   {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});
//   
function getResultsFromSideLengths(a,b){
  let message = printHypotenuseAndArea(a, b);

  let aOk = validateEdge(a); //true or false
  let bOk = validateEdge(b); //true or false

  let { aMsg: aOk, bMsg: bOk, msg: message }
}