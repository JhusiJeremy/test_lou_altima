
var gulp = require('gulp'), 
  browserSync = require('browser-sync').create(), 
  minify = require('gulp-minify'), 
  cleanCSS = require('gulp-clean-css'), 
  plumber = require('gulp-plumber'), 
  sass = require('gulp-sass');

gulp.task('serve', ['sass', 'js', 'html'] , function() { 
  browserSync.init({ 
    server: "./dist"
  });
  gulp.watch("src/app/sass/**/*.scss", ['sass']); 
  gulp.watch("src/app/scripts/**/*.js", ['js']); 
  gulp.watch("src/app/**/*.html", ['html']); 
  gulp.watch("dist/**/*.html").on("change",browserSync.reload); 
});

gulp.task('sass', function() { 
  return gulp.src("src/app/sass/**/*.scss") 
    .pipe(plumber()) 
    .pipe(sass.sync().on('error', sass.logError)) 
    .pipe(sass({outputStyle:"compact"})) 
    .pipe(gulp.dest("dist/styles")) 
    .pipe(browserSync.stream()); 
});

gulp.task('js', function(){ 
  return gulp.src('src/app/scripts/**/*.js') 
    .pipe(plumber()) 
    .pipe(minify()) 
    .pipe(gulp.dest("dist/scripts")) 
    .pipe(browserSync.stream()); 
});

gulp.task('html', function() { 
  return gulp.src("src/app/*.html") 
    .pipe(plumber()) 
    .pipe(gulp.dest("dist/")) 
    .pipe(browserSync.stream()); 
});

gulp.task('default', ['serve']);


