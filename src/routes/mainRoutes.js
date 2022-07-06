const express = require("express")
const apiController = require("../controllers/mainController")
const router = express.Router()

router.get("/api",apiController.send)
router.post("/api",apiController.create)
router.put("/api/:id",apiController.update)
router.delete("/api/:id",apiController.delete)
module.exports = router