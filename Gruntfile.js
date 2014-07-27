module.exports = function(grunt) {
	
  	grunt.initConfig({

    	//pkg: grunt.file.readJSON('package.json'),

    	jade: {
    		compile: {
    			options: {
    				data: function (dest, src) {
    					return require('./digest.json')
    				}
    			},
    			files: {
    				"digest.html": ["digest.jade"]
    			}
    		}
    	}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	
	grunt.registerTask('default', ['jade']);

};