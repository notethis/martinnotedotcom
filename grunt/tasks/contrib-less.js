module.exports = function(grunt) {
    'use strict';

    var _ = require('lodash');

    function lessConfig(options) {
        return _.defaults(options, {
            expand: true,
            src: ['**/*.less', '!**/_*.less'], // This order is important to exclude partials (ie _something.less)
            ext: '.min.css',
            extDot: 'first'
        });
    }

    grunt.config('less', {
        dist: {
            options: {
                paths: []
            },
            files: [
                lessConfig({
                    paths: [
                    ],
                    cwd: '<%= pkg.app.paths.stylesSrcDir %>',
                    dest: '<%= pkg.app.paths.stylesDistDir %>'
                })
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};
