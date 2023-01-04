const errorIcon = document.querySelectorAll('.input-field svg')
const inputs = Array.from(document.querySelectorAll('input'));

console.log(inputs)

function liveCheckValidInput() {
    for (const input of inputs) {
        if (!input.checkValidity()) {
            errorIcon[inputs.indexOf(input)].classList.add('invalid')
        }
        else if (input.checkValidity()) {
            errorIcon[inputs.indexOf(input)].classList.remove('invalid')
        }
    }
}