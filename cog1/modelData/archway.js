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
			scale = 50;
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
			[0,6,-2],
			//second pillar bottom square
			[0,0,-3],
			[2,0,-3],
			[2,0,-5],
			[0,0,-5],
			//second pillar top square
			[0,6,-3],
			[2,6,-3],
			[2,6,-5],
			[0,6,-5],
			//third pillar bottom square
			[6,0,0],
			[8,0,0],
			[8,0,-2],
			[6,0,-2],
			//third pillar top square
			[6,6,0],
			[8,6,0],
			[8,6,-2],
			[6,6,-2],
			//fourth pillar bottom square
			[6,0,-3],
			[8,0,-3],
			[8,0,-5],
			[6,0,-5],
			//fourth pillar top square
			[6,6,-3],
			[8,6,-3],
			[8,6,-5],
			[6,6,-5],
			//roof base bottom square
			[0,6,0],
			[0,6,-5],
			[8,6,0],
			[8,6,-5],
			//roof base top square
			[0,7,0],
			[0,7,-5],
			[8,7,0],
			[8,7,-5],
			
		];
		instance.polygonVertices = [
			//first pillar
			[0,1,2,3],
			[4,5,6,7],
			[0,1,5,4],
			[2,3,7,6],
			//second pillar
			[8,9,10,11],
			[12,13,14,15],
			[8,9,13,12],
			[10,11,15,14],
			//third pillar
			[16,17,18,19],
			[20,21,22,23],
			[16,17,21,20],
			[18,19,23,22],
			//fourth pillar
			[24,25,26,27],
			[28,29,30,31],
			[24,25,29,28],
			[26,27,31,30],
			//roof base
			[32,33,34,35],
			[36,37,38,39],
			[32,33,37,36],
			[34,35,39,38]
		];
		instance.polygonColors = [1,2,3,4,4,3,2,1,1,2,3,4,4,3,2,1,1,2,3,4];
		
		data.applyScale.call(instance, scale);
		
		return instance;		
	};
});
