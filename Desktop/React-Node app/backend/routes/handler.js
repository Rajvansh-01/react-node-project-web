const express = require("express");
const router = express.Router();
// import Fifa from "../../frontend/src/images/fifa.jpg";
// import Journalism from "../../frontend/src/images/journalism.jpg";
// import Dmarket from "../../frontend/src/images/dmarket.jpg";

router.get('/blogs', (req, res)=>{
    const str = [
        {
            // "img":{Fifa},
            "topic":"Digital Marketting",
            "detail":"Digital marketing provides a medium for the brand and its audience to connect."
        },
        {
            // "img":{Journalism},
            "topic":"Journalism",
            "detail":"To provide citizens with the information they need to make the best possible decisions."
        },
        {
            // "img":{Dmarket},
            "topic":"FIFA",
            "detail":"Helping to promote positive social change around the world and raise support."
        }
];
    res.send(JSON.stringify(str));
});

router.post('/addBlogs', (req, res)=>{
    res.send("NA");
});

module.exports = router;