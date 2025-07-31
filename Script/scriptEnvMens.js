function envM() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const conteudo = document.getElementById('conteudo').value;

    if (nome === "" || email === "" || conteudo === "") {
        document.getElementById('avisoContainer').style.display = "flex";
        document.getElementById('textAviso').innerHTML = "Por favor, preencha todos os campos!";

    }
    else {
        const numeroWhatsapp = "+244924494945";
        const mensagem = `Saudações! O meu nome é ${nome}, o meu correio electrônico é ${email} e o conteudo referido por mim é o seguinte: ${conteudo}`;
        const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blanck");
    }
}

function fechar() {
    document.getElementById('avisoContainer').style.display = "none";
}