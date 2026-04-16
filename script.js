// 1. GESTÃO DE DADOS (Simulação de banco de dados)
const galeriaImagens = [
    { src: 'campo.jpg', alt: 'Plantação de cevada' },
    { src: 'industria.jpg', alt: 'Interior da malteria' },
    { src: 'laboratorio.jpg', alt: 'Controle de qualidade' }
];

const sustentabilidadeDados = [
    { titulo: "Uso de Água", texto: "Tecnologias de irrigação inteligente reduzem o consumo em 30%." },
    { titulo: "Solo Saudável", texto: "A rotação de culturas garante a biodiversidade da terra." },
    { titulo: "Energia Limpa", texto: "Nossa indústria opera com 80% de energia de fontes renováveis." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function init() {
    const track = document.getElementById('carousel-track');
    const accordionContainer = document.getElementById('accordion-container');

    // Renderizar Galeria
    galeriaImagens.forEach(img => {
        const div = document.createElement('div');
        div.className = 'carousel-item';
        div.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        track.appendChild(div);
    });

    // Renderizar Acordeão
    sustentabilidadeDados.forEach(item => {
        const section = document.createElement('div');
        section.className = 'accordion-item';
        section.innerHTML = `
            <div class="accordion-header">${item.titulo}</div>
            <div class="accordion-content"><p>${item.texto}</p></div>
        `;
        section.addEventListener('click', () => section.classList.toggle('active'));
        accordionContainer.appendChild(section);
    });
}

// 3. ACESSIBILIDADE (Fonte)
let fontSize = 16;
function changeFontSize(delta) {
    fontSize += delta * 2;
    document.documentElement.style.fontSize = `${fontSize}px`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// 4. SCROLL REVEAL (Observador)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Inicializar
window.onload = init;
