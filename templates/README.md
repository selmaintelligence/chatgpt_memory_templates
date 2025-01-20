# Complex HTML Script for Testing

## HTML Structure with Forms, Animations, and Alerts

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complex HTML Test</title>
    <style>
        /* Basic CSS styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }

        h1 {
            color: #333;
        }

        .animation-box {
            width: 200px;
            height: 200px;
            background-color: #3498db;
            margin: 20px;
            animation: rotateAnimation 4s infinite;
        }

        /* Animation */
        @keyframes rotateAnimation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Form Styling */
        form {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
        }

        input[type="text"], input[type="email"], input[type="number"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            padding: 10px 20px;
            background-color: #2ecc71;
            border: none;
            color: white;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #27ae60;
        }

        .alert-box {
            background-color: #e74c3c;
            color: white;
            padding: 15px;
            border-radius: 4px;
            margin: 10px 0;
            display: none;
        }

        .success {
            background-color: #2ecc71;
        }

        .error {
            background-color: #e74c3c;
        }

        .info {
            background-color: #3498db;
        }

        .fade-out {
            animation: fadeOut 3s forwards;
        }

        @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }

        /* POST/GET Button Styling */
        .post-get-btn {
            background-color: #f39c12;
            padding: 15px;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .post-get-btn:hover {
            background-color: #e67e22;
        }
    </style>
</head>
<body>

<h1>Complex HTML, CSS, and JavaScript Test</h1>

<!-- Animated Box -->
<div class="animation-box"></div>

<!-- Form for Input -->
<form id="contact-form" onsubmit="submitForm(event)">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" required>

    <button type="submit">Submit Form</button>
</form>

<!-- Alert Box -->
<div id="alert-box" class="alert-box"></div>

<!-- POST and GET Simulation -->
<div>
    <button class="post-get-btn" onclick="simulatePost()">Simulate POST</button>
    <button class="post-get-btn" onclick="simulateGet()">Simulate GET</button>
</div>

<script>
    // Form submission function
    function submitForm(event) {
        event.preventDefault(); // Prevent form from submitting

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;

        // Basic validation
        if (!name || !email || !age) {
            showAlert('error', 'All fields are required!');
            return;
        }

        showAlert('success', `Thank you for submitting, ${name}!`);

        // Clear form after submission
        document.getElementById("contact-form").reset();
    }

    // Show alert function
    function showAlert(type, message) {
        const alertBox = document.getElementById("alert-box");
        alertBox.classList.remove("success", "error", "info", "fade-out");
        alertBox.classList.add(type);
        alertBox.textContent = message;
        alertBox.style.display = 'block';

        // Fade out alert after 3 seconds
        setTimeout(() => {
            alertBox.classList.add("fade-out");
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 3000);
        }, 3000);
    }

    // Simulate POST request
    function simulatePost() {
        alert("Simulating a POST request... Data will be sent to server.");
        // Simulating a POST request delay
        setTimeout(() => {
            showAlert('info', 'POST request simulated successfully!');
        }, 2000);
    }

    // Simulate GET request
    function simulateGet() {
        alert("Simulating a GET request... Retrieving data from server.");
        // Simulating a GET request delay
        setTimeout(() => {
            showAlert('info', 'GET request simulated successfully!');
        }, 2000);
    }
</script>

</body>
</html>
