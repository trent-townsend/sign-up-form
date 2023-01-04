const errorIcon = document.querySelectorAll('.input-field svg')
const firstName = document.getElementById('first-name');

console.log(firstName)


function liveCheckValidInput() {
    console.log(firstName.checkValidity())
    if (!firstName.checkValidity()) {
        errorIcon[0].classList.add('invalid');
    }
    else if (firstName.checkValidity()) {
                errorIcon[0].classList.remove('invalid');
            }
        }