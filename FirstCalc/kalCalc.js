// работает с цифрами 🔢

// находим все элементы btn
const buttons = document.querySelectorAll(".btn");
const funcButtons = document.querySelectorAll(".funBtn");
const equal = document.querySelector(".eqw");

let firstNum = " ";
let secondNum=" ";
let calculation = [0,"@"];

// функция при нажатии btn
const handleClick = (event) => {
    document.querySelector(".screen").textContent += `${event.target.innerHTML}`;
    calculation[1] != "@" ? secondNum += event.target.innerHTML : firstNum += event.target.innerHTML;
    calculation[0] = firstNum;
    calculation[2] = secondNum;
    
};
// функция при операциях 
const operation = (event) => {
    if (calculation[1] != "@") {
        equality();
    }
    console.log(event.target.innerHTML);
    document.querySelector(".screen").textContent += ` ${event.target.innerHTML} `;
    calculation[0] = firstNum;
    calculation[1] = event.target.innerHTML;
};

// функция при равно
const equality = () => {
    calculation[2] = secondNum;
    calculation[3] = calcAlgirutm(calculation);
    firstNum = calculation[3];
    document.querySelector(".screen").textContent = `${firstNum}`;
    console.log(calculation);
    calculation[2] =" ";
    calculation[0] = calculation[3];
    calculation[1] = "@";
    secondNum=" ";
    reset = 1;
    console.log(calculation);
};

function calcAlgirutm(arr) {
    let num1 = parseFloat(arr[0])
    let num2 = parseFloat(arr[2])
     console.log(`${num1} и ${num2}`);
    switch(arr[1]) {
        case '+' : return num1 + num2;    
        case "-" : return num1 - num2; 
        case "*" : return num1 * num2;
        case "÷" : return parseFloat((num1 / num2).toFixed(9));
    }
    console.log(calculation);
}

//перебиварем массив кнопок и вызываем handleClick при нажатии 
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

//перебиварем массив спец кнопок и вызываем operation при нажатии 
funcButtons.forEach(button => {
    button.addEventListener("click", operation);
});

//ожидаем нажатия равно
equal.addEventListener('click', equality);

//Вывод ответа на экран 🖥️ из переменной answer
const answerOnScreen = () => {
    document.querySelector(".screen").textContent = answer;
}



