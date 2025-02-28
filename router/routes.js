import express from "express";
// import {example} from "../controller/example.js"

import router from express.Router();
import {
    renderHome,
    renderLogin
} from "../controller/renderer.js"
import {
    login
} from "../controller/register.js"
const router = express.Router();

//add requests
//EX: app.get("/", example)

// Renders requests
router.get("/home", renderHome)
router.get("/login", renderLogin)

// Post requests

// Login
router.post("/login", login)


export default router;