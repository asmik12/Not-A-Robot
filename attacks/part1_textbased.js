let attempts = 0;

function tryInput() {
    attempts++;
    console.log(`Attempt ${attempts}: Trying input...`);

    // Locate the elements
    const captchaTextElement = document.querySelector('div > span');
    const inputField = document.querySelector('input[type="text"]');
    const submitButton = document.querySelector('button');

    if (captchaTextElement && inputField && submitButton) {
        // Get the CAPTCHA text
        const captchaText = captchaTextElement.textContent.trim();
        console.log(`Detected CAPTCHA: ${captchaText}`);

        // Simulate user input by setting value and triggering React's onChange
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            'value'
        ).set;
        nativeInputValueSetter.call(inputField, captchaText);

        const inputEvent = new Event('input', { bubbles: true });
        inputField.dispatchEvent(inputEvent);

        // Click the submit button
        submitButton.click();
    } else {
        console.error("One or more elements not found. Check your selectors.");
        clearInterval(retryInterval); // Stop attempts
    }
}

// Retry every second
const retryInterval = setInterval(tryInput, 1000);