var gulp = require("gulp");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");
var rename = require("gulp-rename")

gulp.task("kitty", function(){
  console.log("hello");
  return gulp.src("main.SCSS")
  .pipe(sass())
  .pipe(rename("min.style.css"))
  .pipe(cleanCSS())
  .pipe(gulp.dest("./dist"));
});
