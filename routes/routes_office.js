const express = require("express");
const router = express.Router();

//OFFICE
router.get("/offices", (req, res) => {
    res.render("office");
});
router.get("/listTareas", (req, res) => {
    res.render("listTareas");
});

module.exports = router;