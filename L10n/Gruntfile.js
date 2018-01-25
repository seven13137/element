module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '\n* <%= pkg.name %> - v<%= pkg.version %> \n* © Copyright <%= grunt.template.today("yyyy") %>  Hewlett-Packard Development Company, L.P\n',
    connect: {
      server: {
        options: {
          port: 10000,
          livereload: true,
          keepalive: true
        }
      }
    },


    // Grunt Tasks
    less: {
      dist: {
        options: {},
        files: {
          // target.css file: source.less file
          "dist/css/site.css": "src/assets/less/site.less"
        }
      }
    },
    copy: {
      hpElementsAngular: {
        src: ['css/*','js/*', 'fonts/*', 'img/*'],
        cwd: 'bower_components/hp-elements-angular/dist',
        expand: true,
        dest: 'dist/hpe-elements/'
      },
      angular: {
        src: ['angular.js', 'angular.min.js'],
        cwd: 'bower_components/angular',
        expand: true,
        dest: 'dist/js/'
      },
      assets: {
        src: ['img/*', 'js/*'],
        expand: true,
        cwd: 'src/assets',
        dest: 'dist/'
      },
      templates: {
        src: '**/*.html',
        cwd: 'src/app',
        expand: true,
        dest: 'dist/app/views'
      },
      index: {
        src: 'index.html',
        cwd: 'src',
        expand: true,
        dest: 'dist/'
      }
    },
    concat: {
      dist: {
        src: [
          "src/app/**/*.js", "!src/**/*spec.js"
        ],
        dest: 'dist/js/app.js'
      }
    },
    uglify: {
      dist: {
        options: {
          preserveComments: 'some'
        },
        files: {
          'dist/js/app.min.js': 'dist/js/app.js',
          'dist/js/script.min.js': 'dist/js/script.js',
        }
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      appjs: {
        files: ['src/app/**/*.js'], // which files to watch
        tasks: ['concat', 'uglify', 'usebanner:js']
      },
      apptemplates: {
        files: ['src/app/**/*.html'], // which files to watch
        tasks: ['copy:templates', 'copy:index']
      },
      assets: {
        files: ['src/assets/**/*', '!src/assets/**/*.less'], // everything bar less
        tasks: ['copy:assets', 'cssmin', 'usebanner']
      },
      assetsless: {
        files: ['src/assets/**/*.less'],
        tasks: ['less', 'cssmin', 'usebanner:css']
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    },
    usebanner: {
      js: {
        options: {
          position: 'top',
          banner: '/*! <%= banner %> */',
          linebreak: true
        },
        files: {
          src: ['dist/js/*.js']
        }
      },
      css: {
        options: {
          position: 'top',
          banner: '/* <%= banner %> */',
          linebreak: true
        },
        files: {
          src: ['dist/css/*.css']
        }
      }
    },
    clean: ['dist']


  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-banner');

  // Default task.
  grunt.registerTask('default', ['clean', 'less', 'copy', 'concat', 'uglify', 'cssmin', 'usebanner']);

};