const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
]

function buscarProdutoPorID(id) {
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}



app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Compre aqui!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});