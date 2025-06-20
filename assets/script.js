const botoesExpandir = document.querySelectorAll(".material-symbols-outlined");

botoesExpandir.forEach(botao => {
    botao.addEventListener("click", () => {
        const containerExpandir = botao.parentElement;
        const projeto = containerExpandir.nextElementSibling;
        projeto.classList.toggle("ativo");

        if (projeto.classList.contains("ativo")) {
            botao.classList.add("girando");
        } else {
            botao.textContent = "stat_minus_1";
            botao.classList.remove("girando");
        }
    });
});