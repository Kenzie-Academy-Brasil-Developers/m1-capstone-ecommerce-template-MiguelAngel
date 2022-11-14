// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "../img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "../img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"], 
  },
  {
    id: 3,
    img: "../img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "../img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "../img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "../img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];

let carrinho = []



for(let i = 0; i < data.length; i++){

  let li = document.createElement('li')
  li.className = 'post'
  let a = document.createElement('a')
  li.appendChild(a)

  let img = document.createElement('img')
  img.src = data[i].img
  a.appendChild(img)
  let h3 = document.createElement('h3')
  h3.innerText = data[i].tag.join(",")
  a.appendChild(h3)
  let h2 = document.createElement('h2')
  h2.className = 'nome-produtos'
  h2.innerText = data[i].nameItem
  a.appendChild(h2)
  let h4 = document.createElement('h4')
  h4.innerText = data[i].description
  a.appendChild(h4)
  let span = document.createElement('span')
  span.innerText = 'R$' + data[i].value
  a.appendChild(span)
  let button = document.createElement('button')
  //button.addEventListener('click', adicionarCarrinho(data[i]))
  button.innerText = data[i].addCart
  button.className = 'adicionar'
  button.setAttribute('id', data[i].id)
  a.appendChild(button)
  




  document.getElementById('lista-card').appendChild(li)


}









let botoesProdutos = document.querySelectorAll('.adicionar')


for(let i = 0; i < botoesProdutos.length; i++){
    let botao = botoesProdutos[i];

    botao.addEventListener('click', function(e){
      let idElemento = e.target.id
      let id = parseInt(idElemento)
      let produto = procuraProduto(id, data)
      //console.log(produto)
      let produtoElemento = criarCardFavorito(produto)

      let listaCarrinho = document.querySelector('#addCarrinho')

      listaCarrinho.appendChild(produtoElemento)
    })
}

function procuraProduto(id, lista){
  
  for(i = 0; i < lista.length; i++){
    let produto = lista[i]
    if(produto.id == id){
      return produto
    }
  }
  return "Produto não encontrado!"
}

//criando card carrinho
function criarCardFavorito(produto){
console.log(produto)
  let liC = document.createElement('li')
  liC.id = produto.id
  let imgC = document.createElement('img')
  let h2C = document.createElement('h2')
  let precoC = document.createElement('span')
  let buttonC = document.createElement('button')

  carrinho.push(produto)

  let divC = document.createElement('div')
  divC.className = 'row'
  precoC.className = 'distancia'
  imgC.src = produto.img
  h2C.innerText = produto.nameItem
  buttonC.innerHTML = 'Remover'
  precoC.innerText = 'R$' + produto.value
  buttonC.addEventListener('click', function(e){
      liC.remove()
      carrinho.splice(carrinho.indexOf(produto), 1)
      let pQuantidade = document.getElementById('quantidade')
      pQuantidade.innerText = carrinho.length
      let spanPreco = document.getElementById('preco')
      spanPreco.innerText = carrinho.map(el => el.value).reduce((a,b) => a+b) 
  })
  buttonC.id = produto.id
  buttonC.classList.add('adicionar')
  document.getElementById('#quantidade')
  let pQuantidade = document.getElementById('quantidade')
  pQuantidade.innerText = carrinho.length
  let spanPreco = document.getElementById('preco')
  spanPreco.innerText = carrinho.map(el => el.value).reduce((a,b) => a+b) 

  liC.appendChild(imgC)
  divC.appendChild(h2C)
  divC.appendChild(precoC)
  liC.appendChild(buttonC)
  liC.appendChild(divC)

  return liC

}
