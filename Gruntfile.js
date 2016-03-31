module.exports = function (grunt) {
	'use strict';


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			less: {
				files: ['less/**'],
				tasks: ['build']
			},
		},
		less: {
			main: {
				files: [{
					expand: true,
					cwd: 'less/',
					src: ['style.less'],
					dest: 'css/',
					ext: '.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');


	grunt.registerTask('build', [
		'less:main',
	]);

};