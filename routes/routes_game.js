const express = require("express");
const router = express.Router();
//GAMES
router.get("/games", (req, res) => {
    res.render("games");
});
router.get("/tictactoe", (req, res) => {
    res.render("tictactoe");
});

router.get("/juegoDeTrivia", (req, res) => {
    res.render("juegoDeTrivia");
});
router.get("/ahorcado", (req, res) => {
    res.render("ahorcado");
});

module.exports = router;