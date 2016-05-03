/* jshint -W079 */
(function() {
    var bodyParser = require('body-parser'),
        express = require('express'),
        path = require('path'),
        app = express();
        
        // set to load html (can not render html without ejs)
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        
        // set public folder and view folder
        app.use(express.static(path.join(__dirname, 'public')));
        app.set('views', __dirname + '/views');
        
        // Create application/x-www-form-urlencoded parser
        app.use(bodyParser.urlencoded({ extended: true }));
        
        app.get('*', function(req, res){
            res.render('index.html');
        });
        
        // start server
        var server = app.listen(process.env.PORT || 5000, function () {
            var port = server.address().port;
            console.log("devnest app started at port %s", port);
        });

})();
