var gulp = require('gulp'),
	pngquant = require('imagemin-pngquant'),
	plugins = require('gulp-load-plugins')();

gulp.task('compress' , function(){
	return gulp.src('./uncompressed')
		.pipe(plugins.imagemin({
			progressive : true,
			svgoPlugins : [
				{ removeViewBox : false },
				{ cleanupIDs : false },
			],
			use : [pngquant()]
		}))
	.pipe(gulp.dest('./compressed'));
});