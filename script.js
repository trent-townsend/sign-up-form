const inputFields = document.querySelectorAll(".input-field");
const errorMessageDivs = document.querySelectorAll(".error-text");

inputFields.forEach(inputField => {
    inputField.addEventListener('keyup', liveValidation);
    inputField.firstElementChild.addEventListener('blur', focusValidation);
})

function liveValidation(event) {
    let errorText = event.target.nextElementSibling;
    let targetID = event.target.id;
    errorText.innerHTML = "";

    if (!event.target.checkValidity()) {
        if (targetID == "password" && event.target.value.length == 0) {
            event.target.parentElement.classList.remove("invalid-large");
            errorText.classList.remove("invalid-large");
        }
        event.target.parentElement.classList.add("invalid");
        errorText.classList.add("invalid");

        if (event.target.value.length === 0) {
            errorText.innerHTML = `${event.target.placeholder} cannot be empty`;
        }

        else {
            if (targetID == "first-name" || targetID == "last-name" && event.target.validity.patternMismatch) {
                let allowedChar = /^[A-Za-z \-,`'.]+/
                let invalidStr = event.target.value
                let invalidChars = []
                for (let i = 0; i < invalidStr.length; i++) {
                    if (!allowedChar.test(invalidStr[i])) {
                        invalidChars.push(invalidStr[i]);
                    }
                }
                if (invalidChars.length == 1) {
                    errorText.innerHTML = `Contains invalid character (${invalidChars.toString()})`;
                }
                else {
                    errorText.innerHTML = `Contains invalid characters (${invalidChars.join(", ")})`;
                }
            }
        
        else if (targetID == "email-address") {
            errorText.innerHTML = "Please enter a valid email address";
        }

        else if (targetID == "password" && event.target.validity.patternMismatch) {
            event.target.parentElement.classList.add("invalid-large");
            errorText.classList.add("invalid-large");
            errorText.innerHTML = "Password must contain at least: <ul><li>8 characters</li><li>one uppercase character</li><li>one number</li><li>one special character</li></ul>"
        }
        
    }
    }
    else if (event.target.checkValidity()) {
        event.target.parentElement.classList.remove("invalid");
        errorText.classList.remove("invalid-large");
        event.target.parentElement.classList.remove("invalid-large")
        errorText.classList.remove("invalid");
    }
}

function focusValidation(event) {
    let errorText = event.target.nextElementSibling
    if (event.target.textLength == 0) {
        event.target.parentElement.classList.add("invalid");
        errorText.classList.add("invalid")
        errorText.innerHTML = `${event.target.placeholder} cannot be empty`;
    }
}