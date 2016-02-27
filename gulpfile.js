var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

gulp.task('compress' , function(){
	return gulps.src('./uncompressed')
		.pipe(plugins.imagemin({
			progressive : true,
			svgoPlugins : [
				{ removeViewBox : false },
				{ cleanupIDs : false },
			],
			use : [plugins.pngquant()]
		}))
	.pipe(gulp.dest('./compressed'));
});