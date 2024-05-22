const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Serve robots.txt
app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/robots.txt"));
});

// All other routes should be handled by Angular
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(process.env.PORT || 4200, () => {
  console.log(`Server is running on port ${process.env.PORT || 4200}`);
});
