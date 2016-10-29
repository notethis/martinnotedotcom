module.exports = function(grunt) {
     'use strict';

     var browserSync = require("browser-sync");

     grunt.registerTask('bsInit', function () {
         var done = this.async();
         browserSync({
             proxy: "localhost:8000"
         }, function (err, bs) {
             done();
        });
     });

     grunt.registerTask('bsReload', function () {
          browserSync.reload({
             // css reload is separate because sometimes bs tries to inject
             // new css file while the postcss task is running
             css: {
                 reload: "*.css"
             },
             all: {
                 reload: true
             }
          });
     });
 };
