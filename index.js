var {Predictor} = require("./src/predictor.js");

async function initModule(type, params, shardsPrefix) {
	try {
		return new Predictor(params, false, type, shardsPrefix);
	} catch (err) {
		console.error('err23904094', err)
		throw Error(err);
	}
}


module.exports = {
	initModule,
	Predictor
}
