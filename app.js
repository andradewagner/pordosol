var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup (Pode manter para suas páginas de erro de API se quiser)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 1. Servir os arquivos estáticos do Angular
const angularDistPath = path.join(__dirname, 'frontend/dist/frontend/browser');
app.use(express.static(angularDistPath));

// 2. Suas rotas de API do Express
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 3. O PULO DO GATO: Direcionar qualquer outra rota para o Angular
// Este bloco DEVE vir antes do tratamento de erro 404
app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
});

// 4. Se não for arquivo estático, nem rota de API, nem rota do Angular, aí sim dá 404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Exporta o app
module.exports = app;

// Inicializa o servidor na porta correta (Essencial para Render/Railway)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor condomínio rodando com sucesso na porta ${PORT}`);
});
