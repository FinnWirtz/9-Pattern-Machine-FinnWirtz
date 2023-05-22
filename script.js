// Check what input boxes say
// When submit is clicked start function
const columns = document.getElementById("columns");
const rows = document.getElementById("rows")
const button = document.getElementById("box")
const colorchoice = document.getElementById("colorchoice")
const grid = document.getElementById("grid")

function makeboxes (){
  //loop
makeboxes.innerHTML = '';
const numrows = rows.value;
const numcolumns = columns.value;
console.log(numrows, numcolumns);
const newcolor = colorchoice.value;
for (let i=0; i < numrows; i++) {
  let newrow = document.createElement('div');
    newrow.classList.add('row');
    newrow.setAttribute('id',`row${i}`);
    grid.appendChild(newrow);
 
    for (let j=0; j < numcolumns; j++) {
      let newbox = document.createElement('div');
      newbox.classList.add('box');
      newbox.setAttribute('id',`box0${i}${j}`);
      newrow.appendChild(newbox);
      newbox.addEventListener("click", changecolor)
      newbox.style.backgroundColor = newcolor;
      newbox.addEventListener("mouseover", changecolor)
      newbox.addEventListener("touchmove", changecolor)
    }
  }
 
}
function changecolor (event){
  const newcolor = colorchoice.value
  if (event.type === "click"|| (event.type === "mouseover"&& event.buttons === 1)  || (event.type === "touchmove")){
  event.target.style.backgroundColor = newcolor;
  }
}
// make another function that changes boxes to selected color  

// take inputs from the user and store them

// add event listener to submit button so that it can be re submitted as may times as it needs to be
button.addEventListener("click" , makeboxes  )