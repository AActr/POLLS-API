import express from "express";

import {
    renderHome,
    renderLogin,
    renderRegister
} from "../controller/renderer.js"
import {
    login,
    register
} from "../controller/userRegistry.js"

const router = express.Router();

// Renders requests
router.get("/home", renderHome)
router.get("/login", renderLogin)
router.get("/register", renderRegister)

// Post requests

// Login
router.post("/login", login)
router.post("/register", register)


export default router;