const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "TENIS GAZELLE BOLD", preco: "R$699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img1.jpg"},
  {id: 2, nome: "TENIS NIKE ORIGINAL", preco: "R$999,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img2.jpg"},
  {id: 3, nome: "TENIS ADIDAS AZUL", preco: "R$688,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img3.jpg"},
  {id: 4, nome: "TENIS PUMA BRANCO", preco: "R$299,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img4.jpg"},
  {id: 5, nome: "TENIS ADIDAS ESPORTIVO", preco: "R$3999,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img5.jpg"},
  {id: 6, nome: "TENIS NIKE AIR", preco: "R$599,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img6.jpg"},
  {id: 7, nome: "TENIS NIKE PLUMAS", preco: "R$899,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img7.jpg"},
  {id: 8, nome: "TENIS NIKE ESPORTIVO", preco: "R$999,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img8.jpg"},
  {id: 9, nome: "TENIS PUMA BMW", preco: "R$199,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img9.jpg"},
  {id: 10, nome: "TENIS BALENCIAGA", preco: "R$6699,99", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img10.jpg"},
  {id: 11, nome: "TENIS BALENCIAGA MICKEY", preco: "R$7000", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img11.jpg"},
  {id: 12, nome: "TENIS BALENCIAGA ORIGINAL", preco: "R$10000", descricao:"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.", imagem: "img12.jpg"},
]

function buscarProdutoPorID(id) {
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}



app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produtos', {produto});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});