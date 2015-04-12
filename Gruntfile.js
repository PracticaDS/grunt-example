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
            cwd: 'app/views',
            src: '**/*.jade',
            dest: 'app/views',
            expand: true,
            ext: '.html'
          },
          {
            cwd: '',
            src: 'index.jade',
            dest: '',
            expand: true,
            ext: '.html'
          }
        ]
      }
    },

    concat: {
      styles: {
        src: 'app/views/**/*.scss',
        dest: 'styles.scss'
      }    
    },

    sass: {
      dist: {
        files: {
          'styles.css': 'styles.scss'
        }
      }
    },

    clean: {
      compile: ['styles.css'],
    },

    compile: {
      html: ['jade'],
      styles: ['concat:styles', 'sass', 'clean:compile']
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['karma']);
  grunt.registerMultiTask('compile', function() {
    grunt.task.run(this.data);
  });
};