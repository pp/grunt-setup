exports.task = {
  dist: {
    options: {
      sourcemap: 'none',
      style: 'nested',
      precision: 10,
      lineNumbers: false
    },
    files: [{
      expand: true,
      cwd: '../static/sass',
      src: ['**/*.scss'],
      dest: '../static/css',
      ext: '.css'
    }]
  }
};
