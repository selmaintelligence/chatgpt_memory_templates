# Dynamic Query Links for Local Script Execution

Click the links below to trigger local scripts or pass dynamic parameters. 

### Example: Passing User Input via Links

- [Say Hello](customscript://handle-input?name=John)
- [Send Feedback](customscript://handle-feedback?message=Great%20Job)
- [Run a Custom Command](customscript://run-command?cmd=ls%20-al)

> **Note**: These links rely on a local handler script registered for `customscript://` protocol.

---

### Instructions

1. **Set up the local script** (see below) to handle `customscript://` links.
2. Click the links to trigger local actions or run commands.
3. Ensure the query parameters are properly encoded (e.g., spaces as `%20`).

---
