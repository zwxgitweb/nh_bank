var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    fs = require('fs'),
    path = require('path');
    // mock = require('mockjs');
gulp.task('webserver', function () {
    gulp.src('.')
    .pipe(webserver({
        port: 8080,
        host: 'localhost',
        livereload: true, // 自动刷新浏览器
        // open: true, // 自动打开浏览器
        middleware: function (req, res, next) {
            var data = {
                name: 'zs',
                age: 18,
                sex: 'boy'
            }
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*'
            })
            // res.setHeader('Access-Control-Allow-Origin', '*');
            if (req.url === '/getdata') {
                res.end(JSON.stringify(data));
            } else {
                var urlName = req.url.split('/')[1];
                var fileName = path.join(__dirname, 'data', urlName + '.json');
                fs.exists(fileName, function (exist) {
                    if (exist) {
                        fs.readFile(fileName, function (err, data) {
                            if (err) return console.error(err);
                            res.end(data);
                        })
                    } else {
                        res.end('not the url');
                    }
                })
            }
        }
    }));
});
gulp.task("watch", function () {
    gulp.watch(["./css/*.sass"], ["webserver"]);
});
gulp.task('default', ['webserver', 'watch']);