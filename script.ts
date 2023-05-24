function multiplicar(a: number, b: number) {
    return a * b
}

function dizOi(name: string)  {
    return `Olá ${name}`
}

const result = multiplicar(4,6)
console.log(result)

const result2 = dizOi('Roger')
console.log(result2)

//---------------

const teste1 = (a:number, b:number) => {
    return a * b
}

const teste2 = (name:string) => {
    return `oi ${name}`
}

console.log(teste1(2,3))

console.log(teste2('carlos'))