const reverseInt = (number) => {
    if(typeof number === 'number' && Number.isInteger(number)) {
        if(number < 0) {
            const positiveConvertion = Math.abs(number);
            const goodNumber = Number(positiveConvertion.toString().split('').reverse('').join(''));
            const negaiveAgain = -Math.abs(goodNumber)
            return negaiveAgain
        }
        return Number(number.toString().split('').reverse('').join(''));
    }
    throw new Error("Tipo de dato no admitido.");
}

module.exports = {
    reverseInt
}