const inputFields = document.querySelectorAll(".input-field");
const form = document.querySelector("form")

inputFields.forEach(inputField => {
    inputField.firstElementChild.addEventListener('input', (event) => {
        if (event.target.validity.valid) {
            isValid(event.target)
        }
        else {
            showInvalid(event.target)
        }
    })
    inputField.firstElementChild.addEventListener('blur', (event) => {
        if (event.target.validity.valid) {
            isValid(event.target)
        }
        else {
            showInvalid(event.target)
        }
    })
})

form.addEventListener('submit', (event) => {
    inputFields.forEach(inputField => {
        if (!inputField.firstElementChild.validity.valid) {
            showInvalid(inputField.firstElementChild)
            event.preventDefault()
        }
    })
})

function isValid(validField) {
    let errorText = validField.nextElementSibling;
    errorText.innerHTML = "";
    validField.parentElement.classList.remove("invalid");
    errorText.classList.remove("invalid");
    validField.parentElement.classList.remove("invalid-large")
}

function showInvalid(invalidField) {
    let errorText = invalidField.nextElementSibling
    invalidField.parentElement.classList.add("invalid");
    errorText.classList.add("invalid");

    if (invalidField.validity.valueMissing) {
        errorText.classList.remove("invalid-large");
        invalidField.parentElement.classList.remove("invalid-large")
        errorText.innerHTML = `${invalidField.placeholder} cannot be empty`;
    }
    else if (invalidField.validity.patternMismatch && invalidField.id != 'password') {
        let allowedChar = new RegExp(invalidField.pattern)
        let invalidStr = invalidField.value
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
    else if (invalidField.validity.patternMismatch && invalidField.id == 'password') {
        invalidField.parentElement.classList.add("invalid-large");
        errorText.classList.add("invalid-large");
        errorText.innerHTML = `Password must contain at least: 
        <ul>
            <li>8 characters</li>
            <li>one uppercase character</li>
            <li>one number</li>
            <li>one special character</li>
        </ul>`
    }

    else if (invalidField.validity.typeMismatch && invalidField.id == 'email-address') {
        errorText.innerText = "Please enter a valid email address"
    }

}
