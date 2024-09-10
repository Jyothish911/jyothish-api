const express = require("express");

const router = express.Router();

const player = require("../model/userschema");
const { getplayers, addplayer, updateplayer, deleteplayer} = require("../controllers/controler");



router.get("/get-players",getplayers);
router.post("/add-player",addplayer);
router.put("/update-player/:id",updateplayer);
router.delete("/delete-player/:id",deleteplayer);

module.exports = router;