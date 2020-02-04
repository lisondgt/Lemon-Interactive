module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          options: {
            sourcemap: false,
            compress: false,
            yuicompress: false,
            style: 'expanded',
          },
          files: {
            'assets/style/css/style.css' : 'assets/style/sass/style.scss',
            'assets/style/css/home.css' : 'assets/style/sass/home.scss',
          }
        },
      },
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'assets/style/css',
            src: ['*.css', '!*.min.css'],
            dest: 'assets/style/minify',
            ext: '.min.css'
          }]
        }
      },
      watch: {
        css: {
          files: '**/**/**/*.scss',
          tasks: ['sass']
        },
        cssmin: {
            files: 'assets/style/css/*.css',
            tasks: ['cssmin']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
  }