let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
}




let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// Get the form element
const loginForm = document.querySelector('#loginForm');

// Add submit event listener
loginForm.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear any previous error messages
    clearErrors();

    // Validation flag
    let isValid = true;

    // Email validation
    const email = document.querySelector('#email').value;
    const emailError = document.querySelector('#emailError');
    if (email === '') {
        emailError.textContent = "Email field cannot be empty.";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    const password = document.querySelector('#password').value;
    const passwordError = document.querySelector('#passwordError');
    if (password === '') {
        passwordError.textContent = "Password field cannot be empty.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // If valid, display success message and clear fields
    if (isValid) {
        alert("Login successful!");
        // Clear the fields after successful validation
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    } else {
        console.log('Validation failed');
    }
});

// Function to validate email format with precise regular expression
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Function to clear error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) {
        error.textContent = '';
    });
}



/*signup form validation*/
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Get the form element
    const signupForm = document.querySelector('#signupForm');

    // Check if form is correctly selected
    if (!signupForm) {
        console.error('Form not found');
        return;
    }

    // Add submit event listener
    signupForm.addEventListener('submit', function(event) {
        console.log('Form submitted');
        // Prevent form submission
        event.preventDefault();

        // Clear any previous error messages
        clearErrors();

        // Validation flag
        let isValid = true;

        // Get form field values
        const firstName = document.querySelector('#firstName').value.trim();
        const lastName = document.querySelector('#lastName').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const nic = document.querySelector('#nic').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const confirmPassword = document.querySelector('#confirmPassword').value.trim();

        // Validate first name
        const firstNameError = document.querySelector('#firstNameError');
        if (firstName === '') {
            firstNameError.textContent = "First name is required.";
            isValid = false;
        }

        // Validate last name
        const lastNameError = document.querySelector('#lastNameError');
        if (lastName === '') {
            lastNameError.textContent = "Last name is required.";
            isValid = false;
        }

        // Validate phone number
        const phoneError = document.querySelector('#phoneError');
        if (phone === '') {
            phoneError.textContent = "Phone number is required.";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) { // Example: should be exactly 10 digits
            phoneError.textContent = "Phone number must be 10 digits.";
            isValid = false;
        }

        // Validate NIC
        const nicError = document.querySelector('#nicError');
        if (nic === '') {
            nicError.textContent = "NIC is required.";
            isValid = false;
        }

        // Validate email
        const emailError = document.querySelector('#emailError');
        if (email === '') {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate password
        const passwordError = document.querySelector('#passwordError');
        if (password === '') {
            passwordError.textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long.";
            isValid = false;
        }

        // Validate confirm password
        const confirmPasswordError = document.querySelector('#confirmPasswordError');
        if (confirmPassword === '') {
            confirmPasswordError.textContent = "Confirm password is required.";
            isValid = false;
        } else if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        // If valid, submit the form (or handle submission via JavaScript)
        if (isValid) {
            alert("Form submitted successfully!");
            // Uncomment below to submit the form if action is defined
            // signupForm.submit();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to clear error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(error) {
            error.textContent = '';
        });
    }
});



















