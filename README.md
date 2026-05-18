### 🌅 Site Pôr do Sol — Documentação Oficial

Um projeto moderno composto por Angular 17 (CSR/Prerender) no frontend e Express.js no backend, empacotado para rodar em produção com PM2.
Ideal para aplicações mobile-first, rápidas e leves.

### 📦 Estrutura do Projeto

```
pordosol/
├── app.js                     # Servidor Express
├── routes/                    # Rotas de API
├── frontend/                  # Aplicação Angular
│   ├── src/
│   └── dist/frontend/browser/ # Build final (CSR)
└── package.json
```

### 🚀 Tecnologias Utilizadas

    Node.js + Express — Servidor backend e entrega do build Angular

    Angular 17 — Frontend moderno, mobile-first

    PM2 — Gerenciamento de processos em produção

    Morgan / Cookie-Parser — Utilidades para logging e parsing

    Jade (Pug) — Apenas para páginas de erro internas do Express


### ⚙️ Como Rodar o Projeto

## 1. Instalar dependências

npm install

## 2. Gerar o build do Angular

cd frontend
ng build
cd ..

# O build será gerado em:

frontend/dist/frontend/browser/

# Incluindo o arquivo principal:

index.csr.html

### 🌐 Rodando o Servidor Express

## Modo direto:

node app.js

Acesse: http://localhost:3000

### 🔥 Rodando em Produção com PM2

pm2 start app.js --name site-pordosol

### Reiniciar após alterações:

pm2 restart site-pordosol

### Ver logs:

pm2 logs site-pordosol


### 🧠 Como o Servidor Funciona

O Express:

    Serve arquivos estáticos do Angular

    Entrega o arquivo index.csr.html para qualquer rota não-API

    Mantém rotas de API separadas

    Usa Jade apenas para páginas de erro internas

## 📁 Trecho do app.js (resumo)

const angularDistPath = path.join(__dirname, 'frontend/dist/frontend/browser');
app.use(express.static(angularDistPath));

app.use('/api', indexRouter);
app.use('/users', usersRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.csr.html'));
});

### 🛠 Comandos Úteis

    Reiniciar servidor

    Gerar novo build Angular

    Ver logs do PM2

    Testar servidor com curl

### 📄 Licença

Projeto privado — uso interno.