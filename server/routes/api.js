const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    res.send("GET req for items")
})


module.exports = router