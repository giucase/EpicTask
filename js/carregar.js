const filmes = JSON.parse(localStorage.getItem("filmes")) || []

filmes.forEach(filme => Clipboard(filme))

function card (filmes){
    //``tamplate litters
    const cardFilmes = `
    <div class="nes-container with-title is-centered" id = "test_mamu">
    <p class="title">${filmes.titulo}O Fabricante de Lágrimas</p>
    <div class="image">
        <img src="https://br.web.img2.acsta.net/c_310_420/img/79/65/79659d1a2ffb16626dac9c43ee98ed2a.jpg"  width="75%">
    </div>
    <p>${filmes.descicao}Romance/Drama</p>
    <a href="#" class="nes-badge is-icon">
      <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
      <span class="is-primary">${filmes.pontos}Icons</span>
    </a>
    <progress
      class="nes-progress is-success"
      value="50"
      max="100"
    ></progress>
    <div id="botoes_mamu">
      <button type="button" class="nes-btn is-primary">-</button>
      <button onClick="dec('${filme.id}')" type="button" class="nes-btn is-primary">-</button>
      <button onClick="apagar('${filme.id}')" type="button" class="nes-btn is-error">Sumir</button>
      <button onClick="inc('${filme.id}')" type="button" class="nes-btn is-primary">+</button>
      <button type="button" class="nes-btn is-primary">+</button>
    </div>
  </div>
    
    ` 
    const card = document.createElement("div")
    card.id = filme.id
    card.innerHTML = cardFilmes
    document.querySelector("#lista-de-tarfas").appendChild(card)
}