const nums = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operator') 
const clearBtns = document.querySelectorAll('.clearbtn') 
const result = document.getElementById('btn-show-result')
const display = document.getElementById('input-display')
const decimale = document.getElementById('btn-decimal') 
const howWork = document.getElementById('btn-how')
let MemoryCurrentNumber = 0
let MemoryNewNumber = false 
let MemoryPendingOperation = ''
const operationsList = document.getElementById('operationsList')


for (let i=0; i<nums.length; i++) {
    const num = nums[i];

    num.addEventListener('click', function(e) {
        numberPress(e.target.outerText);
    })
};

for (let i=0; i<operators.length; i++) {
    const operator = operators[i];

    operator.addEventListener('click', function(e) {
        operation(e.target.outerText);
    })
};

for (let i=0; i<clearBtns.length; i++) {
    const clearBtn = clearBtns[i];
    
    clearBtn.addEventListener('click', function(e) {
        clear(e.target.id);
    });
}

decimale.addEventListener('click', point);

howWork.addEventListener('click', how);



function numberPress(num) {
   if (MemoryNewNumber) {
    display.value = num;
    MemoryNewNumber = false;
   } else {
        if (display.value === '0') {
            display.value = num;
        } else {
            display.value += num;
        };
    };
};

function operation(op) {
   let localOperationMemory = display.value

            if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;  
    } else {
        MemoryNewNumber = true;
    } if (MemoryPendingOperation === '+') {
        MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        } 
        
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op
};

function point(argument) {
   let localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        };
    };

    display.value = localDecimalMemory;
    console.log('Click decimal button')
};

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
            display.value = '0';
            MemoryNewNumber = true;
            MemoryCurrentNumber = 0;
            MemoryPendingOperation = '';
    };
    console.log('Click' + id + 'button')
};

function how(argument) {

    for (let i=0; i<=operators.length; i++) {

         let newLi = document.createElement('li');
         let  operationText = operators[i].value;
         newLi.innerText = operationText;
         operationsList.appendChild(newLi);
    } 

    console.log('Click howWork button');
};
