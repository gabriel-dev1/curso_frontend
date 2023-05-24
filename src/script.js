const students = [
    {
    nome: 'Maria', nota: 2,
    nome: 'Roger', nota: 7,
    nome: 'Marcos', nota: 4,
    nome: 'Jose', nota: 1,
    nome: 'Luana', nota: 9,
    nome: 'Carla,', nota: 6,
    nome: 'Lucas', nota: 6,
    nome: 'Joao', nota: 3
    }
]

const notasAltas = students.filter((student) => {
    return student.nota >= 6
})

const notasBaixas = students.filter((student) => {
    return student.nota <=5 
})

console.log(students)
console.log(notasAltas)
console.log(notasBaixas)

