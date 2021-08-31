const reverseString = (str) => {
    if (typeof str === 'string' && str.length <= 15 && str.length > 1) {
        return str.split("").reverse().join("");
    } 
    throw new Error("Tipo de dato o longitud no admitidos");
}

module.exports = {
    reverseString
}
// ESTE SOLO ES UN COMENTARIO PARA UNA CONFIRMACION SOBRE GIT, POR LO QUE NO TIENE NADA QUE VER CON EL PROYECTO