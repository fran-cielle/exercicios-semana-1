const express = require("express")
const router = express.Router()
const controller =  require("../controllers/professorasController")//gerencia os controles casa a chamada com que foi construido

router.get("/", controller.get);
router.get("/:id", controller.getById);

module.exports = router;