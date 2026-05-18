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
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `custom-toast ${isError ? 'error' : ''}`;
    
    const icon = isError ? '⚠️' : '✅';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 400); 
    }, 3000);
}

const API_URL = 'http://localhost:3000';

// 1. Lógica para Enviar el Formulario de Registro
if (formRegister) {
    formRegister.addEventListener('submit', async (e) => {
        e.preventDefault(); 

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
                showNotification('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
                formRegister.reset();
                tabLogin.click();
            } else {
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
        e.preventDefault(); 

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
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 800); 

            } else {
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

// Elementos del DOM generales para el Modal
const modal = document.getElementById('verses-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const versesListContainer = document.getElementById('verses-list');
const modalTitle = document.getElementById('modal-title'); 

// Botones de las tarjetas
const btnSexualSin = document.getElementById('btn-card-sexual');
const btnOrgullo = document.getElementById('btn-card-orgullo');
const btnGratitud = document.getElementById('btn-card-gratitud'); // <-- Nuevo Botón

// Función maestra para abrir cualquier área de batalla
// Función maestra para abrir cualquier área de batalla (Optimizada)
function openBattleModal(title, versesArray, storageKey) {
    if (modalTitle) modalTitle.textContent = `Lucha: ${title}`;
    
    // Cargar progreso específico de esta área
    let currentProgress = JSON.parse(localStorage.getItem(storageKey)) || {};
    
    versesListContainer.innerHTML = ''; // Limpiar contenedor
    
    // 1. CREAMOS EL FRAGMENTO (Nuestra caja invisible en memoria)
    const fragment = document.createDocumentFragment();
    
    versesArray.forEach((verse, index) => {
        const dayId = `day_${index + 1}`;
        const isChecked = currentProgress[dayId] ? 'checked' : '';
        const completedClass = currentProgress[dayId] ? 'completed' : '';

        // Crear tarjeta estilo acordeón
        const dayCard = document.createElement('div');
        dayCard.className = `day-card ${completedClass}`;
        
        dayCard.innerHTML = `
            <div class="day-header">
                <label class="custom-checkbox">
                    <input type="checkbox" class="day-checkbox" data-day="${dayId}" ${isChecked}>
                    <span class="checkmark"></span>
                </label>
                <div class="day-info">
                    <span class="day-name">Día ${index + 1}</span>
                    <span class="day-ref-sub">${verse.ref}</span>
                </div>
                <span class="toggle-arrow">▼</span>
            </div>
            <div class="day-body-wrapper">
                <div class="day-body-inner">
                    <div class="day-body">
                        <p class="verse-text-p">"${verse.text}"</p>
                        <div class="blur-actions">
                            <button class="btn-blur">Ocultar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // LÓGICA 1: Abrir / Cerrar Acordeón
        const dayHeader = dayCard.querySelector('.day-header');
        dayHeader.addEventListener('click', (e) => {
            if(e.target.closest('.custom-checkbox')) return;
            
            const isCurrentlyOpen = dayCard.classList.contains('open');
            
            document.querySelectorAll('.day-card').forEach(card => {
                card.classList.remove('open');
            });

            if (!isCurrentlyOpen) {
                dayCard.classList.add('open');
            }
        });

        // LÓGICA 2: Modo Blur
        const verseText = dayCard.querySelector('.verse-text-p');
        const btnBlur = dayCard.querySelector('.btn-blur');
        
        const toggleBlur = () => {
            verseText.classList.toggle('blurred');
            btnBlur.textContent = verseText.classList.contains('blurred') ? 'Desenfocar' : 'Ocultar';
        };
        btnBlur.addEventListener('click', toggleBlur);
        verseText.addEventListener('click', () => {
            if(verseText.classList.contains('blurred')) toggleBlur();
        });

        // LÓGICA 3: Guardar el Check en LocalStorage
        const checkbox = dayCard.querySelector('.day-checkbox');
        checkbox.addEventListener('change', (e) => {
            const checked = e.target.checked;
            currentProgress[dayId] = checked;
            localStorage.setItem(storageKey, JSON.stringify(currentProgress));
            
            if (checked) {
                dayCard.classList.add('completed');
            } else {
                dayCard.classList.remove('completed');
            }
        });

        // 2. METEMOS LA TARJETA EN LA CAJA INVISIBLE, NO EN EL HTML
        fragment.appendChild(dayCard);
    });

    // 3. UNA VEZ TERMINADO EL BUCLE, METEMOS TODO AL HTML DE GOLPE
    versesListContainer.appendChild(fragment);

    // Mostrar panel modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ASIGNAR EVENTOS A LOS BOTONES
if (btnSexualSin) {
    btnSexualSin.addEventListener('click', () => {
        openBattleModal('Pecado Sexual', sexualSinVerses, 'docedos_sexual_progress');
    });
}

if (btnOrgullo) {
    btnOrgullo.addEventListener('click', () => {
        openBattleModal('Orgullo / Soberbia', orgulloVerses, 'docedos_orgullo_progress');
    });
}

// Evento para el nuevo botón de Gratitud
if (btnGratitud) {
    btnGratitud.addEventListener('click', () => {
        openBattleModal('Falta de Gratitud', gratitudVerses, 'docedos_gratitud_progress');
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