const router = require("express").Router();
const Controller = require("./controller");

router.get("", Controller.Get);
router.post("/addUser", Controller.Post);
router.get("/getById/:id", Controller.GetById);
router.patch("/update/:id", Controller.Update);

module.exports = router;
