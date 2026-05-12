const Formulario = document.getElementById("meuFormulario");

Formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const sexo = document.getElementById("sexo");
    const checkobox = document.getElementById("s");

    // validação
    if (nome.value.trim() === "") {
        alert("preencha o nome");
        return false;
    }
    if (telefone.value.trim() === "") {
        alert("preecha o telefone");
        return false;
    }


    // limpar campos
    nome.value = "";
    telefone.value = "";
    checkobox.checked = false;

    alert("formulário enviado!");
});
