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
        btnSubmitReg: "Registrarse",
        // Textos del Dashboard
        dashTitle: 'Áreas de <span class="emphasized">Batalla</span>',
        dashSubtitle: "Selecciona un área para memorizar y renovar tu entendimiento hoy.",
        titleSexual: "Pecado Sexual",
        descSexual: "Guardar el cuerpo y la mente en santidad, huyendo de las pasiones juveniles.",
        titleOrgullo: "Orgullo / Soberbia",
        descOrgullo: "Reconocer la dependencia absoluta de Dios y revestirse de profunda humildad.",
        titleGratitud: "Falta de Gratitud",
        descGratitud: "Combatir la queja permanente desarrollando un corazón agradecido en todo.",
        btnLuchar: "Luchar",
        logout: "Cerrar Sesión"
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
        btnSubmitReg: "Register",
        // Dashboard Texts
        dashTitle: 'Areas of <span class="emphasized">Battle</span>',
        dashSubtitle: "Select an area to memorize and renew your understanding today.",
        titleSexual: "Sexual Sin",
        descSexual: "Guard the body and mind in holiness, fleeing from youthful passions.",
        titleOrgullo: "Pride / Arrogance",
        descOrgullo: "Recognize absolute dependence on God and clothe yourself with deep humility.",
        titleGratitud: "Lack of Gratitud",
        descGratitud: "Combat permanent complaining by developing a thankful heart in everything.",
        btnLuchar: "Fight",
        logout: "Logout"
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

        // Elementos de home.html
        if(document.getElementById('dash-title')) document.getElementById('dash-title').innerHTML = translations[currentLang].dashTitle;
        if(document.getElementById('dash-subtitle')) document.getElementById('dash-subtitle').textContent = translations[currentLang].dashSubtitle;
        if(document.getElementById('card-title-sexual')) document.getElementById('card-title-sexual').textContent = translations[currentLang].titleSexual;
        if(document.getElementById('card-desc-sexual')) document.getElementById('card-desc-sexual').textContent = translations[currentLang].descSexual;
        if(document.getElementById('card-title-orgullo')) document.getElementById('card-title-orgullo').textContent = translations[currentLang].titleOrgullo;
        if(document.getElementById('card-desc-orgullo')) document.getElementById('card-desc-orgullo').textContent = translations[currentLang].descOrgullo;
        if(document.getElementById('card-title-gratitud')) document.getElementById('card-title-gratitud').textContent = translations[currentLang].titleGratitud;
        if(document.getElementById('card-desc-gratitud')) document.getElementById('card-desc-gratitud').textContent = translations[currentLang].descGratitud;
        if(document.getElementById('btn-logout')) document.getElementById('btn-logout').textContent = translations[currentLang].logout;
        
        const cardBtns = document.querySelectorAll('.btn-card');
        cardBtns.forEach(btn => btn.textContent = translations[currentLang].btnLuchar);
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

// ==========================================
// --- CONEXIÓN CON EL BACKEND (API RAILS) ---
// ==========================================

// Función para mostrar notificaciones estéticas
function showNotification(message, isError = false) {
    // Verificar si ya existe el contenedor, si no, crearlo
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // Crear el elemento de notificación
    const toast = document.createElement('div');
    toast.className = `custom-toast ${isError ? 'error' : ''}`;
    
    // Añadir un icono simple dependiendo de si es error o éxito
    const icon = isError ? '⚠️' : '✅';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

    container.appendChild(toast);

    // Desaparecer después de 3 segundos
    setTimeout(() => {
        toast.classList.add('fade-out');
        // Eliminar del DOM después de la animación
        setTimeout(() => toast.remove(), 400); 
    }, 3000);
}

const API_URL = 'http://localhost:3000'; // La ruta donde corre tu servidor Rails

// 1. Lógica para Enviar el Formulario de Registro
if (formRegister) {
    formRegister.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Usamos la nueva notificación de éxito
                showNotification('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
                
                // Limpiar formulario y cambiar a la pestaña de login
                formRegister.reset();
                tabLogin.click();
            } else {
                // Usamos la nueva notificación de error
                const errorMsg = data.errors ? data.errors.join(', ') : 'Datos inválidos';
                showNotification('Error al crear cuenta: ' + errorMsg, true);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('No se pudo conectar con el servidor. ¿Está encendido el backend?');
        }
    });
}

// 2. Lógica para Enviar el Formulario de Inicio de Sesión
if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                showNotification('¡Sesión iniciada con éxito!');
                
                // Esperamos 1.5 segundos (1500 milisegundos) antes de redirigir
                // para que el usuario alcance a leer el mensaje
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 800); 

            } else {
                // El correo o la contraseña son incorrectos
                showNotification('Error: ' + data.error, true);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('No se pudo conectar con el servidor. ¿Está encendido el backend?');
        }
    });
}