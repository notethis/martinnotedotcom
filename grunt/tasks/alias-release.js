module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('release', function(type) {
        var tasks = [
            'bump-only:' + (type || 'patch'), // Type should be 'patch', 'minor', or 'major'.
            'build',
            'bump-commit'
        ];

        grunt.task.run(tasks);
    });
};
