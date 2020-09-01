exports.checkData = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (num1 === undefined || num2 === undefined) {
		return res.json({
			status: `failure`,
			message: `parameter not found`,
		});
	}

	next();
};

exports.checkRange = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (num1 > 1000000 || num2 > 1000000) {
		return res.json({
			status: `error`,
			message: `Overflow`,
		});
	}

	next();
};

exports.checkType = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (typeof num1 === "string" || typeof num2 === "string") {
		return res.json({
			status: `error`,
			message: `invalid data types`,
		});
	}

	next();
};
