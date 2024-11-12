// Example: Form Validation (ensure the email field is not empty before submitting)
document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.value) {
      alert("Please enter a valid email.");
      event.preventDefault();
    }
  });
  