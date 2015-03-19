/* global module */
module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'bin/web-server.js',
        dest: 'build/<%= pkg.name %>.min.js'
      },
    },
    jshint: {
      options: {
          browser: true,
          jquery: true,
          node: true,
          esnext: false,
          globals: {},
          globalstrict: true,
          quotmark: 'single',
          indent: 4,
          eqeqeq: true,
          eqnull: true,
          latedef: true,
          newcap: true,
          smarttabs: true,
          trailing: true,
          undef: true,
          unused: true,
          maxlen: 100
      },
      // You get to make the name
      // The paths tell JSHint which files to validate
      myFiles: ['app/js/**/*.js']
    }
    // simplemocha: {
    //   backend: {
    //     src: [
    //       'test/server/*-test.js'
    //       ]
    //   }
    // },
    // karma: {
    //   unit: {
    //     configFile: './test/karma.conf.js',
    //     autoWatch: true
    //   }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
};
