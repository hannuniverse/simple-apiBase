/*
   * by balzz
   * dont delete my wm
   * follow more instagram: @iqstore78
*/

const express = require("express")
const axios = require("axios")
const session = require("express-session")
const path = require("path")
const bodyParser = require('body-parser')
const { limit, checkBanned } = require("../declaration/rateLimit.jsx")
const isAuthenticated = require("../declaration/autentikasi.jsx")

const app = express()
app.use(checkBanned)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'komtolllll',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 } 
}))

// function isAuthenticated(req, res, next) {
//     if (req.session && req.session.email) {
//         next()
//     } else {
//         res.redirect("/login")
//     }
// }

/* !=== PAGE ===! */
app.get("/", limit, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/home.html"))
})

app.get("/profile", limit, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/prof.html"))
})

app.get("/api", limit, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/api.html"))
})

/* = ENDPOINT FITURE = */

app.get("/api/blekbok", limit, async (req, res) => {
    require("../pages/fitures/blackbox.js")(req, res)
})

app.get("/api/tiktokDL", limit, async (req, res) => {
    require("../pages/fitures/tiktok.js")(req, res)
})

app.get("/api/instagramDL", limit, async (req, res) => {
    require("../pages/fitures/instagram.js")(req, res)
})

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../pages/404.html"))
})

module.exports = app
