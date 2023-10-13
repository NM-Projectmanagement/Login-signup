/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */




function validateLoginForm() {
    var name = document.getElementById("logName").value;
    var password = document.getElementById("logPassword").value;
    var errorMsg = document.getElementById("errorMsg");

    // Reset error message
    errorMsg.innerHTML = "";

    // Regular expressions for username and password validation
    var usernamePattern = /^[a-zA-Z0-9_]{6,}$/; // Alphanumeric and underscore, at least 6 characters
    var passwordPattern = /^.{8,}$/; // Any character, at least 8 characters
     if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields";
		return false;
	}
     if (!usernamePattern.test(name)) {
        errorMsg.innerHTML = "Username must be alphanumeric and at least 6 characters long.";
        return false;
    }

    else if (!passwordPattern.test(password)) {
        errorMsg.innerHTML = "Password must be at least 8 characters long.";
        return false;
    }
   
 else{
    alert("Successfully logged in");
    return true;
}
}
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("logName").value;
        const password = document.getElementById("logPassword").value;

        

        // Password hashing using SHA-256
        const hashedPassword = sha256(password);

        // In a real application, you should send the username and hashed password to a server for validation.
        // Here, we'll just demonstrate the process.
        alert(`Username: ${username}\nHashed Password: ${hashedPassword}`);
    });

    // Simple SHA-256 hashing function
    
});

