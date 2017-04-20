module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'style.css': 'style.sass'
            }
        }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'IMAGES/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/build/'
            }]
        }
    },

    watch: {
        scripts: {
            files: ['SASS/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        } 
    },

    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'CSS/*.css',
                    'HTML/*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './app'
                browser: "google chrome"
            }
        }
    }


  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};
