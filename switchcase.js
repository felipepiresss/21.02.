const sortear = () => {
    var nomes = [ "Pires", "Gabriel", "Chevro", "Meca"];

    let h1Nome = document.getElementById("nome");

    let achouNumero = false;
    let numeroSorteado;

    while (achouNumero == false) {
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        } 
    }

    switch (numeroSorteado) {
        case 0:
            h1Nome.innerText = nomes[numeroSorteado];
            break;

        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
            break;

        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;

        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;

        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;

            default:
                h1Nome.innerText = "Ops! Nome não consta na lista";
                break;
    }
    h1Nome.innerText += "o numero sorteado foi: " + numeroSorteado;
}
