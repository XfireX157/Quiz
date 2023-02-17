function stringCounter(letter, string) {
    let cont = 0
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if(letter == element){
            cont++  
        }
    }

    // console.log(cont)
}

stringCounter('o', 'gustavooo')


function myFunction(a, b, c, d, e, f) {
    // let soma = a + b
    // let subtracao = soma - c
    // let mult = subtracao * d
    // let div = mult / e
    // return div ** f

    return ((a + b - c) * d / e) ** f
} 

console.log(myFunction(6, 5, 4, 3, 2, 1)) //10.5