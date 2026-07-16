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
        alert("🌱 Você plantou!");
    } else {
        alert("⚠️ Energia insuficiente!");
    }
};

adBtn.onclick = () => {

    show_11315148().then(() => {

        energia += 10;

        if (energia > 1000) {
            energia = 1000;
        }

        atualizarEnergia();

        alert("✅ Você ganhou +10 de energia!");

    });

};

atualizarEnergia();
