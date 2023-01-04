const errorIcon = document.querySelectorAll('.input-field svg')
const inputsFields = document.querySelectorAll('input')
const submitBtn = document.getElementById("submitBtn")
const inputsArray = Array.from(document.querySelectorAll('input'));


submitBtn.addEventListener("click", submitValidation)

inputsFields.forEach(inputField => {
    inputField.addEventListener('blur', unselectedCheckValidity);
    inputField.addEventListener('keyup', liveCheckValidInput);
})

//Validate inputs on hitting submission button
function submitValidation() {
    event.preventDefault();

    inputsFields.forEach(inputField => {
        if (!inputField.checkValidity()) {
            console.log(`Invalid input in ${inputField.id}`)
        }

    })
}

//Validate inputs when leaving an input field
function unselectedCheckValidity() {
    if (!document.getElementById(event.target.id).checkValidity()){
        document.querySelector(`#${event.target.id} + svg`).classList.add('invalid')
    } else if (document.getElementById(event.target.id).checkValidity()){
        document.querySelector(`#${event.target.id} + svg`).classList.remove('invalid')
    }
}

//Validate inputs live while typing
function liveCheckValidInput() {
    for (const input of inputsArray) {
            if (!input.checkValidity() && document.activeElement.id == input.id) {
                errorIcon[inputsArray.indexOf(input)].classList.add('invalid')
            }
        else if (input.checkValidity() && document.activeElement.id == input.id) {
            errorIcon[inputsArray.indexOf(input)].classList.remove('invalid')
        }
    }
} 