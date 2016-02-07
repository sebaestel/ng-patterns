module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-jslint');
    grunt.initConfig({
        jslint: {
            server: {
                src: [
                    '*.js'
                ],
                exclude: [
                    'bower_components/*.js',
                    'example.js'
                ],
                directives: {
                    node: true,
                    todo: true,
                    'plusplus': true,
                    'forin': true,
                    globals: {
                        'basquiat': true,
                        'd3': true,
                        'jasmine': true,
                        'angular': true,
                        'browser': true,
                        'element': true,
                        'by': true,
                        'io': true,
                        '_': false,
                        '$': true,
                        'jQuery': true,
                        'chroma': true
                    }
                }
            }
        }
    });
};
