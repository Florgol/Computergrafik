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
			
			/* Middle Part */
			
			//first pillar bottom square
			[-4,-5,0],
			[-2,-5,0],
			[-2,-5,-2],
			[-4,-5,-2],
			//first pillar top square
			[-4,1,0],
			[-2,1,0],
			[-2,1,-2],
			[-4,1,-2],
			//second pillar bottom square
			[-4,-5,-3],
			[-2,-5,-3],
			[-2,-5,-5],
			[-4,-5,-5],
			//second pillar top square
			[-4,1,-3],
			[-2,1,-3],
			[-2,1,-5],
			[-4,1,-5],
			//third pillar bottom square
			[2,-5,0],
			[4,-5,0],
			[4,-5,-2],
			[2,-5,-2],
			//third pillar top square
			[2,1,0],
			[4,1,0],
			[4,1,-2],
			[2,1,-2],
			//fourth pillar bottom square
			[2,-5,-3],
			[4,-5,-3],
			[4,-5,-5],
			[2,-5,-5],
			//fourth pillar top square
			[2,1,-3],
			[4,1,-3],
			[4,1,-5],
			[2,1,-5],
			//roof base - bottom square
			[-4,1,0],
			[-4,1,-5],
			[4,1,-5],
			[4,1,0],
			//roof base - top square
			[-4,2,0],
			[-4,2,-5],
			[4,2,-5],
			[4,2,0],
			//roof top
			[0,5,0],
			[0,5,-5],

			/* Tower - next index is 42 */

			//bottom square
			[-9,-5,0],
			[-4,-5,0],
			[-4,-5,-5],
			[-9,-5,-5],

			//top square
			[-9, 10, 0],
			[-4, 10, 0],
			[-4, 10, -5],
			[-9, 10, -5],

			//roof
			[-6.5, 18, 0],
			[-6.5, 18, -5],

			//clock
			[-7, 9, 0],
			[-6, 9, 0],
			[-5, 10, 0],
			[-5, 11, 0],
			[-6, 12, 0],
			[-7, 12, 0],
			[-8, 11, 0],
			[-8, 10, 0],

			//clock-hand
			[-6.5, 11.5, 0],
			[-6.5, 10.5, 0],
			[-7, 10, 0]




			
		];

		instance.polygonVertices = [

			/* Middle Part - 22 Elements */

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
			[34,35,39,38],
			//roof top
			[36,37,41,40],
			[38,39,40,41],

			/* Tower */

			//tower pillar
			[42, 43, 44, 45],
			[46, 47, 48, 49],
			[42, 46, 47, 43],
			[45, 44, 48, 49],

			//roof
			[46, 49, 51, 50],
			[47, 48, 51, 50],

			//clock
			[52, 53, 54, 55, 56, 57, 58, 59, 52],

			//clock-hand
			[60, 61, 61]

		];

		instance.polygonColors = [
			//middle part colors
			1,2,3,4,4,3,2,1,1,2,3,4,4,3,2,1,1,2,3,4,1,2,
			//tower colors
			1,2,3,4,4,3,
			//clock and clock-hand
			3,3
		];
		
		data.applyScale.call(instance, scale);
		
		return instance;		
	};
});
