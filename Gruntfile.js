/*global module*/

module.exports = function (grunt) {
    'use strict';

    // Define the configuration for all the tasks
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    keepalive: true
                }
            }
        },

        json_server: {
            stub: {
                options: {
                    port: 3000,
                    db: 'test/stub-server.json',
                    keepalive: true
                }
            }
        },
        
        concurrent: {
			target: {
				tasks: ['connect', 'json_server'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-json-server');

    // register tasks
    grunt.registerTask('run', ['concurrent']);
    
    // register default task
    grunt.registerTask('default', ['run']);
};
