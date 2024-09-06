function pesquisar() {

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value
campoPesquisa = campoPesquisa.toLowerCase()

if (campoPesquisa == ""){
    section.innerHTML = "<p>Nenhum Mc foi encontrado</p>"
    return
}

let resultados = "";
let titulo = "";
let descricao = "";

for (let dado of artistas ) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        resultados += `
  <div class="item-resultado">
             <div class="item-resultado-imagem">
                        <img src="${dado.imagem}"  alt="${dado.alt}">
                    </div>  
            <div class="item-resultado-infos">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="titulos-mcs">${dado.titulos}</p>
                <a class="instagram"href=${dado.instagram} target="_blank">Instagram</a>
            </div>
</div>
`;
    }
}

if (!resultados) {
    resultados = "<p>Nenhum Mc foi encontrado</p>"
}

section.innerHTML = resultados
}

function mostrarTodos() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    artistas.forEach(artista => {
        resultados += `
            <div class="item-resultado">
                <div class="item-resultado-imagem">
                    <img src="${artista.imagem}" alt="${artista.alt}">
                </div> 
                <div class="item-resultado-infos">
                    <h2>
                        <a href="#" target="_blank">${artista.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${artista.descricao}</p>
                    <p class="titulos-mcs">${artista.titulos}</p>
                    <a class="instagram" href="${artista.instagram}" target="_blank">Instagram</a>
                </div>
            </div>
        `;
    });

    section.innerHTML = resultados;
}
