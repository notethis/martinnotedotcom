module.exports = function(grunt) {
    'use strict';

    // grunt.registerTask('server', ['configureProxies', 'parallel:server']);

    // grunt.registerTask('start', ['build', 'server']);

    grunt.registerTask('start', ['build', 'configureProxies', 'connect:dev', 'bsInit', 'watch']);

};
