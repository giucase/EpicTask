function inc(id){

    const filmes = JSON.parse(localStorage.getItem("filme"))||[]
    let filme= filmes.find(filme => filmes.id = id )
    filme.status += 10
    localStorage.setItem("filme", JSON.stringify(filme))

    document.querySelector("#" + id + "progress"). value+= 10

}

function dec(id){

    const filmes = JSON.parse(localStorage.getItem("filme"))||[]
    let filme= filmes.find(filme => filmes.id = id )
    filme.status -= 10
    if (filme.status <0) filme.status = 0
    localStorage.setItem("filme", JSON.stringify(filme))

    document.querySelector("#" + id + "progress"). value-= 10

}