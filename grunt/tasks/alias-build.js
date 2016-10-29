module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', function(type) {
        var tasks = [];

        tasks.push('clean:dist', 'copy:images');
        tasks.push('less', 'postcss');
        tasks.push('assemble');

        grunt.task.run(tasks);
    });

};
