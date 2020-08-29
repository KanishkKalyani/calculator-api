exports.addNum = (req, res) => {
	const { num1, num2 } = req.body;

	const sum = num1 + num2;
	res.status(200).json({
		status: `success`,
		message: `the sum of given two number`,
		sum,
	});
};

exports.subNum = (req, res) => {
	const { num1, num2 } = req.body;

	if (num1 < 1000000 || num2 < 1000000) {
		res.status(422).json({
			status: `error`,
			message: `Underflow`,
		});
	}

	const sum = num1 - num2;
	res.status(200).json({
		status: `success`,
		message: `the difference of given two number`,
		sum,
	});
};

exports.mulNum = (req, res) => {
	const { num1, num2 } = req.body;

	const sum = num1 * num2;
	res.status(200).json({
		status: `success`,
		message: `The product of given numbers`,
		sum,
	});
};

exports.divNum = (req, res) => {
	const { num1, num2 } = req.body;

	if (num2 === 0) {
		res.status(422).json({
			status: `error`,
			message: `Cannot divide by zero`,
		});
	}

	const sum = num1 / num2;

	res.status(200).json({
		status: `success`,
		message: `The division of given numbers`,
		sum,
	});
};
