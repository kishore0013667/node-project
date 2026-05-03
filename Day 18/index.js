const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get("/", (req, res) => {
    res.send("Api Working...");

});

app.post("/upload/file", upload.single("image"), (req,res) => {
    return res.json({ message: "File Uploaded" });
});


app.listen(3000, () => {
    console.log(`server is running  on http://localhost:3000`);

});