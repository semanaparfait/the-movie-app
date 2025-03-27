// 

function open(imgElement) {
    // Now imgElement refers to the clicked image
    var imageUrl = imgElement.src; // Gets the image source (URL)
    var description = imgElement.getAttribute("data-description") || "No description available"; // Gets the description (or a fallback message)

    var newTab = window.open("", "_blank", "noopener,noreferrer");

    // Writing content into the new tab
    newTab.document.write(`
        <html>
            <head>
                <title>Image Description</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                    }
                    img {
                        width: 80%;
                        max-width: 600px;
                        margin-top: 20px;
                        border-radius: 10px;
                    }
                    .description {
                        font-size: 18px;
                        font-weight: bold;
                        margin-top: 15px;
                    }
                    .close-btn {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 10px 15px;
                        background: red;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                </style>
            </head>
            <body>
                <h2>Image Description</h2>
                <p class="description">${description}</p>
                <img src="${imageUrl}" alt="Clicked Image">
                <br><br>
                <a href="#" class="close-btn" onclick="window.close()">Close</a>
            </body>
        </html>
    `);
}
