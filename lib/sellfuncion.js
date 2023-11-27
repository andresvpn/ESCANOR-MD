function diamantes(valor) {
    let resultado = 0;
    if(valor === 1) {
        resultado = 100
    } else if(valor === 2) {
        resultado = 200
    } else {
        resultado = valor * 100
    }
    return resultado;
}

function papel(valor) {
    let resultado = 0;
    if(valor === 1) {
        resultado = 50
    } else if(valor === 2) {
        resultado = 100
    } else {
        resultado = valor * 50
    }
    return resultado;
}

function validarnumero(texto) {
    var regex = /^[0-9]+$/;
    return regex.test(texto)
}

function cassino(valor) {
    let resultado = 0;
    if(valor === 1) {
        resultado = 20
    } else if(valor === 2) {
        resultado = 40
    } else {
        resultado = valor * 20
    }
    return resultado;
}

function xp(valor) {
    let resultado = 0;
    if(valor === 1) {
        resultado = 1
    } else if(valor === 2) {
        resultado = 2
    } else {
        resultado = valor * 1
    }
    return resultado;
}

module.exports = {
    diamantes,
    papel,
    cassino,
    xp,
    validarnumero
}