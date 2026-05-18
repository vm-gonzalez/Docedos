// Diccionario de traducciones extendido
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
        attributionText: 'Logo creado por: <a href="https://www.flaticon.es/iconos-gratis/espada" title="espada iconos" target="_blank">FR_Media - Flaticon</a>',
        // Textos del Login
        tabLogin: "Iniciar Sesión",
        tabRegister: "Crear Cuenta",
        lblEmail: "Correo Electrónico",
        lblPass: "Contraseña",
        lblName: "Nombre",
        btnSubmitLogin: "Ingresar",
        btnSubmitReg: "Registrarse"
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
        attributionText: 'Logo created by: <a href="https://www.flaticon.es/iconos-gratis/espada" title="espada icons" target="_blank">FR_Media - Flaticon</a>',
        // Login Texts
        tabLogin: "Log In",
        tabRegister: "Sign Up",
        lblEmail: "Email",
        lblPass: "Password",
        lblName: "Name",
        btnSubmitLogin: "Log In",
        btnSubmitReg: "Register"
    }
};

let currentLang = 'es';

// --- LOGICA GLOBAL (Aplica a ambas páginas) ---
const btnLang = document.getElementById('btn-lang');
const btnTheme = document.getElementById('btn-theme');

// Lógica del cambio de idioma
if (btnLang) {
    btnLang.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        
        // Elementos compartidos
        btnLang.textContent = translations[currentLang].langBtn;
        if(document.getElementById('verse-text')) document.getElementById('verse-text').innerHTML = translations[currentLang].verseText;
        if(document.getElementById('attribution-text')) document.getElementById('attribution-text').innerHTML = translations[currentLang].attributionText;

        // Elementos de index.html
        if(document.getElementById('btn-ingresar')) document.getElementById('btn-ingresar').textContent = translations[currentLang].ingresar;
        if(document.getElementById('title-1')) document.getElementById('title-1').textContent = translations[currentLang].title1;
        if(document.getElementById('title-2')) document.getElementById('title-2').textContent = translations[currentLang].title2;
        if(document.getElementById('title-3')) document.getElementById('title-3').textContent = translations[currentLang].title3;
        if(document.getElementById('desc')) document.getElementById('desc').textContent = translations[currentLang].desc;
        if(document.getElementById('btn-empezar')) document.getElementById('btn-empezar').textContent = translations[currentLang].empezar;

        // Elementos de login.html
        if(document.getElementById('tab-login')) document.getElementById('tab-login').textContent = translations[currentLang].tabLogin;
        if(document.getElementById('tab-register')) document.getElementById('tab-register').textContent = translations[currentLang].tabRegister;
        if(document.getElementById('lbl-email-login')) document.getElementById('lbl-email-login').textContent = translations[currentLang].lblEmail;
        if(document.getElementById('lbl-pass-login')) document.getElementById('lbl-pass-login').textContent = translations[currentLang].lblPass;
        if(document.getElementById('lbl-name-reg')) document.getElementById('lbl-name-reg').textContent = translations[currentLang].lblName;
        if(document.getElementById('lbl-email-reg')) document.getElementById('lbl-email-reg').textContent = translations[currentLang].lblEmail;
        if(document.getElementById('lbl-pass-reg')) document.getElementById('lbl-pass-reg').textContent = translations[currentLang].lblPass;
        if(document.getElementById('btn-submit-login')) document.getElementById('btn-submit-login').textContent = translations[currentLang].btnSubmitLogin;
        if(document.getElementById('btn-submit-reg')) document.getElementById('btn-submit-reg').textContent = translations[currentLang].btnSubmitReg;
    });
}

// Lógica del cambio de tema
if (btnTheme) {
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        btnTheme.textContent = document.body.classList.contains('light-theme') ? '🌙' : '☀️';
    });
}

// --- LOGICA ESPECIFICA DEL LOGIN ---
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');

if (tabLogin && tabRegister) {
    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        formLogin.style.display = 'block';
        formRegister.style.display = 'none';
    });

    tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        formRegister.style.display = 'block';
        formLogin.style.display = 'none';
    });
}