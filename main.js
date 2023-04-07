$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000")
    $("#cpf").mask("000000000")
    $("#cep").mask("00000-000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "Registre o nome",
            email: "Registre um email válido",
            telefone: "Registre o telefone",
            cpf: "Registre o cpf",
            endereço: "Registre o endereço",
            cep: "Registre o cep"
        },
    })
})