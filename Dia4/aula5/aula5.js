function exibirDados() {
    let nome = window.document.getElementById("nome").value;
    let idade = window.document.getElementById("idade").value;
    let carteira = window.document.getElementById("radioCarteiraSim").checked;
    let veiculo = window.document.getElementById("radioVeiculoSim").checked;
    let res = window.document.getElementById("resultado");

    res.innerHTML = "";

    if (idade < 18 || !carteira) {
        res.innerHTML = `${nome}, você não pode dirigir.`;
    } else if (!veiculo) {
        res.innerHTML = `${nome}, você pode dirigir mas não tem um carro.`;
    } else {
        res.innerHTML = `${nome}, você será motorista!`;
    }
}
