import express from "express";
import routes from "./router/routes.js";
import url from "url";
import path from "path";

// Getting file path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const app = express();

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(express.static("public"))
app.use("/", routes);

app.listen(3000, () => {
    console.log("Server running on port 3000")
})