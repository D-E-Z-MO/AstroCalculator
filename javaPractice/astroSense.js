class Calculator {
  constructor(previousOperatorTextElement, currentOperatorTextElement) {
    this.previousOperatorTextElement = previousOperatorTextElement
    this.currentOperatorTextElement = currentOperatorTextElement
  }
}

//variables needed for placement
const symbolButtons = document.querySelectorAll(`[data-symbol]`)
const operators = document.getElementsByClassName('operation')
const equalOperator = document.querySelector(`[data-equal-operation]`)
const resetOperator = document.querySelector(`[data-reset-operation]`)
const previousOperatorTextElement = document.querySelector(`[data-previous-operator]`)
const currentOperatorTextElement = document.querySelector(`[data-current-operator]`)

// const calculator = new Calculator(previousOperatorTextElement, currentOperatorTextElement)


switch (operators) {
  case "➕": function add(num, num1) {
    return num + num1;
  };
    break;
  case "➖": function sub(num, num1) {
    return num - num1;
  };
    break;
  case "✖️": function multi(num, num1) {
    return num * num1;
  };
    break;
  case "➗": function divid(num, num1) {
    return num / num1;
  };
    break;
};


function accumulate(list, operator) {
  return list.reduce(operations[operator]);
}


const array1 = ["♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️"]

array1.forEach((str, i) => {
  const button = document.createElement('button')
  // 
  button.classList.add('button-class')
  button.innerHTML = str

  button.addEventListener('click', (e) => {
    const p = document.createElement('p')
    p.innerText = str
    p.style.color = 'white'
    p.style.cursor = 'pointer';
    p.style.border = 'solid black';
    p.style.outline = 'none';
    p.style.backgroundColor = 'transparent'
    const parent = document.getElementsByClassName('screen')[0]
    parent.appendChild(p)

    let num;
    let num1;

    switch (e.target.innerHTML) {
      case "♎️":
        num = 6;
        num1 = 6
        break;
      case "♏️":
        num = 6;
        num1 = 6
        break;
      case "♐️":
        num = 6;
        num1 = 6
        break;
      case "♋️":
        num = 4;
        num1 = 4;
        break;
      case "♌️":
        num = 4;
        num1 = 4;
        break;
      case "♍️":
        num = 4;
        num1 = 4;
        break;
      case "♈️":
        num = 2;
        num1 = 2;
        break;
      case "♉️":
        num = 2;
        num1 = 2;
        break;
      case "♊️":
        num = 2;
        num1 = 2;
        break;
      case "♑️":
        num = 8;
        num1 = 8;
        break;
      case "♒️":
        num = 8;
        num1 = 8;
        break;
      case "♓️":
        num = 8;
        num1 = 8;
        break;
      default: console.log(`Click a sign!`);
    }
    console.log(num)
  })

  if (i <= 2) {
    const parent = document.getElementById('1')
    parent.appendChild(button)
  } else if (i <= 5) {
    const parent = document.getElementById('2')
    parent.appendChild(button)
  } else if (i <= 8) {
    const parent = document.getElementById('3')
    parent.appendChild(button)
  } else {
    const parent = document.getElementById('4')
    parent.appendChild(button)

  }
})



// symbolButtons.forEach((button, i) => {
//   button.addEventListener(`click`, ((val) => {
//     return (e) => {
//       console.log(val)
//       console.log(e)
//     }
//   })(array1[i]))
//   button.addEventListener(`click`, (symbol) => {

// //Each symbol's value

// )
// }) 