const express = require("express")
const router = express.Router()
const {todoadd, gettodos,delltask, updatetask} = require("../controllers/todocontroller.js")

router.post("/addtodo", todoadd)
router.get("/gettodos", gettodos)
router.delete("/deletetodo/:id", delltask)
router.put("/updatetask/:id", updatetask)

module.exports = router