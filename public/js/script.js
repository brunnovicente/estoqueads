function excluirProduto(id){
    if(confirm('Tem certeza que deseja excluir o Produto "'+id+'"?')){
        window.location.href='/produto/excluir/'+id;
    }
}