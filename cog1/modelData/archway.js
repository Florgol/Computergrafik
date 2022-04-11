/**
 * 3D archway object for groups in scenegraph.
 * 
 * @namespace cog1.data
 * @module archway
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
		}
		
		// Instance of the model to be returned.
		var instance = {};

		//start of model - model of an archway
		instance.vertices = [
			//first pillar bottom square
			[0,0,0],
			[2,0,0],
			[2,0,-2],
			[0,0,-2],
			//first pillar top square
			[0,6,0],
			[2,6,0],
			[2,6,-2],
			[0,6,-2]
		];
		instance.polygonVertices = [
			[0,1,2,3],
			[4,5,6,7],
			[0,1,5,4],
			[2,3,7,6]
		];	
		instance.polygonColors = [0,1,2,3];
		
		data.applyScale.call(instance, scale);
		
		return instance;		
	};
});
