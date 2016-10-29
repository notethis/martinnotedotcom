module.exports = function(grunt) {
    var _ = require('lodash');
    var fs = require('fs');
    var locales = ['en_US'];
    var localDocs, options, params;


    'use strict';

    localeDocs = function() {
        var appEnvironment = ['production'];
        var sites = {};

        _.forEach(appEnvironment, function(env, j) {
            _.forEach(locales, function(localeJSON, i) {
                var locale = localeJSON.replace('.json', '');
                var site = {
                    options: {
                        layout: 'baseline.hbs',
                        data: [],
                        partials: []
                    },
                    files: [{
                        expand:true,
                        cwd: 'src/assemble/templates/pages',
                        src: ['*.hbs'],
                        dest: 'dist/',
                        ext: '.html'
                    }]
                };

                sites[env + '-' + locale] = site;
            });
        });

        return sites;
    };

    options = {
        prettify: {
            indent: 4
        },
            // marked: {
            //     sanitize: false
            // },
            // production: true,
            data: ['<%= pkg.app.paths.dataDir %>/**/*.{json,yml}',
                '!<%= pkg.app.paths.dataDir %>/adl/**/*.{json,yml}',
                'package.json'
            ],
            // assets: '<%= site.destination %>/assets',
            helpers: '<%= pkg.app.paths.helpersDir %>/*.js',
            layoutdir: '<%= pkg.app.paths.layoutsDir %>',
            partials: [
                '<%= pkg.app.paths.includesDir %>/**/*.hbs',
            ]
    };

    params = _.extend({}, {options: options}, localeDocs());

    grunt.config('assemble', params)

    grunt.loadNpmTasks('assemble');
};
