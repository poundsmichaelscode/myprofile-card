// Update UTC Time
function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    if (utcTimeElement) {
        const now = new Date();
        utcTimeElement.textContent = `UTC Time: ${now.toUTCString()}`;
    }
}
updateTime();
setInterval(updateTime, 1000);

// Form Validation
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");
        const successMsg = document.getElementById("test-contact-success");

        let valid = true;

        // Clear previous messages
        document.querySelectorAll(".error").forEach(err => err.textContent = "");
        successMsg.textContent = "";

        if (!name.value.trim()) {
            document.getElementById("test-contact-error-name").textContent = "Full name is required.";
            valid = false;
        }

        if (!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
            document.getElementById("test-contact-error-email").textContent = "Enter a valid email address.";
            valid = false;
        }

        if (!subject.value.trim()) {
            document.getElementById("test-contact-error-subject").textContent = "Subject is required.";
            valid = false;
        }

        if (!message.value.trim() || message.value.length < 10) {
            document.getElementById("test-contact-error-message").textContent = "Message must be at least 10 characters.";
            valid = false;
        }

        if (valid) {
            successMsg.textContent = "Thank you! Your message has been successfully sent.";
            form.reset();
        }
    });
}
