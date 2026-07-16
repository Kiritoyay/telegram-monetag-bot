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
    } catch (e) {
        // Nenhuma mensagem será exibida se o anúncio for fechado.
    }
};

atualizarEnergia();
