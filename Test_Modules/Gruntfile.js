module.exports = function(grunt) {
    'use strict';


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'step_definitions/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }

        },

        execute: {
            target: {
                src:['./node_modules/proui-utils/updateChromeDriver.js']
            }
        },

        shell: {
            options: {
                stdout:true
            }

        },
            protractor: {
            default: {
                options: {
                    keepAlive: false,
                   //configFile: 'Common_Template/Conf/protractor.cucumber.common.conf.js'
                    args: {suite: 'test',
                        params:{"login": {
                        "baseUrl":grunt.option('baseUrl'),
                        "username":grunt.option('username'),
                        "password":grunt.option('password'),
                        "adminusername":grunt.option('adminusername'),
                        "adminpassword":grunt.option('adminpassword')


                    }

                    }}
                },
            },
                
        test: {
            options: {
                keepAlive: false,
                configFile: grunt.option('conf'),
                args: {cucumberOpts:grunt.option('spec'),suite: grunt.option('suite')}
            },
        },

        browser:{
            options: {
                keepAlive: false,
                configFile: grunt.option('conf'),
                args: {cucumberOpts:grunt.option('spec'),suite: grunt.option('suite'), browser: grunt.option('browser')}
            },
        },

        noSuite: {
                options: {
                    keepAlive: false,
                    configFile: grunt.option('conf'),
                },
            },
            singlerun: {},
            auto: {
                keepAlive: false,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        },


    });

    var target = grunt.option('target') || 'def';

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-execute');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-shell-spawn');

    grunt.loadNpmTasks('grunt-protractor-runner');

    //grunt.loadNpmTasks('perfjankie');

    grunt.registerTask('default',  function(arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('execute:target');
            grunt.task.run('shell');
            grunt.task.run('protractor:default');

        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });

    grunt.registerTask('test',  function(arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('shell');
            grunt.task.run('protractor:test');

        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });

    grunt.registerTask('noSuite',  function(arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('shell');
            grunt.task.run('protractor:noSuite');

        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });


    grunt.registerTask('browser',  function(arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('shell');
            grunt.task.run('protractor:browser');

        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });


    grunt.registerTask('run', ['protractorperf']);
};
