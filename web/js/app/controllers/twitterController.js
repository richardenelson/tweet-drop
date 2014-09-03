
function TwitterController( $scope, TwitterService ) {

	var baseUrl = "http://gw2wack.mercilessgames.com/";

	$scope.display = true;
	$scope.worldsNA = [];
	$scope.worldsEU = [];
	
	$scope.getWorlds = function() {
		console.log( "TwitterController: getWorlds" );
		
		WorldService.loadWorlds( $scope.processWorlds );
	
	};
	
	$scope.getUrlParameters = function() {
	
		var query = location.search.slice( 1, location.search.length ).split( "&" );
		var parameters = {};
		
		var i;
		var length = query.length;
		var ary;
		
		for ( i = 0; i < length; i++ ) {
		
			ary = query[i].split( "=" );
			parameters[ ary[0] ] = ary[ 1 ];
		
		}
		
		return parameters;
	
	};
	
	$scope.processWorlds = function( data ) {
		console.log( "TwitterController: processWorlds" );	
		
		// Get ID from Hash
		var id = location.hash.slice( 1, location.hash.length );
		
		// Get ID from Address Query
		//var id = $scope.getUrlParameters().id;
		var isIdValid = false;
	
		// Sort Alphabetically
		data.sort( function( a, b ) {
		
			if ( a.name < b.name ) return -1;
			if ( a.name > b.name ) return 1;
			return 0;
			
		} );
	
		// Push to Region
		var i;
		var length = data.length;
		var world;
		
		for ( i = 0; i < length; i++ ) {
		
			world = data[i];
		
			if ( world.id.indexOf( "1" ) == 0 ) {
			
				$scope.worldsNA.push( world );
				
			} else {
			
				$scope.worldsEU.push( world );
			
			}
			
			if ( world.id == id &&
				 isIdValid == false ) {
				
				isIdValid = true;
				
			}
			
		}
		
		// Auto Select World from ID
		if ( isIdValid ) {
		
			var world = WorldService.lookupWorld( id );
			WorldService.setWorld( world );
			$scope.display = false;
		
		}
	
	};
	
	
	// ----- ADD LISTENERS ----- //
	$scope.$on( WorldService.UPDATE, function( e, world ) {
		console.log( "TwitterController: onWorldServiceUpdate" );
		
		if ( world ) {
		
			$scope.display = false;
			
		} else {
		
			$scope.display = true;
		
		}
		
	});
	
	
	// ----- EVENT LISTENERS ----- /
	$scope.onWorldSelect = function( world ) {
		console.log( "WorldService: onWorldSelect: " + world.id );
		
		WorldService.setWorld( world );

		location.hash = world.id;
		
	};
	
	// ----- INIT ----- //
	$scope.getWorlds();
	
};

