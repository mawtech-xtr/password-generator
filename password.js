// these codes helps you to generate a password
function generatePassword(length, includeLowercase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%&-./?";

    let allowedChars = "";
    let password = "";

    // this part allows the characters set
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUpperCase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    // this part also check the if length is valid and allowedChars is not empty
    if (length <= 0) {
        return `Password length must be at least 1`;
    }
    if (allowedChars.length === 0) {
        return `At least one character category must be selected`;
    }

    // this part generates your password for you ma nigga
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Adds an eventListener to the generate the password button
document.getElementById("generateButton").addEventListener("click", function () {
    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUpperCase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    // this part generates the password
    const password = generatePassword(
        parseInt(passwordLength),
        includeLowercase,
        includeUpperCase,
        includeNumbers,
        includeSymbols
    );

    // this part also displays the generated password
    document.getElementById("password").querySelector(".static-password").textContent = password;
});
