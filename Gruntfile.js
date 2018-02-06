module.exports = function(grunt){
    //配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '\n'
            },
            bulid: {
                src: 'js/ueditor.all.js',
                dest: 'dest/ueditor.all.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //注册任务
    grunt.registerTask('default', ['uglify']);
};