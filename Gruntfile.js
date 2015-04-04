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
          globals: {
            console: true,
            ohSnap: true
          },
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
    },
    emberTemplates: {
      files: {
        src: 'app/partials/**/*.hbs',
        dest: 'app/build/dev_templates.js'
      },
      options: {
        // amd: true,
        templateBasePath: /app\/partials\//,
        templateNamespace: 'Handlebars',
        // templateName: function(name) {
        //   return name.replace('_', '/');
        // }
      }
    },
    watch: {
      templates: {
        files: ['app/partials/**/*.hbs'],
        tasks: ['emberTemplates'],
        options: {
          spawn: false,
        },
      },
    },
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
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('hbs', ['emberTemplates']);

};
