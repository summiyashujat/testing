function checkAge() {
    let c = prompt("Hey, what's your age?");
    c = Number.parseInt(c);
    
    if (isNaN(c) || c < 0) {
        alert("This is not a valid age");
        // Redirect to Google
        window.location.href = 'https://www.google.com';
    } else if (c < 9) {
        alert("This is not a valid age, you cannot use this website");
        // Redirect to Google
        window.location.href = 'https://www.google.com';
    } else if (c >= 9 && c < 40) {
        alert("You are eligible to use the website");
        // Continue to load the website
    } else {
        alert("You are outside the eligible age range for this website");
        // Redirect to Google
        window.location.href = 'https://www.google.com';
    }
}

// Run the age check function when the page loads
window.onload = checkAge;

