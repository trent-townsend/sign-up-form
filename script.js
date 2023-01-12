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
        event.target.parentElement.classList.add("invalid");
        errorText.classList.add("invalid");

        if (targetID == "first-name") {
            if (event.target.textLength == 0) {
                errorText.innerHTML = "First Name cannot be empty";
            }
            else if (event.target.validity.patternMismatch) {
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
        }

        if (targetID == "last-name") {
            if (event.target.textLength == 0) {
                errorText.innerHTML = "Last Name cannot be empty";
            }
            else if (event.target.validity.patternMismatch) {
                errorText.innerHTML = " Contains invalid character";
            }
        }

        if (targetID == "email-address") {
            errorText.innerHTML = "Please enter a valid email address";
        }

    }

    else if (event.target.checkValidity()) {
        event.target.parentElement.classList.remove("invalid");
        errorText.classList.remove("invalid");
    }
}

function focusValidation(event) {
    let errorText = event.target.nextElementSibling
    if (event.target.textLength == 0) {
        event.target.parentElement.classList.add("invalid");
        errorText.classList.add("invalid")
        errorText.innerHTML = "Field is required"
    }
}