module.exports = function( grunt ) {
 
	grunt.initConfig( {
 
		pkg: grunt.file.readJSON( "package.json" ),
 
		uglify: {
			options: {
				mangle: false,
				banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n",
				compress: {
					drop_console: true
				},
				preserveComments: false
			},
			js: {
				files: {
					"web/js/main.min.js": [ "web/js/plugins.js", "web/js/main.js" ],
					"web/js/app.min.js": [ "web/js/app/app.js", "web/js/app/controllers/*.js", "web/js/app/services/*.js" ]
				}
			}
		},
 
		less: {
			build: {
				options: {
					paths: [ "web/less" ],
					cleancss: true
				},
				files: {
					"web/css/main.min.css": "web/less/main.less"
				}
			}
		},
 
		watch: {
			js: {
				files: [ "web/js/main.js", "web/js/app/*.js", "web/js/app/controllers/*.js", "web/js/app/services/*.js" ],
				tasks: [ "uglify" ]
			},
			css: {
				files: [ "web/less/*.less" ],
				tasks: [ "less" ]
			}
		}
	});
 
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-contrib-less" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );	
 
	grunt.registerTask( "default", [ "less", "uglify" ] );
 
};