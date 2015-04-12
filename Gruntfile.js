module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      unit: {
        configFile: 'karma.config.js'
      }
    },

    jade: {
        compile: {
          files: [
            {
              cwd: "app/views",
              src: "**/*.jade",
              dest: "app/views",
              expand: true,
              ext: ".html"
            },
            {
              cwd: "",
              src: "index.jade",
              dest: "",
              expand: true,
              ext: ".html"
            }
          ]
        }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('test', ['karma']);
};