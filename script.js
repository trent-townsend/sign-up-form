const errorIcon = document.querySelectorAll('.input-field svg')
const inputsFields = document.querySelectorAll('input')
const inputsArray = Array.from(document.querySelectorAll('input'));

inputsFields.forEach(inputField => {
    inputField.addEventListener('blur', unselectedCheckValidity);
    inputField.addEventListener('keyup', liveCheckValidInput);
})

function unselectedCheckValidity() {
    if (!document.getElementById(event.target.id).checkValidity()){
        document.querySelector(`#${event.target.id} + svg`).classList.add('invalid')
    } else if (document.getElementById(event.target.id).checkValidity()){
        document.querySelector(`#${event.target.id} + svg`).classList.remove('invalid')
    }
}

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