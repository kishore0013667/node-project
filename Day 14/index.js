const express = require("express");
const app = express();

const validateUser = require("./middleware/validateUser");
// middleware to read JSON
app.use(express.json());


app.post("/register", validateUser, (req, res) => {
res.json({
    message: "User registered successfully"
});
});

app.post("/register", (req, res) => {
res.json({
    message: "User registered successfully"
});
});

app.listen(3000, () => {
console.log("Server running on port 3000");
});