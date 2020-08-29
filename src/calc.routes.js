const express = require("express");
const router = express.Router();
const { addNum, subNum, mulNum, divNum } = require("./calc.controllers");
const { checkData, checkType, checkRange } = require("./middlewares/dataTests");

router.post("/add", checkType, checkRange, addNum);
router.post("/sub", checkType, subNum);
router.post("/multiply", checkType, checkRange, mulNum);
router.post("/divide", checkType, divNum);

module.exports = router;
