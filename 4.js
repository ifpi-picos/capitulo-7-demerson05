const produto = {
    nome: "Smart TV 43",
    preco: 1.512,
    quantidade: 5,

    valorTotal: function(){
        return (this.preco * this.quantidade)
    }

};

console.log("Valor total do estoque: " + produto.valorTotal().toFixed(3))