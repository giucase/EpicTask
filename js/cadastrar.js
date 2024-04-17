document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }


    validar(tarefa)

    console.log(tarefa)

})

function validar(tarefa){
    limparErros()

    if (tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "O Título é Obrigatório "
    }

    if (tarefa.descricao.trim() == "" ||tarefa.descricao.length < 10){
        document.querySelector("#descriao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "A Descrção deve ter pelo menos Dez caracteres"
    }
    if (tarefa.pontos.trim() == ""||tarefa.pontos.length <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText = "Pontos deve ser maior que Zero "
    }
}

function limparErros(){
    //Todo precorrer arry
    document
    .querySelectorAll("input .is-error, textarea is-error")
    .classList
    .remove("is-error")
}


