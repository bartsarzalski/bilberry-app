const bilberryAPI = require('../demo');
const inst = new bilberryAPI.API();


var express = require("express");
var router = express.Router();

router.get("/courses", (req, res, next) => {
    inst.getData().then(res.send.bind(res));
});

router.post("/courses", (req, res) => {
    const course = {
        id: inst.database.length + 1,
        name: req.body.name,
        language: req.body.language,
        description: req.body.description,
        initRelease: req.body.initRelease,
    }
    inst.addData(course);
    res.send(course);
});

router.delete("/courses/:id", (req, res) => {
    inst.deleteData(req.params.id);
    res.send(req.params.id);
});

module.exports = router;