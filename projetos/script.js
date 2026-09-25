const cursorGlow = document.querySelector(".cursor-glow");
const thorfinn = document.querySelector(".thorfinn img");
const projetos = document.querySelectorAll(".projeto");

document.addEventListener("mousemove", (evento) => {
    const x = evento.clientX;
    const y = evento.clientY;
    const hue = Math.round((x / window.innerWidth) * 360);

    document.documentElement.style.setProperty("--hue", hue);

    cursorGlow.style.left = `${x}px`;
    cursorGlow.style.top = `${y}px`;

    const distanciaX = x - window.innerWidth / 2;
    const distanciaY = y - window.innerHeight / 2;

    const movimentoX = distanciaX * 0.015;
    const movimentoY = distanciaY * 0.015;

    thorfinn.style.transform = `translate(${movimentoX}px, ${movimentoY}px)`;
    thorfinn.style.filter = `brightness(0) invert(1) drop-shadow(0 0 25px hsla(${hue}, 100%, 60%, 0.8))`;
});

projetos.forEach((projeto) => {
    projeto.addEventListener("mousemove", (evento) => {
        const area = projeto.getBoundingClientRect();
        const x = evento.clientX - area.left;
        const y = evento.clientY - area.top;

        projeto.style.setProperty("--card-x", `${x}px`);
        projeto.style.setProperty("--card-y", `${y}px`);
    });
});