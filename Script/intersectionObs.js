// Função para verificar se o intersection observer é suportado
const supportsIntersectionObserver = () => {
    return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window;
};

if (supportsIntersectionObserver()) {
    console.log('Navegador suporta o observador de interseção!');

    const observadorEsquerdo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Item esquerda bservado!');
                entry.target.classList.add('mostrar');
            } else {
                entry.target.classList.remove('mostrar');
            }
        });
    })
    
    const observadorDireito = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Item direito observado!');
                entry.target.classList.add('mostrar');
            } else {
                entry.target.classList.remove('mostrar');
            }
        });
    });

    const observadorCima = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Item de cima observado!');
                entry.target.classList.add('mostrar');
            } else {
                entry.target.classList.remove('mostrar');
            }
        });
    });

    const observadorBaixo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Item de baixo observado!');
                entry.target.classList.add('mostrar')
            } else {
                entry.target.classList.remove('mostrar');
            }
        });
    });

    const elementsLeft = document.querySelectorAll('.elemento-esquerdo');
    elementsLeft.forEach(element => observadorEsquerdo.observe(element));

    const elementsRight = document.querySelectorAll('.elemento-direito');
    elementsRight.forEach(element => observadorDireito.observe(element));

    const elementsUp = document.querySelectorAll('.elemento-cima');
    elementsUp.forEach(element => observadorCima.observe(element));

    const elementsDown = document.querySelectorAll('.elemento-baixo');
    elementsDown.forEach(element => observadorBaixo.observe(element));

} else {
    console.log('Navegador não suporta observador de interseção!');

    document.querySelectorAll('.elemento-esquerdo').forEach(element => {
        element.classList.remove('elemento-esquerdo');
    });

    document.querySelectorAll('.elemento-direito').forEach(element => {
        element.classList.remove('elemento-direito');
    });
}