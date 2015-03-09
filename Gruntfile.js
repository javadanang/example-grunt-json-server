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
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-json-server');

    // register tasks
    grunt.registerTask('run', ['json_server', 'connect']);
    
    // register default task
    grunt.registerTask('default', ['run']);
};
