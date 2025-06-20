// acesso ao icone (botao)
const botoesExpandir = document.querySelectorAll(".material-symbols-outlined");

// funcao para expandir o conteudo do projeto
botoesExpandir.forEach(botao => {
    botao.addEventListener("click", () => {
        // div que envolve o botao
        const containerExpandir = botao.parentElement;
        // retorna proximo elemento irmao
        const projeto = containerExpandir.nextElementSibling;
        // expande a div ou recolhe
        projeto.classList.toggle("ativo");

        // efeito de giro no icone
        if (projeto.classList.contains("ativo")) {
            botao.classList.add("girando");
        } else {
            botao.classList.remove("girando");
        }
    });
});