/**
 * Empty object for groups in scenegraph.
 * 
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function(exports, data) {
	"use strict";

	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		
		if(parameter) {
			var scale = parameter.scale;
		}		
		
		// Set default values if parameter is undefined.
		if(scale == undefined){
			scale = 100;
		
		// Instance of the model to be returned.
		var instance = {};

		//start of model - model of an archway
		instance.vertices = [
			//first bottom square
			[0,0,0],
			[2,0,0],
			[2,0,-2],
			[0,0,-2]
		];
		instance.polygonVertices = [
			[0,1,2,3]
		];	
		instance.polygonColors = [0];
		
		return instance;		
	};
});
