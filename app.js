function pesquisar() {

let section = document.getElementById("resultados-pesquisa")

let resultados = ""

for (let dado of artistas ) {
    resultados += `
  <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
                <a href=${dado.instagram} target="_blank">Instagram</a>
            </div>
`   
}

section.innerHTML = resultados

}
