const router = require("express").Router();
const Controller = require("./controller");

router.get("", Controller.Get);
router.post("/addUser", Controller.Post);

module.exports = router;
