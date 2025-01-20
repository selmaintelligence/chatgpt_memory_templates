# Interactive Input with Scripts

This example demonstrates how to use input boxes to interact with local scripts and external resources.

---

### Input Form Example

Enter your name and click submit to trigger a local script:

<form action="customscript://handle-input" method="get">
    <label for="userName">Name:</label>
    <input type="text" id="userName" name="name" placeholder="Enter your name" required>
    <button type="submit">Submit</button>
</form>

> **Note**: This form triggers a `customscript://` handler that runs a local script on your system.

---

### Integration Instructions

1. Clone the repository and configure your system to handle `customscript://` URLs (see below).
2. Ensure the local handler script processes the input dynamically.
3. Use this form to interact with local scripts or APIs.

---

### Dynamic Feedback Form Example

Simulate a GET request that sends data to a webhook or local script:

<form action="https://example.com/api/feedback" method="get">
    <label for="feedback">Your Feedback:</label><br>
    <textarea id="feedback" name="message" placeholder="Write your feedback..." required></textarea><br>
    <button type="submit">Send Feedback</button>
</form>

---

