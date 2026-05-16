var express = require('express');
var router = express.Router();
var path = require('path');

/* Captura QUALQUER rota (*) e entrega o index.html do Angular */
router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../frontend/dist/frontend/browser/index.html'));
});

module.exports = router;