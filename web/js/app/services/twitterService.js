
angular.module( "app" ).factory( "TwitterService", function( $rootScope, $http ) {
	
	
	// ----- PRIVATE VARS ----- //
	var world;
	var worldNames;
	var service = {};
	
	
	// ----- CONSTANTS ----- //
	service.NAME = "TwitterService";
	
	
	// ----- EVENTS ----- //
	service.AUTHENTICATED = service.NAME + "Authenticated";
	service.UPDATE = service.NAME + "Update";
	
	
	// ----- GET / SET FUNCTIONS ----- //
	service.getWorld = function() {
	
		return world;
	
	};
	
	service.setWorld = function( value ) {
	
		world = value;
		$rootScope.$broadcast( service.UPDATE, world );
	
	};
	
	
	// ----- FUNCTIONS ----- //	
	service.authenticate = function( callback ) {
		console.log( "TwitterService: authenticate" );
		
		var url = "data/world_names.json";
		$http.get( url ).success( function( data ) {
			
			worldNames = data;
			callback( worldNames );
			
		} );
		
	};
	
	service.lookupWorld = function( id ) {
		console.log( "WorldService: lookupWorld: " + id );
	
		if ( worldNames ) {
		
			var i;
			var length = worldNames.length;
			var world;
			
			for ( i = 0; i < length; i++ ) {
			
				world = worldNames[i];
				if ( world.id == id ) return world;
			
			}
		
		}	
	
	};
	
	service.lookupWorldName = function( id ) {
		console.log( "WorldService: loadWorldName: " + id );
	
		if ( worldNames ) {
		
			var i;
			var length = worldNames.length;
			var world;
			
			for ( i = 0; i < length; i++ ) {
			
				world = worldNames[i];
				if ( world.id == id ) return world.name;
			
			}
		
		}	
	
	};
	
	
	// ----- RETURN ----- //
	return service;

} );