const errorIcon = document.querySelectorAll('.input-field svg')
const inputs = Array.from(document.querySelectorAll('input'));

function liveCheckValidInput() {
    for (const input of inputs) {
            if (!input.checkValidity() && document.activeElement.id == input.id) {
                errorIcon[inputs.indexOf(input)].classList.add('invalid')
            }
        else if (input.checkValidity() && document.activeElement.id == input.id) {
            errorIcon[inputs.indexOf(input)].classList.remove('invalid')
        }
    }
}