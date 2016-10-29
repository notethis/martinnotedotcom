module.exports = function(grunt) {
    'use strict';

    grunt.config('parallel', {
        server: {
            options: {
                stream: true
            },
            tasks: [{
                grunt: true,
                args: 'watch'
            }, {
                grunt: true,
                args: 'connect:dev:keepalive'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-parallel');
};
