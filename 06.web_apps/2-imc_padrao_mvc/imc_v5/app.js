const $altura = document.querySelector("#altura");
const $peso = document.querySelector("#peso");
const $imc = document.querySelector("#imc");

function calcule_imc() {
    model.peso = Number($peso.value);
    model.altura = Number($altura.value);
    atualize_imc(model.imc());
};

function atualize_imc(imc) {
    $imc.innerText = "imc = " + imc.toFixed(2);
}

$peso.onkeyup = calcule_imc;
$altura.onkeyup = calcule_imc;
