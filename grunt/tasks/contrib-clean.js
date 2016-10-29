module.exports = function(grunt) {
    'use strict';

    // TODO only cleans folders, doesn't remove
    grunt.config('clean', {
        dist: ['<%= pkg.app.paths.distDir %>/**/*.*'],
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
