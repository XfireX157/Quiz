const frame = (a, b) => {
    soma = "+"
    if (a > 0) {
        for (let i = 0; i < a; i++) {
            soma += '-'
        }
        soma += '+'
        for (let j = 0; j < b; j++) {  
            console.log(soma)
        }       
    }
}

frame(2, 2)