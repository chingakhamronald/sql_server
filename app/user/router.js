const router = require("express").Router();
const Controller = require("./controller");

router.get("/", Controller.GetUsers);
router.post("/", Controller.AddUser);
router.get("/:id", Controller.GetUserById);
router.patch("/:id", Controller.UpdateUser);
router.delete("/:id", Controller.DeleteUser);

module.exports = router;
