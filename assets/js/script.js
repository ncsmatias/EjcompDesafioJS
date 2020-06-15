function start() {

    res = document.getElementsByClassName("resultado")

    let cont = -1;

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++)
            res[++cont].value = mult(i, j)
    }

}

function mult(a, b) {
    return a * b;
}




