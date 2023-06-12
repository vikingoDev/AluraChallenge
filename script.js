const inputField = document.getElementById('textInput');
const selectOption = document.getElementById('selectOption');
const submitButton = document.getElementById('submitButton');
const outputField = document.getElementById('outputField');

submitButton.addEventListener('click', () => {
    const inputValue = inputField.value.toLowerCase().split("");
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
    let convertedText = '';
    for (var i = 0; i < inputValue.length; i++) {
        var charCode = inputValue[i].charCodeAt(0);
        convertedText += String.fromCharCode(charCode + 3);
        // console.log(`Código ASCII de ${inputValue[i]}: ${charCode}. Código encriptado: ${charCode+3}`);
    }
    return convertedText;
}

function processOption2(inputValue) {
    // Lógica para la opción 2 usando el valor del input
    return 'Resultado de la opción 2 con ' + inputValue;
}

function processOption3(inputValue) {
    // Lógica para la opción 3 usando el valor del input
    return 'Resultado de la opción 3 con ' + inputValue;
}


