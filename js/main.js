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
