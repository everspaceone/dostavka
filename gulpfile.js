global.$ = {
    gulp:require('gulp'),
    gp:require('gulp-load-plugins')(),
    bs:require('browser-sync').create(),
    sass:require('gulp-sass')(require('sass')),
    path:{
        serverDir:'./app/dist/',
        tasks: require('./gulp/config/allfile'),
        src:{
            html:'./app/src/*.{pug,jade,html}',
            css:'./app/src/styles/*.*',
            js:'./app/src/js/*.js',
            font:'./app/src/fonts/*.*',
            img: './app/src/images/*.*',
            video:'./app/src/videos/*.*'
        },
        build:{
            html:'./app/dist/',
            css:'./app/dist/styles/',
            js:'./app/dist/js/',
            font:'./app/dist/fonts/',
            img: './app/dist/images/',
            video:'./app/dist/videos/'
        },
        watch:{
            html:['./app/src/*.{pug,jade,html}','./app/src/views/**/*.{pug,jade,html}'],
            css:['./app/src/styles/*.scss','./app/src/styles/**/*.scss'],
            js:'./app/src/js/*.js/',
            font:'./app/src/fonts/*.*',
            img: './app/src/images/*.*',
            video:'./app/src/videos/*.*'
        }
    }
}

$.path.tasks.forEach(task => require(task)());
$.gulp.task('default',$.gulp.series($.gulp.parallel('html','css','js','font','video','img','watch','serve')))