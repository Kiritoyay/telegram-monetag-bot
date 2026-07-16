let energia = 1000;

const energiaTexto = document.getElementById("energia");
const playBtn = document.getElementById("play");
const adBtn = document.getElementById("ad");

function atualizarEnergia() {
    energiaTexto.innerText = `⚡ Energia: ${energia}/1000`;
}

playBtn.onclick = () => {
    if (energia >= 100) {
        energia -= 100;
        atualizarEnergia();
        alert("🌱 Você plantou!");
    } else {
        alert("⚠️ Energia insuficiente!");
    }
};

adBtn.onclick = () => {
    // Aqui depois entra o anúncio da Monetag

    energia += 10;

    if (energia > 1000) {
        energia = 1000;
    }

    atualizarEnergia();

    alert("✅ +10 Energia!");
};

atualizarEnergia();
