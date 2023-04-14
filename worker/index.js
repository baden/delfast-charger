import express from "express";
import path from "path";

const __dirname = path.resolve();

console.log("Express", express);

// Start the server
const app = express();

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//    });
app.use(express.static(path.join(__dirname, '/client/build')));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
// app.get("/", (req, res) => {
//     res.send("Hello from worker!");
// });
app.listen(3000, () => {
    console.log(
        "Server started on port 3000." +
        "You can open http://localhost:3000/ in your browser."
    );
});

