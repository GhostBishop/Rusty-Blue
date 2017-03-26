var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var htmlInjector = require("bs-html-injector");

gulp.task('sass', function(){
  gulp.src('sass/main.sass')
    .pipe(sass({includePaths: ['sass']}))
    .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync.use(htmlInjector, {
        files: "*.html"
    });
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function(){
  gulp.watch("sass/*.sass", ['sass']);
  gulp.watch("*.html", htmlInjector);
});
