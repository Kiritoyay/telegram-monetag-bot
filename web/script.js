let energia = 1000;

const energiaTexto = document.getElementById("energy");
const playBtn = document.getElementById("play");
const adBtn = document.getElementById("ad");

function atualizarEnergia() {
    energiaTexto.innerText = energia;
}

playBtn.onclick = () => {
    if (energia >= 100) {
        energia -= 100;
        atualizarEnergia();
        alert("🌱 Você gastou 100 de energia!");
    } else {
        alert("⚠️ Energia insuficiente! Assista a um anúncio.");
    }
};

adBtn.onclick = async () => {
    try {
        await show_11315148();

        energia += 10;

        if (energia > 1000) {
            energia = 1000;
        }

        atualizarEnergia();

        alert("✅ Você ganhou +10 de energia!");
    } catch (e) {
        alert("❌ O anúncio não foi concluído.");
    }
};

atualizarEnergia();
