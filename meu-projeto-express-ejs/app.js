const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 2, nome: "TENIS GAZELLE BOLD", preco: "R$999,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img2.jpg"},
  {id: 3, nome: "TENIS GAZELLE BOLD", preco: "R$688,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img3.jpg"},
  {id: 4, nome: "TENIS GAZELLE BOLD", preco: "R$299,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img4.jpg"},
  {id: 5, nome: "TENIS GAZELLE BOLD", preco: "R$3999,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img5.jpg"},
  {id: 6, nome: "TENIS GAZELLE BOLD", preco: "R$599,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img6.jpg"},
  {id: 7, nome: "TENIS GAZELLE BOLD", preco: "R$899,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img7.jpg"},
  {id: 8, nome: "TENIS GAZELLE BOLD", preco: "R$999,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img8.jpg"},
  {id: 9, nome: "TENIS GAZELLE BOLD", preco: "R$199,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img9.jpg"},
  {id: 10, nome: "TENIS GAZELLE BOLD", preco: "R$6699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img10.jpg"},
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