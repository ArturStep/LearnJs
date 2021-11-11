let x = +prompt('Введите х:', '');
let n = +prompt('Введите n:', '');

function pow(x,n) {
    if(n % 1 == 0) return x ** n
}

alert (pow(x,n))