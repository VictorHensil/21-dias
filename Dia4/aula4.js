function verificar(){
    let fome = window.document.getElementById("radioFome")
    let dinheiro = window.document.getElementById("radioDinheiro")
    let restaurante = window.document.getElementById("radioRestaurante")
    let res = window.document.querySelector(`div#resultado`)

    res.innerHTML = ""

    if (fome.checked && dinheiro.checked && restaurante.checked) {
        res.innerHTML = `Hoje o jantar será no seu restaurante preferido!`
    } else if (fome.checked && dinheiro.checked && !restaurante.checked) {
        res.innerHTML = `Peça um delivery!`
    } else if (fome.checked) {
        res.innerHTML = `Hoje a janta será em casa.`
    } else if (!fome.checked) {
        window.alert ("Volte quando estiver com fome.")
    }
}

// Fiz com o auxilio do chat