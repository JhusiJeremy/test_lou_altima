
var gulp = require('gulp'), 
  browserSync = require('browser-sync').create(), 
  minify = require('gulp-minify'), 
  cleanCSS = require('gulp-clean-css'), 
  plumber = require('gulp-plumber'), 
  sass = require('gulp-sass');

gulp.task('serve', ['sass', 'html'] , function() { 
  browserSync.init({ 
    server: "./dest"
  });
  gulp.watch("src/app/sass/**/*.scss", ['sass']); 
  //gulp.watch("src/app/scripts/**/*.js", ['js']); 
  gulp.watch("src/app/**/*.html", ['html']); 
  gulp.watch("dest/**/*.html").on("change",browserSync.reload); 
});

gulp.task('sass', function() { 
  return gulp.src("src/app/sass/**/*.scss") 
    .pipe(plumber()) 
    .pipe(sass.sync().on('error', sass.logError)) 
    .pipe(sass({outputStyle:"compact"})) 
    .pipe(gulp.dest("dest/styles")) 
    .pipe(browserSync.stream()); 
});

// javscript files operate 

//gulp.task('js', function(){ 
//return gulp.src('src/app/scripts/**/*.js') 
//.pipe(plumber()) 
//.pipe(minify()) 
//.pipe(gulp.dest("dest/scripts")) 
//.pipe(browserSync.stream()); 
//});


//html 
gulp.task('html', function() { 
  return gulp.src("src/app/*.html") 
    .pipe(plumber()) 
    .pipe(gulp.dest("dest/")) 
    .pipe(browserSync.stream()); 
});

gulp.task('default', ['serve']);


