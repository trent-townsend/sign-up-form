const inputFields = document.querySelectorAll(".input-field");

inputFields.forEach(inputField => {
    inputField.addEventListener('keyup', liveValidation);
    inputField.firstElementChild.addEventListener('blur', focusValidation);
})

function liveValidation(event) {
    if (!event.target.checkValidity()) {
        event.target.parentElement.classList.add("invalid");
    }
    else if (event.target.checkValidity()) {
        event.target.parentElement.classList.remove("invalid");
    }
}

function focusValidation(event) {
    if(event.target.textLength == 0) {
        event.target.parentElement.classList.add("invalid");
    }
}