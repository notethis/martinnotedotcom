module.exports = function(grunt) {
    'use strict';

    grunt.config('connect', {
        options: {
            base: ['.'],
            debug: false
        },
        dev: {
            options: {
                // Browsersync opens browser in its proxied port so connect doesn't have to!
                // open: 'http://localhost:8000/',
                port: 8000,
                host: 'localhost',
                base: [
                    '<%= pkg.app.paths.nodeDir %>',
                    '<%= pkg.app.paths.distDir %>' // Contains your generated files (pre-release)
                    // Contains your libraries the container will provide
                ],
                middleware: function(connect, options, middlewares) {
                    var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;

                    middlewares.unshift(proxy);
                    return middlewares;
                }

            }
        },
        proxies: [{
            context: '/ajax/bce',
            host: 'test.homeaway.com',
            port: 443,
            https: true,
            headers: {
                host: 'test.homeaway.com'
            }
        }, {
            context: '/lp/euro2016/proxies',
            host: 'iws-test.homeaway.com',
            port: 443,
            https: true,
            headers: {
                host: 'iws-test.homeaway.com'
            },
            rewrite: {
                '^/lp/euro2016/proxies': '/bizops/bce'
            }
        }]
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-proxy');
};
