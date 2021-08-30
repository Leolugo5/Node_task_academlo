const capitalizeLetters = (str) => {
    let arr = str.toLowerCase().split(" ");
    let arrRes = arr.map(function(arr) {
        return arr.replace(arr.charAt(0), arr.charAt(0).toUpperCase());
    })

    return arrRes.join(" ");
}

module.exports = {
    capitalizeLetters
}