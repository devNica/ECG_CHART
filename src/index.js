let express = require('express');
let hbs = require('express-handlebars');
let path = require('path');
let cors = require('cors');

let app = express();
let PORT = process.env.PORT || 4200;

//CONFIGURACION DE HANDLEBARS COMO MOTOR DE PLANTILLAS
app.engine('hbs', hbs({ defaultLayout: 'base', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));

//USO DE MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: false }))

//ENRUTADORES
let indexRouter = require('./routes/index');
let tutorialRouter = require('./routes/tutorial');

app.use('/', indexRouter);
app.use('/tutorial', tutorialRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})