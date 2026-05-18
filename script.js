// Diccionario de traducciones
const translations = {
    es: {
        langBtn: "EN",
        ingresar: "Ingresar",
        title1: "Renueva y ",
        title2: "limpia tu mente",
        title3: " cada día.",
        desc: "Una app web para luchar contra el pecado memorizando la Palabra cada día.",
        empezar: "Empezar",
        verseText: '"No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento..." <strong class="verse-ref">— Romanos 12:2</strong>',
        attributionText: 'Logo creado por: <a href="https://www.flaticon.es/iconos-gratis/espada" title="espada iconos" target="_blank">FR_Media - Flaticon</a>'
    },
    en: {
        langBtn: "ES",
        ingresar: "Login",
        title1: "Renew and ",
        title2: "cleanse your mind",
        title3: " every day.",
        desc: "A web app to fight sin by memorizing the Word every day.",
        empezar: "Get Started",
        verseText: '"Do not conform to the pattern of this world, but be transformed by the renewing of your mind..." <strong class="verse-ref">— Romans 12:2</strong>',
        attributionText: 'Logo created by: <a href="https://www.flaticon.es/iconos-gratis/espada" title="espada icons" target="_blank">FR_Media - Flaticon</a>'
    }
};

let currentLang = 'es';

// Referencias a los botones
const btnLang = document.getElementById('btn-lang');
const btnTheme = document.getElementById('btn-theme');

// Referencias a los textos
const elIngresar = document.getElementById('btn-ingresar');
const elTitle1 = document.getElementById('title-1');
const elTitle2 = document.getElementById('title-2');
const elTitle3 = document.getElementById('title-3');
const elDesc = document.getElementById('desc');
const elEmpezar = document.getElementById('btn-empezar');
const elVerse = document.getElementById('verse-text');
const elAttribution = document.getElementById('attribution-text');

// 1. Lógica del cambio de idioma
btnLang.addEventListener('click', () => {
    // Alternar entre 'es' y 'en'
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Aplicar los textos correspondientes
    btnLang.textContent = translations[currentLang].langBtn;
    elIngresar.textContent = translations[currentLang].ingresar;
    elTitle1.textContent = translations[currentLang].title1;
    elTitle2.textContent = translations[currentLang].title2;
    elTitle3.textContent = translations[currentLang].title3;
    elDesc.textContent = translations[currentLang].desc;
    elEmpezar.textContent = translations[currentLang].empezar;
    
    // Usamos innerHTML para mantener las etiquetas HTML internas como <strong> o <a>
    elVerse.innerHTML = translations[currentLang].verseText;
    elAttribution.innerHTML = translations[currentLang].attributionText;
});

// 2. Lógica del cambio de tema
btnTheme.addEventListener('click', () => {
    // Agrega o quita la clase light-theme al body
    document.body.classList.toggle('light-theme');
    
    // Cambia el icono dependiendo del tema activo
    if (document.body.classList.contains('light-theme')) {
        btnTheme.textContent = '🌙';
    } else {
        btnTheme.textContent = '☀️';
    }
});