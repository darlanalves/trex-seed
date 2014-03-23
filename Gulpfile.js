var gulp = require('gulp'),
	bundle = require('gulp-bundle'),

	bundleTask = bundle('./public/index-dev.html', {
		appDir: 'public',
		buildDir: 'public',
		minify: true
	});

gulp.task('bundle', bundleTask);
gulp.task('watch', function() {
	gulp.watch('./public/index-dev.html', ['bundle']);
});

gulp.task('build', ['bundle']);
gulp.task('default', ['watch']);