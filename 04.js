function somar() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    let soma = parseInt(numero1) + parseInt(numero2);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O resultado de ${numero1} + ${numero2} é ${soma}.`;
}