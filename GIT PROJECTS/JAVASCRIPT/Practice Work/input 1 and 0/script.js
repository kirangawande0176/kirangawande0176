// have to take 3 by 3 squares
// 1 for select and 0 for Not
// ones the square is done 3x3
// then have to select and it turns red
// onces all active sqaures are selected have to de select in the order as they are selected

// once done this can give 1 or 0 command

// very imp regex code

// s = "'1', ' ', '0', ' ', '1', ' ', '0', ' ', '1', ' ', '1' ";
// let removeS=s.replace(/[',\s]/g, "");
// console.log( removeS );






function makingCube() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "col bg-warning border border-black");
  newDiv.innerHTML = "1";
  document.getElementById("gameBox").lastChild.appendChild(newDiv);
}

function makingBlankcube() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "col bg-white");
  newDiv.innerHTML = "0";
  document.getElementById("gameBox").lastChild.appendChild(newDiv);
}

function input() {
  let input = prompt("0 and 1 only ");
  console.log(input);
  console.log(typeof input);
  if (input == "5") {
    alert("done");
    return;
  } else if (input == "") {
    alert("invalid");
  } else {
    input2 = input.match(/[0-1]/g);
    console.log(input2);

    let newRow = document.createElement("div");
    newRow.setAttribute("class", "row bg-info");
    newRow.setAttribute("id", "row");
    let mainBox = document.getElementById("gameBox");
    mainBox.appendChild(newRow);

    input2.forEach((value) => {
      if (value === "1") {
        makingCube();
      } else if (value === "0") {
        makingBlankcube();
      }
    });
  }
}


function reset(){
  window.location.reload();
}


// function selection (){
//   let Clicked = addEventListener("click","bg-dark");
// }