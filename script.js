// Sistema de traducción completo
let currentLang = 'es';

const translations = {
    en: {
        nav: {
            phone: "Call Now",
            contact: "Contact"
        },
        hero: {
            title: "AI-Powered Refinancing Analysis",
            subtitle: "Get personalized refinancing options in minutes",
            cta: "Free Analysis",
            features: ["No Credit Impact", "30-Second Process", "Expert Guidance"]
        },
        how: {
            title: "How It Works",
            steps: [
                { title: "Tell Us About Yourself", desc: "Share your current mortgage details" },
                { title: "AI Analysis", desc: "Our AI analyzes thousands of options" },
                { title: "Get Your Results", desc: "Receive personalized recommendations" }
            ]
        },
        benefits: {
            title: "Why Choose Latino Refi Group?",
            items: [
                { title: "Lower Monthly Payments", desc: "Save hundreds monthly" },
                { title: "Cash Out Options", desc: "Access your home equity" },
                { title: "Expert Support", desc: "Bilingual mortgage specialists" }
            ]
        },
        savings: {
            title: "How Much Could You Save?",
            monthly: "Average Monthly Savings",
            rate: "Average Rate Reduction",
            time: "Closing Time",
            cost: "Cost to You"
        },
        faq: {
            title: "Frequently Asked Questions",
            questions: [
                { q: "How much does the evaluation cost?", a: "The evaluation is completely free. No hidden costs or surprises. We just want to help you save money." },
                { q: "What credit score do I need?", a: "Generally, you need a score of 620 or higher. But even if your score is lower, we can explore options with you." },
                { q: "How long does the process take?", a: "On average, the process takes 30-45 days from completing your evaluation to closing your refinancing." },
                { q: "What documents do I need?", a: "You'll need: ID, proof of income (last 2 pay stubs), bank statements, and current mortgage documentation." },
                { q: "Do you serve all states?", a: "We work in most US states. Some states have restrictions, but we can check your eligibility in the evaluation." }
            ]
        },
        footer: {
            contact: "Contact",
            company: "Company",
            legal: "Legal",
            copyright: "Latino Refi Group © 2026 | Helping the Latino community in USA"
        },
        form: {
            states: ["Florida", "Texas", "California", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan", "Other"],
            goals: ["Lower my monthly payment", "Cash out", "Both options"],
            creditScores: ["Excellent (750+)", "Good (700-749)", "Fair (650-699)", "I don't know"],
            questions: [
                { title: "Which US state do you live in?", desc: "This helps us understand your local market" },
                { title: "What's your current monthly payment?", desc: "Approximately, in dollars" },
                { title: "What's your goal?", desc: "What do you want to achieve with refinancing?" },
                { title: "How would you rate your credit score?", desc: "This helps us predict your options" },
                { title: "What's your name?", desc: "To personalize your analysis" },
                { title: "What's your WhatsApp number?", desc: "You'll receive your personalized report" }
            ],
            validation: {
                state: "Please select a state",
                payment: "Please enter a valid monthly payment",
                goal: "Please select a goal",
                credit: "Please select your credit score",
                name: "Please enter your full name",
                whatsapp: "Please enter a valid WhatsApp number"
            },
            success: "Analysis sent successfully! We'll contact you soon via WhatsApp"
        }
    },
    es: {
        nav: {
            phone: "Llamar Ahora",
            contact: "Contacto"
        },
        hero: {
            title: "Análisis de Refinanciamiento con IA",
            subtitle: "Obtén opciones personalizadas de refinanciamiento en minutos",
            cta: "Análisis Gratis",
            features: ["Sin Impacto Crediticio", "Proceso de 30 Segundos", "Guía Experta"]
        },
        how: {
            title: "Cómo Funciona",
            steps: [
                { title: "Cuéntanos Sobre Ti", desc: "Comparte los detalles de tu hipoteca actual" },
                { title: "Análisis con IA", desc: "Nuestra IA analiza miles de opciones" },
                { title: "Obtén Tus Resultados", desc: "Recibe recomendaciones personalizadas" }
            ]
        },
        benefits: {
            title: "¿Por Qué Elegir Latino Refi Group?",
            items: [
                { title: "Pagos Mensuales Más Bajos", desc: "Ahorra cientos mensualmente" },
                { title: "Opciones de Cash Out", desc: "Accede al valor de tu hogar" },
                { title: "Soporte Experto", desc: "Especialistas bilingües en hipotecas" }
            ]
        },
        savings: {
            title: "¿Cuánto Podrías Ahorrar?",
            monthly: "Ahorro Mensual Promedio",
            rate: "Reducción de Tasa Promedio",
            time: "Tiempo de Cierre",
            cost: "Costo Para Ti"
        },
        faq: {
            title: "Preguntas Frecuentes",
            questions: [
                { q: "¿Cuánto cuesta la evaluación?", a: "La evaluación es completamente gratis. No hay costo oculto ni sorpresas. Solo queremos ayudarte a ahorrar dinero." },
                { q: "¿Qué puntaje de crédito necesito?", a: "Generalmente, necesitas un puntaje de 620 o superior. Pero incluso si tu puntaje es más bajo, podemos explorar opciones contigo." },
                { q: "¿Cuánto tiempo toma el proceso?", a: "En promedio, el proceso toma entre 30 a 45 días desde que completas tu evaluación hasta que cerramos tu refinanciamiento." },
                { q: "¿Qué documentos necesito?", a: "Necesitarás: identificación, comprobante de ingresos (últimas 2 nóminas), extractos bancarios y documentación de tu hipoteca actual." },
                { q: "¿Sirven en todos los estados?", a: "Trabajamos en la mayoría de los estados de USA. Algunos estados tienen restricciones, pero podemos verificar tu elegibilidad en la evaluación." }
            ]
        },
        footer: {
            contact: "Contacto",
            company: "Empresa",
            legal: "Legal",
            copyright: "Latino Refi Group © 2026 | Ayudando a la comunidad latina en USA"
        },
        form: {
            states: ["Florida", "Texas", "California", "Nueva York", "Illinois", "Pensilvania", "Ohio", "Georgia", "Carolina del Norte", "Michigan", "Otro"],
            goals: ["Bajar mi pago mensual", "Sacar dinero en efectivo (Cash-out)", "Ambas opciones"],
            creditScores: ["Excelente (750+)", "Bueno (700-749)", "Regular (650-699)", "No sé"],
            questions: [
                { title: "¿En qué estado de USA vives?", desc: "Esto nos ayuda a entender tu mercado local" },
                { title: "¿Cuál es tu pago mensual actual?", desc: "Aproximadamente, en dólares" },
                { title: "¿Cuál es tu meta?", desc: "¿Qué quieres lograr con tu refinanciamiento?" },
                { title: "¿Cómo calificarías tu puntaje de crédito?", desc: "Esto nos ayuda a predecir tus opciones" },
                { title: "¿Cuál es tu nombre?", desc: "Para personalizar tu análisis" },
                { title: "¿A qué WhatsApp te enviamos tu reporte?", desc: "Recibirás tu análisis personalizado" }
            ],
            validation: {
                state: "Por favor selecciona un estado",
                payment: "Por favor ingresa un pago mensual válido",
                goal: "Por favor selecciona una meta",
                credit: "Por favor selecciona tu puntaje de crédito",
                name: "Por favor ingresa tu nombre completo",
                whatsapp: "Por favor ingresa un número de WhatsApp válido"
            },
            success: "¡Análisis enviado exitosamente! Te contactaremos pronto por WhatsApp"
        }
    }
};

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Navbar
    document.querySelector('.phone-link span:last-child').textContent = t.nav.phone;

    // Hero section
    document.querySelector('.hero h1').textContent = t.hero.title;
    document.querySelector('.hero p').textContent = t.hero.subtitle;
    document.querySelector('.hero .btn-primary').textContent = t.hero.cta;

    // Features
    const features = document.querySelectorAll('.feature-item');
    t.hero.features.forEach((feature, index) => {
        if (features[index]) features[index].textContent = feature;
    });

    // How it works
    document.querySelector('#how h3').textContent = t.how.title;
    const steps = document.querySelectorAll('.step h4');
    const stepDescs = document.querySelectorAll('.step p');
    t.how.steps.forEach((step, index) => {
        if (steps[index]) steps[index].textContent = step.title;
        if (stepDescs[index]) stepDescs[index].textContent = step.desc;
    });

    // Benefits
    document.querySelector('#benefits h3').textContent = t.benefits.title;
    const benefitTitles = document.querySelectorAll('.benefit-card h4');
    const benefitDescs = document.querySelectorAll('.benefit-card p');
    t.benefits.items.forEach((benefit, index) => {
        if (benefitTitles[index]) benefitTitles[index].textContent = benefit.title;
        if (benefitDescs[index]) benefitDescs[index].textContent = benefit.desc;
    });

    // Savings
    document.querySelector('.savings-grid').previousElementSibling.textContent = t.savings.title;
    const savingsLabels = document.querySelectorAll('.savings-label');
    if (savingsLabels[0]) savingsLabels[0].textContent = t.savings.monthly;
    if (savingsLabels[1]) savingsLabels[1].textContent = t.savings.rate;
    if (savingsLabels[2]) savingsLabels[2].textContent = t.savings.time;
    if (savingsLabels[3]) savingsLabels[3].textContent = t.savings.cost;

    // FAQ
    document.querySelector('#faq h3').textContent = t.faq.title;
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqAnswers = document.querySelectorAll('.faq-answer');
    t.faq.questions.forEach((faq, index) => {
        if (faqQuestions[index]) faqQuestions[index].childNodes[0].textContent = faq.q;
        if (faqAnswers[index]) faqAnswers[index].textContent = faq.a;
    });

    // Footer
    const footerSections = document.querySelectorAll('.footer-section h4');
    if (footerSections[0]) footerSections[0].textContent = t.footer.contact;
    if (footerSections[1]) footerSections[1].textContent = t.footer.company;
    if (footerSections[2]) footerSections[2].textContent = t.footer.legal;
    document.querySelector('.footer-bottom p').textContent = t.footer.copyright;

    // Update form data
    updateFormData();
}

function updateFormData() {
    const t = translations[currentLang];
    states = t.form.states;
    goals = t.form.goals;
    creditScores = t.form.creditScores;
    questions = t.form.questions;
    validationMessages = t.form.validation;
    successMessage = t.form.success;
}

// Language toggle button
function createLanguageToggle() {
    const navRight = document.querySelector('.nav-right');
    const langToggle = document.createElement('div');
    langToggle.className = 'lang-toggle';
    langToggle.innerHTML = `
        <button onclick="setLanguage('es')" class="lang-btn ${currentLang === 'es' ? 'active' : ''}">ES</button>
        <button onclick="setLanguage('en')" class="lang-btn ${currentLang === 'en' ? 'active' : ''}">EN</button>
    `;
    navRight.appendChild(langToggle);
}

function setLanguage(lang) {
    applyLanguage(lang);
    renderFormStep();
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Form variables
let states, goals, creditScores, questions, validationMessages, successMessage;
let currentStep = 0;
let formData = {};

function renderFormStep() {
    const content = document.getElementById('formContent');
    content.innerHTML = '';

    document.getElementById('questionTitle').textContent = questions[currentStep].title;
    document.getElementById('questionDesc').textContent = questions[currentStep].desc;
    document.getElementById('stepText').textContent = `Paso ${currentStep + 1} de 6`;
    document.getElementById('percentText').textContent = Math.round(((currentStep + 1) / 6) * 100) + '%';
    document.getElementById('progressFill').style.width = ((currentStep + 1) / 6) * 100 + '%';
    document.getElementById('btnText').textContent = currentStep === 5 ? 'Enviar Análisis' : 'Siguiente';

    if (currentStep === 0) {
        states.forEach(state => {
            const btn = document.createElement('button');
            btn.className = 'option-button' + (formData.state === state ? ' selected' : '');
            btn.textContent = state;
            btn.onclick = () => {
                formData.state = state;
                renderFormStep();
            };
            content.appendChild(btn);
        });
    } else if (currentStep === 1) {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'form-input';
        input.placeholder = 'Ej: 1500';
        input.value = formData.monthlyPayment || '';
        input.onchange = (e) => { formData.monthlyPayment = e.target.value; };
        content.appendChild(input);
    } else if (currentStep === 2) {
        goals.forEach(goal => {
            const btn = document.createElement('button');
            btn.className = 'option-button' + (formData.goal === goal ? ' selected' : '');
            btn.textContent = goal;
            btn.onclick = () => {
                formData.goal = goal;
                renderFormStep();
            };
            content.appendChild(btn);
        });
    } else if (currentStep === 3) {
        creditScores.forEach(score => {
            const btn = document.createElement('button');
            btn.className = 'option-button' + (formData.creditScore === score ? ' selected' : '');
            btn.textContent = score;
            btn.onclick = () => {
                formData.creditScore = score;
                renderFormStep();
            };
            content.appendChild(btn);
        });
    } else if (currentStep === 4) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-input';
        input.placeholder = 'Tu nombre completo';
        input.value = formData.name || '';
        input.onchange = (e) => { formData.name = e.target.value; };
        content.appendChild(input);
    } else if (currentStep === 5) {
        const input = document.createElement('input');
        input.type = 'tel';
        input.className = 'form-input';
        input.placeholder = '+1 (555) 123-4567';
        input.value = formData.whatsapp || '';
        input.onchange = (e) => { formData.whatsapp = e.target.value; };
        content.appendChild(input);
    }
}

function nextStep() {
    // Validación antes de pasar al siguiente paso
    if (currentStep === 0 && !formData.state) {
        alert(validationMessages.state);
        return;
    }
    if (currentStep === 1 && (!formData.monthlyPayment || formData.monthlyPayment < 100)) {
        alert(validationMessages.payment);
        return;
    }
    if (currentStep === 2 && !formData.goal) {
        alert(validationMessages.goal);
        return;
    }
    if (currentStep === 3 && !formData.creditScore) {
        alert(validationMessages.credit);
        return;
    }
    if (currentStep === 4 && (!formData.name || formData.name.length < 3)) {
        alert(validationMessages.name);
        return;
    }
    if (currentStep === 5 && (!formData.whatsapp || formData.whatsapp.length < 10)) {
        alert(validationMessages.whatsapp);
        return;
    }

    if (currentStep === 5) {
        // Enviar datos al email
        submitForm();
        alert(successMessage);
        currentStep = 0;
        formData = {};
    } else {
        currentStep++;
    }
    renderFormStep();
}

async function submitForm() {
    try {
        const response = await fetch('https://formsubmit.co/latinorefigroup@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                '_captcha': 'false',
                '_subject': 'NUEVO ANÁLISIS DE REFINANCIAMIENTO',
                'Estado': formData.state,
                'Pago Mensual': '$' + formData.monthlyPayment,
                'Meta': formData.goal,
                'Puntaje Crédito': formData.creditScore,
                'Nombre': formData.name,
                'WhatsApp': formData.whatsapp,
                '_template': 'table'
            })
        });
    } catch (error) {
        console.error('Error al enviar:', error);
    }
}

function scrollToForm() {
    document.getElementById('formCard').scrollIntoView({ behavior: 'smooth' });
}

function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const toggle = btn.querySelector('.faq-toggle');
    answer.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Initialize
updateFormData();
createLanguageToggle();
renderFormStep();