const { Router } = require("express");
const controller = require("../controllers/userController");

const router = Router();

router.get("/api/users", controller.find);
router.get("/api/users/:id", controller.find);
router.post("/api/users", controller.create);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.delete);

module.exports = router;
