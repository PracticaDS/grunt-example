module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'http-server': {
      dev: {
        root: 'target',
        port: 8000,
        host: "0.0.0.0"
      },
      watch: {
        root: 'target',
        port: 8000,
        host: "0.0.0.0",
        runInBackground: true
      }
    },

    karma: {
      unit: {
        configFile: 'karma.config.js'
      }
    },

    protractor: {
      options: {
        configFile: 'protractorConf.js',//"node_modules/protractor/example/conf.js", // Default config file
        keepAlive: false, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      all: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          // configFile: "e2e.conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },

    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [
          {
            cwd: 'app/views',
            src: '**/*.jade',
            dest: 'target/app/views',
            expand: true,
            ext: '.html'
          },
          {
            cwd: '',
            src: 'index.jade',
            dest: 'target',
            expand: true,
            ext: '.html'
          }
        ]
      }
    },

    concat: {
      styles: {
        src: 'app/views/**/*.scss',
        dest: 'target/styles.scss'
      },
      js: {
        src: 'app/**/*.js',
        dest: 'target/app.js'
      }    
    },

    sass: {
      dist: {
        files: {
          'target/styles.css': 'target/styles.scss'
        }
      }
    },

    clean: {
      compile: ['target/styles.scss'],
      target: ['target']
    },

    copy: {
      js: {
        files: [
          {expand: true, src: ['bower_components/**'], dest: 'target'}
        ],
      },
    },

    compile: {
      html: ['jade', 'wiredep'],
      styles: ['concat:styles', 'sass', 'clean:compile'],
      js: ['concat:js', 'copy:js']
    },

    wiredep: {
      task: {
        src: ['target/**/*.html']
      }
    },

    watch: {
      js: {
        files: ['**/*.js'],
        tasks: ['compile:js']
      },
      html: {
        files: ['**/*.jade'],
        tasks: ['compile:html']
      },
      styles: {
        files: ['**/*.sass'],
        tasks: ['compile:styles']
      }
    },

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('start', ['http-server:dev']);
  
  grunt.registerTask('start:watch', ['http-server:watch', 'watch']);

  grunt.registerMultiTask('compile', function() {
    grunt.task.run(this.data);
  });
};