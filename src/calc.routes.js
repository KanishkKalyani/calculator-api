const express = require("express");
const router = express.Router();
const { addNum, subNum, mulNum, divNum } = require("./calc.controllers");
const { checkData, checkType, checkRange } = require("./middlewares/dataTests");

router.post("/add", checkData, checkType, checkRange, addNum);
router.post("/sub", checkData, checkType, subNum);
router.post("/multiply", checkData, checkType, checkRange, mulNum);
router.post("/division", checkData, checkType, divNum);

module.exports = router;
