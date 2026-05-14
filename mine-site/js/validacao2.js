const Formulario = document.getElementById("meuFormulario");

Formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const sexo = document.getElementById("sexo");
    const checkobox = document.getElementById("s");
    const Idade = document.getElementById("Idade");
    const Email = document.getElementById("Email");
    const Senha = document.getElementById("Senha");
    const CPF = document.getElementById("CPF");


    // validação
    if (nome.value.trim() === "") {
        alert("colocar o nome");
        return false;
    }
    if (telefone.value.trim() === "") {
        alert("colocar o telefone");
        return false;
    }
    if (Idade.value.trim() === "") {
        alert("colocar idade");
    }
    if (Email.value.trim() === "") {
        alert("colocar Email");
    }
    if (Senha.value.trim() === "") {
        alert("colocar Senha");
    }
    if (CPF.value.trim() === "") {
        alert("colocar CPF");
    }


    // limpar campos
    nome.value = "";
    telefone.value = "";
    Idade.value = "";
    Email.value = "";
    Senha.value = "";
    CPF.value = "";

    alert("formulário enviado!");
});
