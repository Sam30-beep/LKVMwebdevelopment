/* ==========================================
   LANGUAGE CONTROLLER LOGIC
   ========================================== */
function switchLanguage(lang) {
    const body = document.body;
    const btnHi = document.getElementById('btn-hi');
    const btnEn = document.getElementById('btn-en');

    if (lang !== 'hi' && lang !== 'en') {
        return;
    }

    document.documentElement.lang = lang;
    body.classList.toggle('lang-hi', lang === 'hi');
    body.classList.toggle('lang-en', lang === 'en');

    btnHi.classList.toggle('active', lang === 'hi');
    btnEn.classList.toggle('active', lang === 'en');

    document.querySelectorAll('[data-lang-hi][data-lang-en]').forEach((element) => {
        element.textContent = element.dataset[lang === 'hi' ? 'langHi' : 'langEn'];
    });
}

/* ==========================================
   MODAL JOIN WINDOW DOM TRAVERSAL
   ========================================== */
const modal = document.getElementById('regModal');
const openBtns = document.querySelectorAll('.open-modal-btn');
const closeBtn = document.getElementById('closeBtn');

openBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

/* ==========================================
   FORM REGISTRATION DISPATCH OVERRIDE
   ========================================== */
function handleFormSubmit(event) {
    event.preventDefault();

    const isHindi = document.body.classList.contains('lang-hi');
    const successMsg = isHindi
        ? "आपका पंजीकरण सफलतापूर्वक सहेज लिया गया है! ABSS टीम जल्द ही आपसे संपर्क करेगी।"
        : "Registration saved successfully! Team ABSS will contact you shortly.";

    alert(successMsg);

    document.getElementById('campRegistrationForm').reset();
    modal.classList.remove('active');
}
