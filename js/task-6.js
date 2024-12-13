function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const userInput = document.querySelector('input')
const boxes = document.getElementById("boxes")
const createBoxes = () => {
 const newInput = Number(userInput.value)
  if (newInput > 100 || newInput < 1) return 0;
  
  for (let i = 0; i < newInput; i++) {
    const div = document.createElement("div")
    const size = 30 + i * 10;
    div.style.width = `${size}px`
    div.style.height = `${size}px`
   
    div.style.backgroundColor = getRandomHexColor()
  boxes.append(div)
  }
    userInput.value = " ";
 
}

const deleteBoxes = () => {
  boxes.innerHTML = "";
    userInput.value = "";
}


createBtn.addEventListener("click", createBoxes)
destroyBtn.addEventListener("click", deleteBoxes)
