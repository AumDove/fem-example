
let screen = document.querySelector('.screen');
let wholeInputArr = [];
let wholeInput = 0;
let tempInputArr = [];
let result = wholeInputArr[0];
let prevOperator;

// gets user input
function btnClicked(btnPressed) {
    // if button IS A NUMBER
    if (!isNaN(btnPressed)) {  
        isANumber(btnPressed);
    }
    // if button is NOT A NUMBER
    else if (isNaN(btnPressed)) {
        screen.innerText = 0;
        notNumber(btnPressed);
    }
    return btnPressed;
};

function isANumber(btnPressed) {
    tempInputArr.push(parseInt(btnPressed));
     // goes to line 20 
    console.log(`${btnPressed}`);
    // assigns wholeInput of the array joined into one string
    wholeInput = parseInt(tempInputArr.join(''));
    console.log(`${wholeInput}`);
    
    // sets the innerText of the screen to the joined string and changes it to a number
    screen.innerText = parseInt(wholeInput);
    return wholeInput;
};

// RUNS EVERY TIME BUTTON CLICKED IS NOT A NUMBER
function notNumber(btnPressed) {
    // CLEAR BUTTON
    if (btnPressed === 'C') {
        tempInputArr = [0];
        wholeInput = 0;
        wholeInputArr = [];
        console.log(`I clear stuff`);
    }
    // DELETE BUTTON
    else if (btnPressed === '←') {
        // if array.length >= 1
        if ((tempInputArr.length <= 1) || (tempInputArr === isNaN)) {
            tempInputArr = [0];
            screen.innerText = 0;
         }
        else if (tempInputArr.length >= 1) {
            tempInputArr.pop();
            // assigns wholeInput of the array joined into one string
            wholeInput = tempInputArr.join('');
            // sets the innerText of the screen to the joined string and changes it to a number
            screen.innerText = parseInt(wholeInput);
            console.log(`I delete stuff`);
        }
    }
    // EQUALS
    else if (btnPressed === '=') {
        wholeInputArr.push(wholeInput);
        console.log(`PREVIOUS OPERATOR LINE 73: ${prevOperator}`);
        calcNow(prevOperator);
        screen.innerText = result;
        wholeInputArr.shift();
        wholeInputArr.push(result);
    }
    // OPERATOR BUTTON
    else if (btnPressed === '÷','×', '-', '+' ) {
        prevOperator = btnPressed;
        console.log(`PREVIOUS OPERATOR: ${prevOperator}`);
        wholeInputArr.push(wholeInput);
        console.log(`WHOLE INPUT ARRAY: ${wholeInputArr}`);
        tempInputArr = [];
        console.log(`TEMP INPUT ARRAY: ${tempInputArr}`);
        calcNow(prevOperator);
    }
    return btnPressed;
};
function calcNow(prevOperator) {
    screen.innerText = 0;
    // DIVIDE BUTTON
    if (prevOperator === '÷') {
        result = wholeInputArr[0] / wholeInputArr[1];
        console.log(`I divide stuff`);
    }
    // MULTIPLY BUTTON
    else if (prevOperator === '×') {
        result = wholeInputArr[0] * wholeInputArr[1];
        console.log(`I multiply stuff`);
    }
    // SUBTRACT BUTTON
    else if (prevOperator === '-') {
        result = wholeInputArr[0] - wholeInputArr[1];
        console.log(`I subtract stuff`);
    }
    // ADD BUTTON
    else if (prevOperator === '+') {
        result = wholeInputArr[0] + wholeInputArr[1];
        console.log(`I add stuff`);
    }
    console.log(`RESULT: ${result}`);
    return result;
}

function equals(result) {
    screen.innerText = result;
}

// starts the app
function init() {
    document.querySelector('.buttons-box').addEventListener('click', function(event) {
        btnPressed = btnClicked(event.target.innerText);
    });
};
init();







