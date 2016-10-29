module.exports = function(grunt) {
    'use strict';

    var _ = require('lodash');
    var locales = grunt.config.get('pkg.app.locales');
    var fs = require('fs');

    var mergeFiles = function() {
        var files = {};

        _.each(locales, function(locale) {
            var localeData = {
                fullLocale: locale,
                locale: locale.substring(0, 5),
                lang: locale.substring(0, 2)
            };
            var localeJSON = JSON.stringify(localeData);
            var key = '<%= pkg.app.paths.linguaDir %>/data/' + locale + '/data.json'

            grunt.file.write('lingua/messages/' + locale + '-locale.json', localeJSON);
            grunt.file.write('lingua/data/' + locale + '/locale.hbs', locale);


            files[key] = [
                '<%= pkg.app.paths.assembleDir %>/data/locale/' + locale + '.json',
            ]
        });

        return files;
    }

    grunt.config('json_merge', {
        'i18n': {
            files: mergeFiles()
        }
    });

    grunt.loadNpmTasks('grunt-json-merge');
};
