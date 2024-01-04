const { Router } = require("express");

const router = Router();

router.get("/", require("./dataList"));
router.get("/:id", require("./findById"));
router.post("/", require("./create"));
router.put("/:id", require("./update"));
router.delete("/:id", require("./remove"));

module.exports = router;
