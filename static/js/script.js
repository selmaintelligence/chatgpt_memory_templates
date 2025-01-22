document.addEventListener("DOMContentLoaded", function() {
    // Directory path where markdown files are stored
    const markdownDir = "./static/templates";

    // Function to fetch markdown files from the directory
    fetch(markdownDir)
        .then(response => response.text())
        .then(text => {
            const fileNames = text.split('\n');  // assuming filenames are listed one per line in directory listing
            const markdownList = document.getElementById("markdown-list");

            // Loop through the file names and create links dynamically
            fileNames.forEach(file => {
                if (file.endsWith('.md')) {
                    const link = document.createElement("a");
                    link.href = `${markdownDir}${file}`;
                    link.textContent = file.replace('.md', '');  // Display filename without extension
                    markdownList.appendChild(link);
                }
            });
        })
        .catch(error => console.error("Error loading markdown directory:", error));
});
