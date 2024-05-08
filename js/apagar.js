function apagar(id){
    const filme = JSON.parse(localStorage.getItem("filmes"))||[]
    const filmesAtualizadas = tarefas.filter(filme => filme.id != id)
    localStorage.setItem("tarefas", JSON.stringify(filmesAtualizadas))

    document.querySelector("#" + id).remove
}