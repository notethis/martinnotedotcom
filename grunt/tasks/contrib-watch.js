module.exports = function(grunt) {
    'use strict';

    grunt.config('watch', {
        options: {
            spawn: false
        },
        build: {
            files: [
                'package.json'
            ],
            tasks: ['build']
        },
        assemble: {
            files: [
                '<%= pkg.app.paths.assembleDir %>/**/*.*'
            ],
            tasks: ['assemble', 'bsReload:all']
        },
        images: {
            files: [
                '<%= pkg.app.paths.imagesSrcDir %>/**/*.*'
            ],
            tasks: ['copy:images', 'bsReload:all']
        },
        videos: {
            files: [
                '<%= pkg.app.paths.videosSrcDir %>/**/*.*'
            ],
            tasks: ['copy:videos', 'bsReload:all']
        },
        less: {
            files: [
                '<%= pkg.app.paths.stylesSrcDir %>/**/*.*'
            ],
            tasks: ['less', 'postcss', 'bsReload:css']
        },
        javascripts: {
            files: [
                '<%= pkg.app.paths.javascriptsSrcDir %>/**/*.js'
            ],
            tasks: ['requirejs', 'copy:javascripts', 'bsReload:all']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
