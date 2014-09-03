(function ( global ) {

	"use strict";

	// ----- OBJECT ----- //
	var main = {

		// ----- VARS ----- //

		// ----- CONSTANTS ----- //

		// ----- GET / SET ----- //
		
		// ----- INIT FUNCTIONS ----- //
		init: function() {
			console.log( "init" );

		},

		// ----- FUNCTIONS ----- //
		


		// ----- EVENT LISTENERS ----- //

	}

	// ----- GLOBAL ----- //
	global.main = main;

	// ----- CALL ----- //
	$( document ).ready( function() {

		main.init();

	});

}( this ));
