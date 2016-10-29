module.exports = function(grunt) {
    'use strict';

    var remote = grunt.option('remote') || 'origin';

    grunt.config('bump', {
        options: {
            files: ['package.json'],
            updateConfigs: ['pkg'],
            commit: true,
            commitMessage: '[grunt-release-plugin] Release ' + grunt.config.get('pkg.app.mainFileName') + ' %VERSION%',
            commitFiles: ['-a'],
            createTag: true,
            tagName: '%VERSION%',
            tagMessage: '[grunt-release-plugin] Tagged release ' + grunt.config.get('pkg.app.mainFileName') + '%VERSION%',
            push: true,
            pushTo: remote,
            gitDescribeOptions: ' --tags --always --abbrev=1 --dirty=d'
        }
    });

    grunt.loadNpmTasks('grunt-bump');
};
