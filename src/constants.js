/**
 * Alvin Ahmadov [https://github.com/AlvinAhmadov]
 * */

const DATA_FORMAT = 'channelsLast';
const PERMUTATION = [1, 0, 2];
const BLOCKS = [6, 12, 24, 16];
const EPSILON = 1e-7;
const DATA_ROOT = 'data';
const MODEL_ROOT = 'models';
const WEIGHTS_KEY = 'weightsManifest';

const PTYPE = {
	T1: "type1",
	T3: "type3",
	T4: "type4",
	T5: "type5",
	T6: "type6",
	T7: "type7",
	T8: "type8",
	RECAP: "recaptcha"
};

module.exports = {
	DATA_FORMAT,
	PERMUTATION,
	BLOCKS,
	EPSILON,
	DATA_ROOT,
	MODEL_ROOT,
	WEIGHTS_KEY,
	PTYPE
};
