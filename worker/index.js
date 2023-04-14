import express from "express";

console.log("Express", express);

// Start the server
const app = express();
app.get("/", (req, res) => {
    res.send("Hello from worker!");
});
app.listen(3000, () => {
    console.log(
        "Server started on port 3000." +
        "You can open http://localhost:3000/ in your browser."
    );
});

