var browserSync  = require('browser-sync');

module.exports = function (gulp, plugins) {
  return function() {
    browserSync({
      server: { 
        baseDir: 'src' 
      },
      notify: false
    });
  };
  
};
