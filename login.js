// Dropdown: Toggle without arrow
  document.getElementById('countryCodeBtn').addEventListener('click', function () {
    const dropdown = new bootstrap.Dropdown(this);
    dropdown.toggle();
  });

  function setCountryCode(code) {
    document.querySelector('#countryCodeBtn').childNodes[0].nodeValue = code + ' ';
  }

  function openOTP() {
    console.log('Opening OTP modal...');
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();
    const otpModal = new bootstrap.Modal(document.getElementById('otpModal'));
    otpModal.show();
  }

  // Auto-focus for OTP inputs
  document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".otp-input");
    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });

    // Countdown timer
    let time = 54;
    const timerSpan = document.getElementById("timer");
    const interval = setInterval(() => {
      time--;
      timerSpan.innerText = `00:${time < 10 ? "0" + time : time}s`;
      if (time <= 0) clearInterval(interval);
    }, 1000);
  });