const areaFundo = document.getElementById('areaFundo');
const infoContent = document.getElementById('infoContent')

function abrirInfo1() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Mais de 300 projectos</h3>
    <p>Ao longo de seus anos de experiência, Manuel Prestação de Serviços conta com mais de 300 projectos já concluídos com sucesso, satisfazendo a necessidade dos seus clientes.</p>
    <p>Já foram mais de 300 obras de interior realizadas com sucesso!</p>
    `;
}

function abrirInfo2() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Mais de 16 anos</h3>
    <p>Ao longo de uma década e seis anos, temos trazido soluções estéticas para o interior de diversas propriedades.</p>
    <p>Trabalhando há anos neste sector, temos com prioridade a beleza de sua propriedade!</p>
    `;
}

function abrirInfo3() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Temos Qualidade</h3>
    <p>A qualidade é o que oferecemos aos nossos clientes.</p>
    <p>Damos-lhe um acabamento de qualidade e durabilidade. Oferecemos um serviço de qualidade com o uso de materias modernos.</p>
    `;
}

function abrirInfo4() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Serviço Impecável</h3>
    <p>Contamos com homens experientes para o trabalho que torna o seu interior impecável.</p>
    <p>Homens com vários anos de experiência e técnica oferecem um grande serviço impecável em seu interior!</p>
    `;
}

function abrirInfo5() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Montagem de tecto falso</h3>
    <p>Projectamos e fazemos a aplicação de tecto falso no interior de sua propriedade.</p>
    <p>Proporcionamos para si diversos modelos e designs de tecto falso com luminárias para melhor a estética do seu interior.</p>
    <p>Para esse serviço nós sugerimos modelos e apresentamos ao cliente, ou aplicamos o modelo que o cliente deseja!</p>
    `;
}

function abrirInfo6() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Estuque</h3>
    <p>Transformamos a sua parede em uma camada macia.</p>
    <p>Deixamos a superfície de sua parede o mais macio possível.</p>
    `;
}

function abrirInfo7() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Pintura</h3>
    <p>Fazemos a pintura de sua propriedade.</p>
    <p>Pintamos a sua propriedade com base em sua necessidade.</p>
    `;
}

function abrirInfo8() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Ladrilho</h3>
    <p>Fazemos o ladrilho de sua propriedade</p>
    <p>Mosaicos encaixados uniformemente</p>
    `;
}

function abrirInfo9() {
    areaFundo.style.display = "flex";
    document.querySelector('body').style.overflow = "hidden";
    infoContent.innerHTML = `
    <div class="botao-card">
        <button onclick="closeInfo()">X</button>
    </div>
    <h3>Electricidade</h3>
    <p>Fazemos instalação eléctrica de sua propriedade.</p>
    <p>Fazemos também o reparo e manutenção.</p>
    `;
}


function closeInfo() {
    areaFundo.style.display = "none";
    document.querySelector('body').style.overflow = "auto";
}