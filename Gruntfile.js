module.exports = function(grunt) {
    'use strict';

    // setup config
    grunt.initConfig({
        pkg: require('./package.json'),
    });

    // Load per-task config from separate files.
    grunt.loadTasks('grunt/tasks');
};
