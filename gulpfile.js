'use strict';

var gulp = require('gulp'),
	path = require('path'),
	csstime = require('csstime-gulp-tasks');

var NODE_MODULES_DIR = 'node_modules',
	DEST_DIR = 'build',
	DEST_LIBS_DIR = path.join(DEST_DIR, 'lib');

csstime.loadGulpTasks(gulp, {
	publicRootDir: 'src',
	cdnPath: 'blocks/',
	destinationDir: path.join('..', DEST_DIR),
	temporaryDir: path.join('..', DEST_DIR, '__tmp'),
	componentsDir: 'blocks',
	componentsRootDir: 'src'
});

gulp.task('publish-font-awesome', function () {
	return gulp.src(path.join(
			NODE_MODULES_DIR,
			'font-awesome',
			'fonts',
			'*'
		))
		.pipe(gulp.dest(path.join(DEST_LIBS_DIR, 'font-awesome')));
});

gulp.task('publish-snabbt', function () {
	return gulp.src(path.join(
			NODE_MODULES_DIR,
			'snabbt.js',
			'snabbt.min.js'
		))
		.pipe(gulp.dest(path.join(DEST_LIBS_DIR)));
});

gulp.task('publish-libs', ['publish-font-awesome', 'publish-snabbt']);

gulp.task('watch', ['publish-libs', 'csstime-mode-watch']);
gulp.task('debug', ['publish-libs', 'csstime-mode-debug']);
gulp.task('release', ['publish-libs', 'csstime-mode-release']);

gulp.task('default', ['release']);