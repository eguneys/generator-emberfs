var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    morgan = require('morgan');


var app = express();

var router = express.Router();

app.use(require('connect-livereload')());

var expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs({ extname: '.hbs',
                                defaultLayout:'main',
                                layoutsDir: 'app/views/layouts'}));
app.set('views', path.join(__dirname, '..', 'app', 'views'));
app.set('view engine', '.hbs');

//router.use(favicon(path.join(__dirname, '..', 'public', 'assets', 'favicon.ico')));
router.use(morgan("dev"));
router.use('/public', express.static(path.join(__dirname, '..', 'public'), { maxAge: 864000000 }));

router.get('/', function(req, res) {
    res.render('index');
});

app.use('/', router);

app.use('*', function(req, res) { 
    //res.redirect(301, '/');
    res.render('index');
});

app.listen(3000);
