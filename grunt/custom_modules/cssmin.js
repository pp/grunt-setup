exports.task = {
  my_target: {
    files: [{
      expand: true,
      cwd: '../static/css/',
      src: ['*.css', '!*.min.css'],
      dest: '../static/css/',
      ext: '.min.css'
    }]
  }
};
