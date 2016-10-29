module.exports = function(grunt) {
    'use strict';

    var _ = require('lodash');

    function copyConfig(options) {
        return _.defaults(options, {
            expand: true,
            nonull: true
        });
    }

    grunt.config('copy', {
        // TODO: Delete in favor of requirejs
        // javascripts: {
        //     files: [
        //         copyConfig({
        //             cwd: '<%= pkg.app.paths.buildDir %>',
        //             src: ['**/*.js', '**/*.map'],
        //             dest: '<%= pkg.app.paths.javascriptsDistDir %>/',
        //             rename: function(dest, src) {
        //                 return dest + src.replace('.js','.min.js');
        //             }
        //         })
        //     ]
        // },
        images: {
            files: [
                copyConfig({
                    cwd: '<%= pkg.app.paths.imagesSrcDir %>',
                    src: '**/*.*',
                    dest: '<%= pkg.app.paths.imagesDistDir %>'
                })
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
