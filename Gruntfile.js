//var ngrok = require(‘ngrok’);
module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
    jshint: {
        all: ['Gruntfile.js']
    },

    responsive_images: {
        dev: {
            options: {
                engine: 'im',
                sizes: [{
                    width: 293,
                    height: 220,
                    suffix: "_low",
                    quality: 30
                }]
            },


            files: [{
                expand: true,
                src: ['*.{gif,jpg,png}'],
                cwd: 'views/images/',
                dest: 'images-Resized/'
            }]
        }
    },
    uglify: {
        my_target: {
            files: {
                'dest/output1.min.js': ['dist/js/perfmatters.js']
            }
        }
    }
});

// Load the plugin that provides the "responsive-images" task.
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['jshint', 'responsive_images', 'uglify']);
};
