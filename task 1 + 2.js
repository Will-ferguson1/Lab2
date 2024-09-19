

let x = 200;


function setup() {
  createCanvas(400, 400);
  console.log (x);
  console.log(x + 1);
  let y = (x * 2);
  console.log(y);


  let name = prompt("what is your name?");
  console.log (name);
  let LetterAmount = name.length;
  LetterAmount = Number(LetterAmount)
  console.log(typeof LetterAmount);
  let FirstLetter = name.charAt(0);
  let LastLetter = name.charAt(LetterAmount - 1);
  console.log(FirstLetter);
  console.log(LastLetter);


}


