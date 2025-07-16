import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/juegoDeTrivia", (req, res) => {
    res.render("juegoDeTrivia");
});

router.get("/listTareas", (req, res) => {
    res.render("listTareas");
});

export default router;
