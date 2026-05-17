var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup (opcional)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 1. Servir Arquivos Estáticos do Angular
const angularDistPath = path.join(__dirname, 'frontend/dist/frontend/browser');
app.use(express.static(angularDistPath));

// 2. CONFIGURAÇÃO DO JWT E ROTA DE LOGIN (Deve vir ANTES dos roteadores de API)
const JWT_SECRET = process.env.JWT_SECRET || 'chave_ultra_&!$_secreta_pordosol';

app.post('/api/login', (req, res) => {
  const { codigoMorador, senha } = req.body;

  if (codigoMorador === 'pordosol123' && senha === 'morador2026') {
    // Gera um token que expira em 1 dia
    const token = jwt.sign({ id: codigoMorador }, JWT_SECRET, { expiresIn: '1d' });
    
    return res.json({ 
      sucesso: true, 
      token: token,
      mensagem: 'Login realizado com sucesso!'
    });
  }

  return res.status(401).json({ 
    sucesso: false, 
    mensagem: 'Código do morador ou senha incorretos.' 
  });
});

// 3. Demais Rotas de API
app.use('/api', indexRouter);
app.use('/users', usersRouter);

// 4. Fallback Angular (Trata as rotas do front-end e evita erro 404 ao atualizar)
app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.csr.html'));
});

// 5. Captura erro 404 global da API
app.use(function(req, res, next) {
  next(createError(404));
});

// 6. Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Inicializa servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor condomínio rodando com sucesso na porta ${PORT}`);
});