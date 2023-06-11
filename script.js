const inputField = document.getElementById('inputField');
const selectOption = document.getElementById('selectOption');
const submitButton = document.getElementById('submitButton');
const outputField = document.getElementById('outputField');

submitButton.addEventListener('click', () => {
    const inputValue = textInput.value.toLowerCase().split("");
    const selectedOption = selectOption.value;
    let outputValue = '';

    if (selectedOption === 'option1') {
        outputValue = processOption1(inputValue);
    } else if (selectedOption === 'option2') {
        outputValue = processOption2(inputValue);
    } else if (selectedOption === 'option3') {
        outputValue = processOption3(inputValue);
    }

    outputField.textContent = outputValue;
});

function processOption1(inputValue) {
    return inputValue;
    // if (inputValue.length >= 5) {
    //     return 'El campo es más largo que 5';
    // } else {
    //     return 'El campo es más corto que 5';
    // }
}

function processOption2(inputValue) {
    // Lógica para la opción 2 usando el valor del input
    return 'Resultado de la opción 2 con ' + inputValue;
}

function processOption3(inputValue) {
    // Lógica para la opción 3 usando el valor del input
    return 'Resultado de la opción 3 con ' + inputValue;
}


