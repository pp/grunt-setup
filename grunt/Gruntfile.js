module.exports = function( grunt ) {

  grunt.initConfig({
    watch: {
      options: {
        atBegin: true
      },
      files: '../static/css/sass/**/*.scss',
      tasks: ['sass', 'cssmin']
    },
    sass: require( './custom_modules/sass' ).task,
    cssmin: require( './custom_modules/cssmin' ).task
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
