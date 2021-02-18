/**
 * Alvin Ahmadov [https://github.com/AlvinAhmadov]
 * */

var {readParams, loadModelFromJSON} = require("./utils.js");

class ConfigParser {
	constructor(pathOrParams = 'params.yaml', type = 'type8') {
		this._params = pathOrParams instanceof Object ? pathOrParams : readParams(pathOrParams);
		this._type = type
	}
	
	/**
	 * Get training parameters
	 * @returns {Object}
	 * */
	get parameters() {
		return {
			'width':        this.width,
			'height':       this.height,
			'net_channels': this.netChannels,
			'fill_color':   this.fillColor,
			'classes':      this.classes
		};
	}
	
	get type() {
		if (!this._type)
			throw Error("Parser not initialized with valid parameters!");
		return this._type;
	}
	
	/**
	 * @returns {number}
	 * */
	get width() {
		return this._params[this.type]['width'];
	}
	
	/**
	 * @returns {number}
	 * */
	get height() {
		return this._params[this.type]['height'];
	}
	
	/**
	 * @returns {number}
	 * */
	get netChannels() {
		return this._params[this.type]['net_chanels'];
	}
	
	/**
	 * @returns {number}
	 * */
	get fillColor() {
		return this._params[this.type]['fill_color'];
	}
	
	/**
	 * @returns {string}
	 * */
	get classes() {
		let params = this._params[this.type];
		
		if ('classes' in params)
			return params['classes'];
		else
			return params['letters'].replace('$$', '$')
	}
	
	/**
	 * @returns {number}
	 * */
	get ctcInputLength() {
		return this._params[this.type]['ctc_input_length'];
	}
	
	get maxLabelLength() {
		return this._params[this.type]['max_label_length'];
	}
	
	/**
	 * @returns {string} path
	 * */
	get modelPath() {
		return this._params[this.type]['model_path'];
	}
	
	get modelJSON() {
		if (!this.modelPath.toLowerCase().includes('.json'))
			throw Error(`Not a json file: ${this.modelPath}`);
		
		return loadModelFromJSON(this.modelPath)
	}
}

module.exports = {
	ConfigParser
}
