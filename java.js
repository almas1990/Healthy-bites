document.getElementById('mealPlanForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById('email').value;
    const message = document.getElementById('formMessage');

    if (validateEmail(email)) {
        message.textContent = 'Thank you for subscribing!';
        message.style.color = '#4CAF50';
        this.reset();
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }
});

// Simple email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}