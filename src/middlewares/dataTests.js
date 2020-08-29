exports.checkData = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (num1 === undefined || num2 === undefined) {
		res.status(400).json({
			status: `failure`,
			message: `parameter not found`,
		});
	}

	next();
};

exports.checkRange = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (num1 > 1000000 || num2 > 1000000) {
		res.status(422).json({
			status: `error`,
			message: `Overflow`,
		});
	}

	next();
};

exports.checkType = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (typeof num1 === "string" || typeof num2 === "string") {
		res.status(422).json({
			status: `error`,
			message: `invalid data types`,
		});
	}

	next();
};
