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

// ==========================================
// --- REGISTRO DEL SERVICE WORKER (PWA) ---
// ==========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registrado con éxito en el scope: ', registration.scope);
      })
      .catch(err => {
        console.log('Fallo al registrar el ServiceWorker: ', err);
      });
  });
}

// ==========================================
// --- LÓGICA DE LAS ÁREAS DE BATALLA ---
// ==========================================

// Lista de 30 versículos contra el Pecado Sexual
const sexualSinVerses = [
    { ref: "1 Tesalonicenses 4:3", text: "Pues la voluntad de Dios es vuestra santificación; que os apartéis de fornicación." },
    { ref: "1 Tesalonicenses 4:4-5", text: "Que cada uno de vosotros sepa tener su propia esposa en santidad y honor; no en pasión de concupiscencia, como los gentiles que no conocen a Dios." },
    { ref: "1 Corintios 6:18", text: "Huid de la fornicación. Cualquier otro pecado que el hombre cometa, está fuera del cuerpo; mas el que fornica, contra su propio cuerpo peca." },
    { ref: "1 Corintios 6:19-20", text: "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros? Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo." },
    { ref: "Colosenses 3:5", text: "Haced morir, pues, lo terrenal en vosotros: fornicación, impureza, pasiones desordenadas, malos deseos y avaricia, que es idolatría." },
    { ref: "Efesios 5:3", text: "Pero fornicación y toda impureza, o avaricia, ni aun se nombre entre vosotros, como conviene a santos." },
    { ref: "Mateo 5:28", text: "Pero yo os digo que cualquiera que mira a una mujer para codiciarla, ya adulteró con ella en su corazón." },
    { ref: "2 Timoteo 2:22", text: "Huye también de las pasiones juveniles, y sigue la justicia, la fe, el amor y la paz, con los que de corazón limpio invocan al Señor." },
    { ref: "Salmos 119:9", text: "¿Con qué limpiará el joven su camino? Con guardar tu palabra." },
    { ref: "Proverbios 4:23", text: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida." },
    { ref: "Hebreos 13:4", text: "Honroso sea en todos el matrimonio, y el lecho sin mancilla; pero a los fornicarios y a los adúlteros los juzgará Dios." },
    { ref: "Gálatas 5:16", text: "Digo, pues: Andad en el Espíritu, y no satisfagáis los deseos de la carne." },
    { ref: "1 Pedro 2:11", text: "Amados, yo os ruego como a extranjeros y peregrinos, que os abstengáis de los deseos carnales que batallan contra el alma." },
    { ref: "Romanos 13:14", text: "Sino vestíos del Señor Jesucristo, y no proveáis para los deseos de la carne." },
    { ref: "Filipenses 4:8", text: "Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable, todo lo que es de buen nombre; si hay virtud alguna, si algo digno de alabanza, en esto pensad." },
    { ref: "1 Juan 2:16", text: "Porque todo lo que hay en el mundo, los deseos de la carne, los deseos de los ojos, y la vanagloria de la vida, no proviene del Padre, sino del mundo." },
    { ref: "Santiago 1:14-15", text: "Sino que cada uno es tentado, cuando de su propia concupiscencia es atraído y seducido. Entonces la concupiscencia, después que ha concebido, da a luz el pecado." },
    { ref: "1 Corintios 10:13", text: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir." },
    { ref: "Salmos 51:10", text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí." },
    { ref: "Proverbios 6:25", text: "No codicies su hermosura en tu corazón, ni ella te prenda con sus ojos." },
    { ref: "Job 31:1", text: "Hice pacto con mis ojos; ¿Cómo, pues, había yo de mirar a una virgen?" },
    { ref: "2 Corintios 7:1", text: "Así que, amados, puesto que tenemos tales promesas, limpiémonos de toda contaminación de carne y de espíritu, perfeccionando la santidad en el temor de Dios." },
    { ref: "Romanos 6:12", text: "No reine, pues, el pecado en vuestro cuerpo mortal, de modo que lo obedezcáis en sus concupiscencias." },
    { ref: "Gálatas 5:19-21", text: "Y manifiestas son las obras de la carne, que son: adulterio, fornicación, inmundicia, lascivia... los que practican tales cosas no heredarán el reino de Dios." },
    { ref: "Efesios 5:5", text: "Porque sabéis esto, que ningún fornicario, o inmundo, o avaro, que es idólatra, tiene herencia en el reino de Cristo y de Dios." },
    { ref: "Tito 2:11-12", text: "Porque la gracia de Dios se ha manifestado para salvación... enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente." },
    { ref: "1 Corintios 10:8", text: "Ni forniquemos, como algunos de ellos fornicaron, y cayeron en un día veintitrés mil." },
    { ref: "Romanos 8:13", text: "Porque si vivís conforme a la carne, moriréis; mas si por el Espíritu hacéis morir las obras de la carne, viviréis." },
    { ref: "Mateo 15:19", text: "Porque del corazón salen los malos pensamientos, los homicidios, los adulterios, las fornicaciones, los hurtos, los falsos testimonios, las blasfemias." },
    { ref: "1 Tesalonicenses 4:7", text: "Pues no nos ha llamado Dios a inmundicia, sino a santificación." }
];

// Cargar progreso del almacenamiento del dispositivo
let sexualProgress = JSON.parse(localStorage.getItem('docedos_sexual_progress')) || {};

// Elementos del DOM
const btnSexualSin = document.getElementById('btn-card-sexual');
const modal = document.getElementById('verses-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const versesListContainer = document.getElementById('verses-list');

if (btnSexualSin) {
    btnSexualSin.addEventListener('click', () => {
        versesListContainer.innerHTML = ''; // Limpiar contenedor
        
        sexualSinVerses.forEach((verse, index) => {
            const dayId = `day_${index + 1}`;
            const isChecked = sexualProgress[dayId] ? 'checked' : '';
            const completedClass = sexualProgress[dayId] ? 'completed' : '';

            // Crear tarjeta estilo acordeón para cada día
            const dayCard = document.createElement('div');
            dayCard.className = `day-card ${completedClass}`;
            
            dayCard.innerHTML = `
                <div class="day-header">
                    <input type="checkbox" class="day-checkbox" data-day="${dayId}" ${isChecked}>
                    <div class="day-info">
                        <span class="day-name">Día ${index + 1}</span>
                        <span class="day-ref-sub">${verse.ref}</span>
                    </div>
                </div>
                <div class="day-body">
                    <p class="verse-text-p blurred">"${verse.text}"</p>
                    <div class="blur-actions">
                        <button class="btn-blur">👁️ Desenfocar</button>
                    </div>
                </div>
            `;

            // LÓGICA 1: Abrir / Cerrar Acordeón al hacer click en el día
            const dayInfo = dayCard.querySelector('.day-info');
            const arrow = dayCard.querySelector('.toggle-arrow');
            dayInfo.addEventListener('click', () => {
                dayCard.classList.toggle('open');
            });

            // LÓGICA 2: Modo Blur (Click en botón o directamente en el texto borroso)
            const verseText = dayCard.querySelector('.verse-text-p');
            const btnBlur = dayCard.querySelector('.btn-blur');
            
            const toggleBlur = () => {
                verseText.classList.toggle('blurred');
                btnBlur.textContent = verseText.classList.contains('blurred') ? '👁️ Desenfocar' : '🙈 Ocultar';
            };
            btnBlur.addEventListener('click', toggleBlur);
            verseText.addEventListener('click', () => {
                if(verseText.classList.contains('blurred')) toggleBlur(); // Solo desenfoca al clickear si estaba borroso
            });

            // LÓGICA 3: Guardar el Check en LocalStorage
            const checkbox = dayCard.querySelector('.day-checkbox');
            checkbox.addEventListener('change', (e) => {
                const checked = e.target.checked;
                sexualProgress[dayId] = checked;
                localStorage.setItem('docedos_sexual_progress', JSON.stringify(sexualProgress));
                
                if (checked) {
                    dayCard.classList.add('completed');
                } else {
                    dayCard.classList.remove('completed');
                }
            });

            versesListContainer.appendChild(dayCard);
        });

        // Mostrar panel modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Cerrar Modal
if (btnCloseModal && modal) {
    btnCloseModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}