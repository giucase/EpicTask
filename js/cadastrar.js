document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const filme = {
        id: "id_" + new Date().getTime(),
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value,
        cartaz: form.cartaz.value
    }

    validar(filme)

    salvar(filme)

    function salvar (){
        const filmes = JSON.parse(localStorage.getItem("filmes")) || []
        filmes.push(filme)
        localStorage.setItem("filmes", JSON.stringify(filmes))
        window.location.href ="index.html"
    }

    function validar(tarefa){
        limparErros()
    
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
    
     //Todo precorrer arry
    function limparErros(){
        const campos = document
            .querySelectorAll("input.is-error, textarea.is-error")
        console.log(campos)
       
        campos
            .forEach((input) => {input.classList.remove("is-error")})
        document.querySelectorAll(".nes-field span")
            .forEach(span => span.innerText = "")
    }
    
    

})

