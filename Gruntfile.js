module.exports = function(grunt) {
grunt.initConfig({
    serve: {
        options: {
            port: 8080
        }
    }
});


grunt.loadNpmTasks('grunt-serve');
grunt.registerTask('default',
                   ['serve']);
};

