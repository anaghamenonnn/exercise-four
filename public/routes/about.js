
const app = express()
const router = express.Router();
const express = require("express")


router.use('/', (req, res) =>{
    res.send("About Me");
    
})

router.use('/me', (req, res) =>{
    res.send("About Me Again");
    
})

module.exports = router;