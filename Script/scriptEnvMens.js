function envM() {
    const numeroWhatsapp = "+244924494945";
    const mensagem = "Olá, venho do seu site https://manuel-p-s.vercel.app e gostaria de solicitar seus serviços!";
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blanck");
}