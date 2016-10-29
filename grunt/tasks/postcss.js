module.exports = function(grunt) {
    'use strict';

    var autoprefixer = require('autoprefixer')({
            browsers: grunt.config.get('pkg.app.supportedBrowsers')
        }),
        minify = require('cssnano')();

    grunt.config('postcss', {
        options: {
            map: false,
            processors: [autoprefixer, minify]
        },
        core: {
            src: '<%= pkg.app.paths.stylesDistDir %>/**/*.css'
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
};
