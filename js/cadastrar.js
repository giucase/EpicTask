document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value,
        cartaz: form.cartaz.value
    }

    validar(tarefa)

    function validar(tarefa){
        /*limparErros()*/
    
        if (tarefa.titulo.trim() == ""){
            document.querySelector("#titulo").classList.add("is-error")
            document.querySelector("#titulo-erro").innerText = "O Título é Obrigatório "
        }
        if (tarefa.descricao.trim() == "" || tarefa.descricao.length < 10){
            document.querySelector("#descricao").classList.add("is-error")
            document.querySelector("#descricao-erro").innerText = "A Descrção deve ter pelo menos Dez caracteres"
        }
        if (tarefa.pontos.trim() == ""|| tarefa.pontos.length <= 0){
            document.querySelector("#pontos").classList.add("is-error")
            document.querySelector("#pontos-erro").innerText = "Pontos deve ser maior que Zero "
        }
        if (tarefa.cartaz.trim() == ""){
            document.querySelector("#cartaz").classList.add("is-error")
            document.querySelector("#cartaz-erro").innerText = "O Cartaz é Obrigatório "
        }
    }
    
    /*function limparErros(){
        //Todo precorrer arry
        document
        .querySelectorAll("input .is-error, textarea is-error")
        .classList
        .remove("is-error")
    }*/
    
    console.log(tarefa)

})

