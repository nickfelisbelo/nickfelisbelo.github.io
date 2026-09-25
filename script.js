const habilidades = document.querySelectorAll(".habilidade");

habilidades.forEach((habilidade) => {
    habilidade.addEventListener("mousemove", (evento) => {
        const area = habilidade.getBoundingClientRect();

        const x = evento.clientX - area.left;
        const y = evento.clientY - area.top;

        habilidade.style.setProperty("--mouse-x", `${x}px`);
        habilidade.style.setProperty("--mouse-y", `${y}px`);
    });

    habilidade.addEventListener("mouseleave", () => {
        habilidade.style.setProperty("--mouse-x", "50%");
        habilidade.style.setProperty("--mouse-y", "50%");
    });
});
