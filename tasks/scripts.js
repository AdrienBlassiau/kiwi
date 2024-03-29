const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const flowRemoveTypes = require('gulp-flow-remove-types');
const sourcemaps = require('gulp-sourcemaps');
const inject = require('gulp-inject-string');

function build() {
  return src('app/**/*.js')
    .pipe(flowRemoveTypes())
    .pipe(babel())
    .pipe(inject.replace('process.env.NODE_ENV', '"production"'))
    .pipe(dest('build'));
}

function developBuild() {
  return src('app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(flowRemoveTypes())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(dest('build'));
}

function developBuildImages() {
  return src('app/**/*.png').pipe(dest('build'));
}

function developBuildCSS() {
  return src('app/**/*.css').pipe(dest('build'));
}

function developBuildSub() {
  return src('app/**/*.vtt').pipe(dest('build'));
}

build.displayName = 'build-scripts';
developBuild.displayName = 'dev-build-scripts';
developBuildImages.displayName = 'dev-build-images';
developBuildCSS.displayName = 'dev-build-css';
developBuildSub.displayName = 'dev-build-sub';

exports.build = build;
exports.developBuild = developBuild;
exports.developBuildImages = developBuildImages;
exports.developBuildCSS = developBuildCSS;
exports.developBuildSub = developBuildSub;
