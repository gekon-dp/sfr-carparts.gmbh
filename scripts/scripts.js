/* ==========================================================================
   00. GLOBAL CONFIG & TRANSLATIONS DICTIONARY
   ========================================================================== */

const state = {
  currentLang: localStorage.getItem("sfr_lang") || "de",
  currentTheme: localStorage.getItem("sfr_theme") || "light",
  activeTab: "car",
  activeBranch: "1",
  gdprConsented: false,
};

const branchData = {
  1: {
    address: {
      ru: "Оснабрюк штрассе 10, 49492 Вестеркаппельн, Германия",
      de: "Osnabrücker Straße 10, 49492 Westerkappeln, Deutschland",
    },
    phone: "+4954048999397",
    hours: {
      ru: "Пн-Пт: 09:00 - 18:00, Сб: 09:00 - 14:00",
      de: "Mo-Fr: 09:00 - 18:00, Sa: 09:00 - 14:00",
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.178292070856!2d7.877986176521058!3d52.31276717200771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9dab12812124d%3A0x7bee7f03ab8bd596!2sSFR%20Carparts%20GmbH!5e0!3m2!1sru!2sus!4v1788498202868!5m2!1sru!2sus",
  },
  2: {
    address: {
      ru: "Фридрих-Эберт-Ринг 177-179, 48429 Райне, Германия",
      de: "Friedrich-Ebert-Ring 177-179, 48429 Rheine, Deutschland",
    },
    phone: "+4959719461246",
    hours: {
      ru: "Пн-Пт: 09:00 - 18:00, Сб: 09:00 - 14:00",
      de: "Mo-Fr: 09:00 - 18:00, Sa: 09:00 - 14:00",
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.1692109225246!2d7.446642076519947!3d52.294783172002965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b82d8aaea5d03d%3A0x453ebd43ee7ce2ae!2sSFR%20Carparts%20GmbH!5e0!3m2!1sru!2sus!4v1788498498224!5m2!1sru!2sus",
  },
};

const translations = {
  ru: {
    nav_conditions: "Условия",
    nav_timeline: "Схема работы",
    nav_brands: "Партнеры",
    nav_reviews: "Отзывы",
    nav_contacts: "Контакты",
    btn_order: "🛒 Заказать",
    // Новые ключи для формы заказа:
    manager_status: "● Онлайн. Подберу запчасти за 10 минут",
    branch_westerkappeln: "Вестеркаппельн",
    branch_rheine: "Райне",
    method_car: "Марка и модель",
    method_vin: "VIN / Frame код",
    privacy_text: "Согласен с Политикой конфиденциальности",
    btn_submit_order: "Отправить список в WhatsApp",
    // Плейсхолдеры
    ph_parts_list:
      "Список необходимых запчастей (например: передние колодки, масляный фильтр)",
    ph_client_name: "Ваше имя",
    ph_car_make: "Марка (напр. BMW)",
    ph_car_model: "Модель (напр. X5)",
    ph_car_year: "Год",
    ph_vin_code: "Введите VIN-код (17 знаков)",

    // Ошибки валидации
    err_select_branch: "Выберите филиал для отправки заказа",
    err_describe_parts: "Опишите необходимые запчасти (минимум 3 символа)",
    err_parts_validation: "Описание должно содержать буквы или цифры",
    err_specify_name: "Укажите ваше имя",
    err_name_validation: "Имя содержит недопустимые символы (цифры или знаки)",
    err_specify_make: "Укажите марку автомобиля",
    err_specify_model: "Укажите модель автомобиля",
    err_invalid_year: "Введите корректный год (4 цифры)",
    err_vin_length: "VIN должен быть ровно 17 символов (сейчас: {length})",
    err_vin_validation:
      "VIN содержит недопустимые символы (только латиница и цифры, без I, O, Q)",
    err_missing_phone:
      "Ошибка: Не найден номер телефона для выбранного филиала.",

    // Заголовки сообщения для WhatsApp
    wa_order: "Заказ",
    wa_branch: "Филиал",
    wa_client: "Клиент",
    wa_car_data: "Данные авто",
    wa_make: "Марка",
    wa_model: "Модель",
    wa_year: "Год",
    wa_vin: "VIN-код",
    wa_want_to_order: "Хочу заказать",
    btn_callback: "📞 Перезвоните мне",
    hero_slide1_title: "Качественные автозапчасти для вашего авто",
    hero_slide1_desc:
      "Прямые поставки запчастей и комплектующих. Быстрая доставка и гарантия качества.",
    hero_slide2_title: "Оперативная доставка по всей стране",
    hero_slide2_desc:
      "Гибкая логистика и надежные партнеры для транспортировки любых деталей.",
    btn_catalog: "Перейти в каталог",
    btn_contact: "Связаться с нами",
    promo_tag: "Акция",
    promo_text: "Скидка 10% на первый оптовый заказ!",
    hero_title: "Надежные автозапчасти для розницы и СТО по всей Европе",
    hero_subtitle:
      "Прямые поставки от производителей. Более 50 000 наименований в наличии на складе.",
    hero_cta: "Рассчитать стоимость",
    tab_by_car: "По марке авто",
    tab_by_vin: "По VIN-коду",
    label_car: "Марка, модель, год *",
    label_vin: "VIN / Frame код *",
    label_parts: "Необходимые запчасти *",
    label_name: "Ваше имя *",
    label_phone: "Телефон *",
    gdpr_agree: "Я согласен с",
    gdpr_privacy_link: "Политикой конфиденциальности",
    btn_whatsapp: "Отправить в WhatsApp",
    btn_send: "Отправить",
    counter_1: "Запчастей в наличии",
    counter_2: "Среднее время ответа",
    counter_3: "Опыта работы на рынке ЕС",
    conditions_title: "Условия сотрудничества",
    b2c_title: "Для розничных покупателей",
    b2c_item_1: "Продажа от 1 единицы товара",
    b2c_item_2: "Удобная оплата картами и перевод",
    b2c_item_3: "Быстрая курьерская доставка",
    b2b_title: "Для СТО и оптовиков",
    b2b_item_1: "Работа по официальному договору",
    b2b_item_2: "Оплата с НДС / без НДС",
    b2b_item_3: "Персональный менеджер и накопительные скидки",
    timeline_title: "Схема работы",
    step_1_title: "Заявка",
    step_1_desc: "Оставляете запрос на сайте или в WhatsApp",
    step_2_title: "Проценка",
    step_2_desc: "Менеджер подбирает запчасти и цены",
    step_3_title: "Согласование",
    step_3_desc: "Утверждаем детали заказа и условия оплаты",
    step_4_title: "Получение",
    step_4_desc: "Самовывоз со склада или доставка до двери",
    reviews_title: "Отзывы наших клиентов",
    review_1_text:
      "Отличный сервис, запчасти на BMW приехали на следующий день. Все оригинальное.",
    review_2_text:
      "Работаем по опту уже полгода. Замечаний по качеству и договорам нет.",
    reviews_google_btn: "Смотреть все отзывы на Google Картах",
    faq_title: "Часто задаваемые вопросы",
    faq_q1: "Как правильно подобрать запчасть по VIN-коду?",
    faq_a1:
      "Оставьте заявку с 17-значным VIN-кодом вашего автомобиля. Наши специалисты бесплатно подберут 100% совместимые оригинальные детали и проверенные качественные аналоги.",
    faq_q2: "Какая гарантия предоставляется на детали?",
    faq_a2:
      "На все оригинальные комплектующие и сертифицированные аналоги действует гарантия от производителя от 12 до 24 месяцев при установке на нашем или авторизованном СТО.",
    faq_q3: "Что делать, если деталь не подошла?",
    faq_a3:
      "Вы можете обменять или вернуть товар в течение 14 дней с момента получения, если сохранен товарный вид, упаковочные ярлыки и нет следов установки.",
    faq_q4: "Работаете ли вы с юридическими лицами и оптом?",
    faq_a4:
      "Да, мы работаем с автосервисами, автопарками и юрлицами по безналичному расчету с НДС. Для постоянных оптовых партнеров действует гибкая система скидок.",
    contacts_title: "Наши филиалы",
    branch_westerkappeln: "Вестеркаппельн",
    branch_rheine: "Райне",
    address_label: "Адрес:",
    phone_label: "Телефон:",
    email_label: "Email",
    hours_label: "Режим работы:",
    link_impressum: "Impressum",
    link_datenschutz: "Datenschutz",
    modal_callback_title: "Светлана",
    // modal_callback_subtitle: "",
    btn_wait_call: "Жду звонка!",
    cookie_text: "Мы используем файлы cookie для улучшения работы сайта.",
    cookie_accept: "Принять",
    cookie_reject: "Отклонить",
    privacy_text: "Согласен с Политикой конфиденциальности",
    select_method_title: "Выберите филиал:",
  },
  de: {
    nav_conditions: "Konditionen",
    nav_timeline: "Ablauf",
    nav_brands: "Partner",
    nav_reviews: "Bewertungen",
    nav_contacts: "Kontakte",
    // Новые ключи для формы заказа:
    manager_status: "● Online. Ich finde Ersatzteile in 10 Minuten",
    branch_westerkappeln: "Westerkappeln",
    branch_rheine: "Rheine",
    method_car: "Marke und Modell",
    method_vin: "VIN / Frame-Code",
    privacy_text: "Ich stimme der Datenschutzerklärung zu",
    btn_submit_order: "Liste per WhatsApp senden",
    // Плейсхолдеры
    ph_parts_list:
      "Liste der benötigten Ersatzteile (z. B. Bremsbeläge vorne, Ölfilter)",
    ph_client_name: "Ihr Name",
    ph_car_make: "Marke (z. B. BMW)",
    ph_car_model: "Modell (z. B. X5)",
    ph_car_year: "Jahr",
    ph_vin_code: "VIN-Code eingeben (17 Zeichen)",

    // Ошибки валидации
    err_select_branch:
      "Bitte wählen Sie eine Filiale aus, um die Bestellung zu senden",
    err_describe_parts:
      "Bitte beschreiben Sie die benötigten Teile (mindestens 3 Zeichen)",
    err_parts_validation:
      "Die Beschreibung muss Buchstaben oder Zahlen enthalten",
    err_specify_name: "Bitte geben Sie Ihren Namen an",
    err_name_validation:
      "Der Name enthält unzulässige Zeichen (Zahlen oder Sonderzeichen)",
    err_specify_make: "Bitte geben Sie die Automarke an",
    err_specify_model: "Bitte geben Sie das Automodell an",
    err_invalid_year: "Bitte geben Sie ein gültiges Jahr ein (4 Ziffern)",
    err_vin_length:
      "Die VIN muss genau 17 Zeichen lang sein (aktuell: {length})",
    err_vin_validation:
      "Die VIN enthält unzulässige Zeichen (nur lateinische Buchstaben und Zahlen, ohne I, O, Q)",
    err_missing_phone:
      "Fehler: Die Telefonnummer für die ausgewählte Filiale wurde nicht gefunden.",

    // Заголовки сообщения для WhatsApp
    wa_order: "Bestellung",
    wa_branch: "Filiale",
    wa_client: "Kunde",
    wa_car_data: "Fahrzeugdaten",
    wa_make: "Marke",
    wa_model: "Modell",
    wa_year: "Jahr",
    wa_vin: "VIN-Code",
    wa_want_to_order: "Ich möchte bestellen",
    btn_callback: "📞 Rückruf anfordern",
    btn_order: "🛒 Befehl",
    hero_slide1_title: "Hochwertige Autoteile für Ihr Fahrzeug",
    hero_slide1_desc:
      "Direktlieferungen von Ersatzteilen und Zubehör. Schneller Versand und Qualitätsgarantie.",
    hero_slide2_title: "Schneller Versand bundesweit",
    hero_slide2_desc:
      "Flexible Logistik und zuverlässige Partner für den Transport aller Teile.",
    btn_catalog: "Katalog anzeigen",
    btn_contact: "Kontaktieren Sie uns",
    promo_tag: "Aktion",
    promo_text: "10% Rabatt auf die erste Großbestellung!",
    hero_title:
      "Zuverlässige Autoteile für Einzelhandel und Werkstätten in ganz Europa",
    hero_subtitle:
      "Direktlieferungen vom Hersteller. Über 50.000 Artikel auf Lager.",
    hero_cta: "Kosten berechnen",
    tab_by_car: "Nach Automarke",
    tab_by_vin: "Nach VIN-Code",
    label_car: "Marke, Modell, Baujahr *",
    label_vin: "VIN / Fahrgestellnummer *",
    label_parts: "Benötigte Ersatzteile *",
    label_name: "Ihr Name *",
    label_phone: "Telefonnummer *",
    gdpr_agree: "Ich stimme der",
    gdpr_privacy_link: "Datenschutzerklärung",
    btn_whatsapp: "Per WhatsApp senden",
    btn_send: "Senden",
    counter_1: "Ersatzteile auf Lager",
    counter_2: "Durchschnittliche Antwortzeit",
    counter_3: "Jahre Erfahrung im EU-Markt",
    conditions_title: "Konditionen der Zusammenarbeit",
    b2c_title: "Für Einzelhandelskunden",
    b2c_item_1: "Verkauf ab 1 Stück",
    b2c_item_2: "Bequeme Zahlung per Karte oder Überweisung",
    b2c_item_3: "Schnelle Kurierlieferung",
    b2b_title: "Für Werkstätten und Großhändler",
    b2b_item_1: "Arbeit nach offiziellem Vertrag",
    b2b_item_2: "Zahlung mit/ohne MwSt.",
    b2b_item_3: "Persönlicher Manager und Mengenrabatte",
    timeline_title: "Ablauf der Zusammenarbeit",
    step_1_title: "Anfrage",
    step_1_desc: "Senden Sie eine Anfrage über die Website oder WhatsApp",
    step_2_title: "Kalkulation",
    step_2_desc: "Der Manager wählt passende Teile und Preise aus",
    step_3_title: "Abstimmung",
    step_3_desc: "Bestätigung von Details und Zahlungsbedingungen",
    step_4_title: "Erhalt",
    step_4_desc: "Selbstabholung vom Lager oder Lieferung an die Tür",
    reviews_title: "Kundenbewertungen",
    review_1_text:
      "Toller Service, BMW-Teile kamen am nächsten Tag an. Alles Originalteile.",
    review_2_text:
      "Wir arbeiten seit einem halben Jahr im Großhandel zusammen. Keine Beanstandungen.",
    reviews_google_btn: "Alle Bewertungen auf Google Maps anzeigen",
    faq_title: "Häufig gestellte Fragen",
    faq_q1: "Wie wähle ich das richtige Ersatzteil per VIN-Code aus?",
    faq_a1:
      "Senden Sie eine Anfrage mit der 17-stelligen Fahrgestellnummer Ihres Fahrzeugs. Unsere Spezialisten wählen kostenlos 100% passende Originalteile und geprüfte Alternativen aus.",
    faq_q2: "Welche Garantie gibt es auf die Teile?",
    faq_a2:
      "Für alle Originalteile und zertifizierten Alternativen gilt eine Herstellergarantie von 12 bis 24 Monaten bei Montage in unserer oder einer autorisierten Werkstatt.",
    faq_q3: "Was tun, wenn das Teil nicht passt?",
    faq_a3:
      "Sie können die Ware innerhalb von 14 Tagen nach Erhalt umtauschen oder zurückgeben, sofern der Zustand unverändert ist und keine Einbauspuren vorhanden sind.",
    faq_q4: "Arbeiten Sie mit Geschäftskunden und im Großhandel?",
    faq_a4:
      "Ja, wir arbeiten mit Werkstätten, Fuhrparks und Firmen auf Rechnung mit MwSt. Für Stammkunden gibt es ein flexibles Rabattsystem.",
    contacts_title: "Unsere Filialen",
    branch_westerkappeln: "Westerkappeln",
    branch_rheine: "Rheine",
    address_label: "Adresse:",
    phone_label: "Telefon:",
    email_label: "Email",
    hours_label: "Öffnungszeiten:",
    link_impressum: "Impressum",
    link_datenschutz: "Datenschutz",
    modal_callback_title: "Svetlana",
    btn_wait_call: "Ich warte auf einen Anruf!",
    cookie_text:
      "Wir verwenden Cookies, um die Nutzung der Website zu verbessern.",
    cookie_accept: "Akzeptieren",
    cookie_reject: "Ablehnen",
    privacy_text: "Ich stimme der Datenschutzerklärung zu",
    select_method_title: "Wählen Sie eine Filiale aus",
  },
};

/* ==========================================================================
     01. THEME SWITCHER
     ========================================================================== */
function initThemeSwitcher() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const iconSpan = themeBtn
    ? themeBtn.querySelector(".theme-toggle__icon")
    : null;

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    state.currentTheme = theme;
    localStorage.setItem("sfr_theme", theme);
    if (iconSpan) {
      iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  applyTheme(state.currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      applyTheme(state.currentTheme === "light" ? "dark" : "light");
    });
  }
}

/* ==========================================================================
     02. MULTI-LANGUAGE MODULE & BRANCH HELPER
     ========================================================================== */
function updateBranchInfo(branchId) {
  state.activeBranch = branchId;
  const currentData = branchData[branchId];
  if (!currentData) return;

  const addressEl = document.querySelector("#branch-address-text");
  const hoursEl = document.querySelector("#branch-hours-text");

  if (addressEl)
    addressEl.textContent =
      currentData.address[state.currentLang] || currentData.address.ru;
  if (hoursEl)
    hoursEl.textContent =
      currentData.hours[state.currentLang] || currentData.hours.ru;
}

function applyLanguage(lang) {
  state.currentLang = lang;
  localStorage.setItem("sfr_lang", lang);
  document.documentElement.lang = lang;

  // 1. Обновляем все элементы с переводами через data-lang-key
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 2. Обновляем placeholders у полей ввода формы заказа через data-lang-ph
  const placeholders = document.querySelectorAll("[data-lang-ph]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-lang-ph");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // 3. ДОБАВЛЯЕМ: Меняем текст на самой кнопке-переключателе
  const langToggleText = document.getElementById("langToggleText");
  if (langToggleText) {
    // Если язык 'ru', кнопка показывает 'RU' (или наоборот 'DE', если это кнопка "переключить на...")
    // Обычно пишут язык, который включится при клике, либо текущий.
    // Если вам нужно показывать текущий язык большими буквами:
    langToggleText.textContent = lang.toUpperCase();
  }

  // 3. Обновляем информацию о филиалах
  updateBranchInfo(state.activeBranch);
}

function initLanguageSwitcher() {
  const langToggleBtn = document.getElementById("langToggleBtn");
  const languages = ["ru", "de"]; // Доступные языки

  // При клике циклично переключаем язык
  langToggleBtn?.addEventListener("click", () => {
    const currentIndex = languages.indexOf(state.currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex];

    applyLanguage(nextLang);
  });

  // Первоначальная привязка сохраненного или текущего языка
  const savedLang = localStorage.getItem("sfr_lang");
  const initialLang =
    savedLang && languages.includes(savedLang)
      ? savedLang
      : state.currentLang || "ru";

  applyLanguage(initialLang);
}

/* ==========================================================================
   03. HERO SLIDER MODULE
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-slider__dots .dot");
  const prevBtn = document.querySelector(".hero-slider__btn--prev");
  const nextBtn = document.querySelector(".hero-slider__btn--next");
  const sliderEl = document.querySelector(".hero-slider");

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  nextBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    nextSlide();
    resetAutoplay();
  });

  prevBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevSlide();
    resetAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"), 10);
      if (!isNaN(slideIndex)) {
        showSlide(slideIndex);
        resetAutoplay();
      }
    });
  });

  function startAutoplay() {
    // Очищаем существующий таймер перед запуском нового, чтобы избежать дублирования
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    startAutoplay();
  }

  // --- Пауза при наведении мыши ---
  if (sliderEl) {
    sliderEl.addEventListener("mouseenter", () => {
      clearInterval(autoplayTimer);
    });

    sliderEl.addEventListener("mouseleave", () => {
      startAutoplay();
    });
  }

  // Touch Swipe Support
  let startX = 0;
  sliderEl?.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );

  sliderEl?.addEventListener(
    "touchend",
    (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 40) {
        if (diff > 0) nextSlide();
        else prevSlide();
        resetAutoplay();
      }
    },
    { passive: true },
  );

  showSlide(currentIndex);
  startAutoplay();
}

/* ==========================================================================
     04. BACK-TO-TOP BUTTON
     ========================================================================== */
function initBackToTop() {
  const backBtn = document.getElementById("back-to-top-btn");
  if (!backBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backBtn.classList.add("is-visible");
    } else {
      backBtn.classList.remove("is-visible");
    }
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
     05. FORM TABS & AUTOCOMPLETE & WHATSAPP
     ========================================================================== */
function initFormTabs() {
  const tabBtns = document.querySelectorAll(".form-tabs .tab-btn");
  const tabCar = document.getElementById("tab-car-content");
  const tabVin = document.getElementById("tab-vin-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      state.activeTab = targetTab;

      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (targetTab === "car") {
        tabCar?.classList.add("active");
        tabVin?.classList.remove("active");
      } else {
        tabVin?.classList.add("active");
        tabCar?.classList.remove("active");
      }
    });
  });
}

function initAutocomplete() {
  const input = document.getElementById("car-autocomplete-input");
  const list = document.getElementById("autocomplete-list");
  if (!input || !list) return;

  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();
    list.innerHTML = "";

    if (!value) {
      list.classList.remove("is-open");
      return;
    }

    const matches = carBrandsList.filter((item) =>
      item.toLowerCase().includes(value),
    );

    if (matches.length > 0) {
      matches.forEach((matchText) => {
        const li = document.createElement("li");
        li.className = "autocomplete-item";
        li.textContent = matchText;
        li.addEventListener("click", () => {
          input.value = matchText;
          list.classList.remove("is-open");
        });
        list.appendChild(li);
      });
      list.classList.add("is-open");
    } else {
      list.classList.remove("is-open");
    }
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !list.contains(e.target)) {
      list.classList.remove("is-open");
    }
  });
}

function initWhatsAppForm() {
  const form = document.getElementById("whatsapp-form");
  const gdprCheckbox = document.getElementById("form-gdpr-checkbox");
  const submitBtn = document.getElementById("whatsapp-submit-btn");

  if (!form || !gdprCheckbox || !submitBtn) return;

  gdprCheckbox.addEventListener("change", () => {
    submitBtn.disabled = !gdprCheckbox.checked;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!gdprCheckbox.checked) return;

    const userName = document.getElementById("user-name-input")?.value.trim();
    const partsList = document.getElementById("parts-list-input")?.value.trim();
    let queryDetails = "";

    if (state.activeTab === "car") {
      const carVal = document
        .getElementById("car-autocomplete-input")
        ?.value.trim();
      queryDetails = `*Марка/Модель:* ${carVal || "Не указано"}`;
    } else {
      const vinVal = document.getElementById("vin-input")?.value.trim();
      queryDetails = `*VIN-код:* ${vinVal || "Не указано"}`;
    }

    const messageText =
      `🚗 *Новая заявка с сайта SFR Carparts*\n\n` +
      `*Имя:* ${userName || "Не указано"}\n` +
      `${queryDetails}\n` +
      `*Список запчастей:* ${partsList || "Не указано"}`;

    const phoneNumber = "380988737379";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, "_blank");
  });
}

/* ==========================================================================
     06. REVIEWS SLIDER
     ========================================================================== */
function initReviewsSlider() {
  const track = document.querySelector(".reviews-slider__track");
  const cards = document.querySelectorAll(".review-card");
  const prevBtns = document.querySelectorAll(".reviews-slider__btn--prev");
  const nextBtns = document.querySelectorAll(".reviews-slider__btn--next");

  if (!track || !cards.length) return;

  let currentIndex = 0;
  const gap = 20;

  function updateSlider() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const moveAmount = (cardWidth + gap) * currentIndex;
    track.style.transform = `translateX(-${moveAmount}px)`;
  }

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlider();
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlider();
    });
  });

  let startX = 0;
  let endX = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );

  track.addEventListener(
    "touchend",
    (e) => {
      endX = e.changedTouches[0].clientX;
      const threshold = 40;
      if (startX - endX > threshold && currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
      } else if (endX - startX > threshold && currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    },
    { passive: true },
  );

  window.addEventListener("resize", updateSlider);
}

/* ==========================================================================
     07. FAQ ACCORDION
     ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-item__trigger");

    trigger?.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("is-open");
        const otherTrigger = otherItem.querySelector(".faq-item__trigger");
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ==========================================================================
     08. BRANCH SWITCHER
     ========================================================================== */
function initBranchSwitcher() {
  const tabs = document.querySelectorAll(".branch-tab");
  const panels = document.querySelectorAll(".branch-panel");
  const mapIframe = document.getElementById("branch-map");

  if (!tabs.length || !mapIframe) return;

  const mapSources = {
    westerkappeln:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.178292070856!2d7.877986176521058!3d52.31276717200771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9dab12812124d%3A0x7bee7f03ab8bd596!2sSFR%20Carparts%20GmbH!5e0!3m2!1sru!2sus!4v1788498202868!5m2!1sru!2sus",
    rheine:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.1692109225246!2d7.446642076519947!3d52.294783172002965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b82d8aaea5d03d%3A0x453ebd43ee7ce2ae!2sSFR%20Carparts%20GmbH!5e0!3m2!1sru!2sus!4v1788498498224!5m2!1sru!2sus",
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetBranch = tab.getAttribute("data-branch");

      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      panels.forEach((panel) => {
        panel.classList.remove("active");
        if (panel.id === `branch-${targetBranch}`) {
          panel.classList.add("active");
        }
      });

      if (targetBranch === "westerkappeln") updateBranchInfo("1");
      if (targetBranch === "rheine") updateBranchInfo("2");

      if (mapSources[targetBranch]) {
        mapIframe.src = mapSources[targetBranch];
      }
    });
  });
}

/* ==========================================================================
     10. COOKIE BANNER
     ========================================================================== */
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept-btn");
  const rejectBtn = document.getElementById("cookie-reject-btn");

  if (!banner) {
    console.warn("Cookie banner element not found!");
    return;
  }

  const cookieChoice = localStorage.getItem("sfr_cookie_consent");

  // Если выбора нет — показываем баннер сразу
  if (!cookieChoice) {
    banner.classList.add("is-visible");
  } else if (cookieChoice === "accepted") {
    if (typeof state !== "undefined") state.gdprConsented = true;
  }

  function handleChoice(accepted) {
    localStorage.setItem(
      "sfr_cookie_consent",
      accepted ? "accepted" : "rejected",
    );
    if (typeof state !== "undefined") state.gdprConsented = accepted;
    banner.classList.remove("is-visible");
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => handleChoice(true));
  }
  if (rejectBtn) {
    rejectBtn.addEventListener("click", () => handleChoice(false));
  }
}

// Запускаем при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  initCookieBanner();
});

/* ==========================================
   УНИВЕРСАЛЬНЫЙ МОДУЛЬ МОДАЛЬНЫХ ОКНА
   ========================================== */
(function initGlobalModals() {
  // Открытие любого модального окна по его ID
  window.openModalById = function (modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Генерируем событие, чтобы конкретная форма узнала об открытии
    modal.dispatchEvent(new CustomEvent("modal:opened", { bubbles: true }));
  };

  // Закрытие активного окна (или конкретно переданного)
  window.closeModal = function (targetModal) {
    const activeModal = targetModal || document.querySelector(".modal.is-open");
    if (!activeModal) return;

    activeModal.classList.remove("is-open");
    activeModal.setAttribute("aria-hidden", "true");

    // Снимаем блокировку прокрутки, только если больше нет открытых окон
    if (!document.querySelector(".modal.is-open")) {
      document.body.classList.remove("modal-open");
    }

    // Генерируем событие закрытия для сброса ошибок или полей
    activeModal.dispatchEvent(
      new CustomEvent("modal:closed", { bubbles: true }),
    );
  };

  // 1. Делегирование ОТКРЫТИЯ (для кнопок в слайдерах, шапке, подвале)
  document.addEventListener("click", function (e) {
    const trigger = e.target.closest("[data-open-modal]");
    if (trigger) {
      e.preventDefault();
      const modalId = trigger.getAttribute("data-open-modal");
      window.openModalById(modalId);
    }
  });

  // 2. Делегирование ЗАКРЫТИЯ (крестик, оверлей или кнопки с data-close)
  document.addEventListener("click", function (e) {
    const closeBtn = e.target.closest("[data-close]");
    if (closeBtn) {
      const modal = closeBtn.closest(".modal");
      window.closeModal(modal);
    }
  });

  // 3. Закрытие по клавише Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      window.closeModal();
    }
  });
})();

/* ==========================================
   orderModal — Логика модального окна заказа
   ========================================== */

function initOrderFormLogic() {
  const orderModal = document.getElementById("orderModal");
  if (!orderModal) return;

  const submitBtn = orderModal.querySelector("#submitBtn");
  const privacyCheckbox = orderModal.querySelector("#privacyCheckbox");

  let currentOrderMethod = "by-car";

  // --- 1. Номера телефонов филиалов ---
  const BRANCH_PHONES = {
    westerkappeln: "380988737379",
    rheine: "380738737379",
  };

  // --- 2. Данные менеджеров по филиалам ---
  const BRANCH_MANAGERS = {
    westerkappeln: {
      name: { ru: "Светлана", de: "Svetlana" },
      avatar: "./assets/images/member-svetlana.jpg", // Укажи точный путь к фото
      status: {
        ru: "🚗 Запчасти онлайн. Поиск за 10 минут по оптовым ценам.",
        de: "🚗 Online-Ersatzteile. Finden Sie Ersatzteile in 10 Minuten zu Großhandelspreisen.",
      },
    },
    rheine: {
      name: { ru: "Сергей", de: "Sergey" },
      avatar: "./assets/images/userpic.jpg", // Укажи точный путь к фото
      status: {
        ru: "⏱️ Онлайн. Подберу запчасти за 10 минут. Без ошибок.",
        de: "⏱️ Online. Ich finde die passenden Teile in 10 Minuten. Garantiert fehlerfrei.",
      },
    },
  };

  // --- 3. Словарь переводов ---
  const orderTranslations = {
    selectBranch: {
      ru: "Выберите филиал для отправки заказа",
      de: "Bitte wählen Sie eine Filiale aus, um die Bestellung zu senden",
    },
    describeParts: {
      ru: "Опишите необходимые запчасти (минимум 3 символа)",
      de: "Bitte beschreiben Sie die benötigten Teile (mindestens 3 Zeichen)",
    },
    partsValidation: {
      ru: "Описание должно содержать буквы или цифры",
      de: "Die Beschreibung muss Buchstaben oder Zahlen enthalten",
    },
    specifyName: {
      ru: "Укажите ваше имя",
      de: "Bitte geben Sie Ihren Namen an",
    },
    nameValidation: {
      ru: "Имя содержит недопустимые символы (цифры или знаки)",
      de: "Der Name enthält unzulässige Zeichen (Zahlen oder Sonderzeichen)",
    },
    specifyMake: {
      ru: "Укажите марку автомобиля",
      de: "Bitte geben Sie die Automarke an",
    },
    specifyModel: {
      ru: "Укажите модель автомобиля",
      de: "Bitte geben Sie das Automodell an",
    },
    invalidYear: {
      ru: "Введите корректный год (4 цифры)",
      de: "Bitte geben Sie ein gültiges Jahr ein (4 Ziffern)",
    },
    vinLength: {
      ru: (len) => `VIN должен быть ровно 17 символов (сейчас: ${len})`,
      de: (len) => `Die VIN muss genau 17 Zeichen lang sein (aktuell: ${len})`,
    },
    vinValidation: {
      ru: "VIN содержит недопустимые символы (только латиница и цифры, без I, O, Q)",
      de: "Die VIN enthält unzulässige Zeichen (nur lateinische Buchstaben und Zahlen, ohne I, O, Q)",
    },
    missingPhoneError: {
      ru: "Ошибка: Не найден номер телефона для выбранного филиала.",
      de: "Fehler: Die Telefonnummer für die ausgewählte Filiale wurde nicht gefunden.",
    },

    // Сообщения WhatsApp
    waOrder: { ru: "Заказ", de: "Bestellung" },
    waBranch: { ru: "Филиал", de: "Filiale" },
    waClient: { ru: "Клиент", de: "Kunde" },
    waCarData: { ru: "Данные авто", de: "Fahrzeugdaten" },
    waMake: { ru: "Марка", de: "Marke" },
    waModel: { ru: "Модель", de: "Modell" },
    waYear: { ru: "Год", de: "Jahr" },
    waVinCode: { ru: "VIN-код", de: "VIN-Code" },
    waWantToOrder: { ru: "Хочу заказать", de: "Ich möchte bestellen" },
  };

  function getCurrentLang() {
    return (
      (window.state && window.state.currentLang) ||
      document.documentElement.lang ||
      "ru"
    );
  }

  function getOrderText(key, param = null) {
    const lang = getCurrentLang();

    let translation =
      orderTranslations[key]?.[lang] ||
      orderTranslations[key]?.["ru"] ||
      (window.translations && window.translations[lang]?.[key]) ||
      (window.translations && window.translations["ru"]?.[key]) ||
      key;

    if (typeof translation === "function") {
      return translation(param);
    }

    if (param && typeof param === "object") {
      Object.keys(param).forEach((placeholder) => {
        translation = translation.replace(
          `{${placeholder}}`,
          param[placeholder],
        );
      });
    }

    return translation;
  }

  // --- 4. Динамическое обновление блока менеджера ---
  function renderManagerBadge(branchId) {
    const managerBlock = orderModal.querySelector(".manager-badge");
    if (!managerBlock) return;

    const lang = getCurrentLang();
    const managerData = BRANCH_MANAGERS[branchId];

    const nameEl = managerBlock.querySelector(".manager-name");
    const statusEl = managerBlock.querySelector(".manager-status");
    const avatarWrap = managerBlock.querySelector(".manager-avatar");
    const avatarImg = managerBlock.querySelector(".manager-avatar img");

    // Если филиал не выбран
    if (!branchId || !managerData) {
      if (avatarWrap) avatarWrap.classList.add("is-hidden"); // Скрываем кружок фото
      if (nameEl)
        nameEl.textContent =
          lang === "de" ? "Filiale wählen" : "Выберите филиал";
      if (statusEl)
        statusEl.textContent =
          lang === "de"
            ? "Manager erscheint nach der Auswahl"
            : "Менеджер появится после выбора филиала";
      return;
    }

    // Если филиал выбран — показываем фото и подставляем данные
    if (avatarWrap) avatarWrap.classList.remove("is-hidden");
    if (avatarImg) avatarImg.src = managerData.avatar;
    if (nameEl)
      nameEl.textContent = managerData.name[lang] || managerData.name["ru"];
    if (statusEl)
      statusEl.textContent =
        managerData.status[lang] || managerData.status["ru"];

    if (typeof window.updateBranchInfo === "function") {
      window.updateBranchInfo(branchId);
    }
  }

  function toggleSubmitButton() {
    if (!submitBtn) return;
    if (privacyCheckbox) {
      submitBtn.disabled = !privacyCheckbox.checked;
    }
  }

  function handleMethodChange(selectedValue) {
    currentOrderMethod = selectedValue;
    const carBlock = document.getElementById("carFieldsBlock");
    const vinBlock = document.getElementById("vinFieldsBlock");

    clearErrors();

    if (selectedValue === "by-car") {
      if (vinBlock) vinBlock.classList.remove("active-field");
      if (carBlock) carBlock.classList.add("active-field");
    } else {
      if (carBlock) carBlock.classList.remove("active-field");
      if (vinBlock) vinBlock.classList.add("active-field");
    }
  }

  function clearErrors() {
    orderModal
      .querySelectorAll(".has-error")
      .forEach((el) => el.classList.remove("has-error"));
    orderModal
      .querySelectorAll(".field-error-text, .error-message")
      .forEach((el) => (el.style.display = "none"));
  }

  function clearFieldError(inputElement) {
    if (!inputElement) return;
    const group =
      inputElement.closest(".form-group") || inputElement.parentElement;
    if (group) {
      group.classList.remove("has-error");
      const err = group.querySelector(".field-error-text, .error-message");
      if (err) err.style.display = "none";
    }
  }

  function showError(inputElement, message) {
    if (!inputElement) return;
    const group =
      inputElement.closest(".form-group") || inputElement.parentElement;
    group.classList.add("has-error");

    let errorMsg =
      group.querySelector(".field-error-text") ||
      group.querySelector(".error-message");

    if (!errorMsg) {
      errorMsg = document.createElement("span");
      errorMsg.className = "field-error-text error-message";
      group.appendChild(errorMsg);
    }

    errorMsg.textContent = message;
    errorMsg.style.display = "block";

    if (typeof inputElement.focus === "function") {
      inputElement.focus();
    }
  }

  // --- 5. Валидация и отправка ---
  function validateAndSend() {
    clearErrors();

    const selectedBranchRadio = orderModal.querySelector(
      'input[name="branch"]:checked',
    );
    if (!selectedBranchRadio) {
      const branchContainer =
        orderModal.querySelector(".branch-options") ||
        orderModal.querySelector(".branch-selection");
      showError(branchContainer, getOrderText("selectBranch"));
      return;
    }

    const partsInput = document.getElementById("partsList");
    const nameInput = document.getElementById("clientName");

    if (
      !partsInput ||
      !partsInput.value.trim() ||
      partsInput.value.trim().length < 3
    ) {
      showError(partsInput, getOrderText("describeParts"));
      return;
    }

    const partsRegex = /[a-zA-Zа-яА-ЯёЁäöüÄÖÜß0-9]/;
    if (!partsRegex.test(partsInput.value)) {
      showError(partsInput, getOrderText("partsValidation"));
      return;
    }

    if (
      !nameInput ||
      !nameInput.value.trim() ||
      nameInput.value.trim().length < 2
    ) {
      showError(nameInput, getOrderText("specifyName"));
      return;
    }

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁäöüÄÖÜß\s\-\']+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
      showError(nameInput, getOrderText("nameValidation"));
      return;
    }

    if (currentOrderMethod === "by-car") {
      const makeInput = document.getElementById("carMake");
      const modelInput = document.getElementById("carModel");
      const yearInput = document.getElementById("carYear");
      const currentYear = new Date().getFullYear();

      if (!makeInput || !makeInput.value.trim()) {
        showError(makeInput, getOrderText("specifyMake"));
        return;
      }

      if (!modelInput || !modelInput.value.trim()) {
        showError(modelInput, getOrderText("specifyModel"));
        return;
      }

      const yearValue = yearInput ? parseInt(yearInput.value.trim(), 10) : NaN;
      if (
        !yearInput ||
        !yearInput.value.trim() ||
        isNaN(yearValue) ||
        yearInput.value.trim().length !== 4 ||
        yearValue < 1900 ||
        yearValue > currentYear
      ) {
        showError(yearInput, getOrderText("invalidYear"));
        return;
      }
    } else {
      const vinInput = document.getElementById("vinCode");
      const vinValue = vinInput ? vinInput.value.replace(/\s+/g, "") : "";
      const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;

      if (!vinInput || vinValue.length !== 17) {
        showError(vinInput, getOrderText("vinLength", vinValue.length));
        return;
      }

      if (!vinRegex.test(vinValue)) {
        showError(vinInput, getOrderText("vinValidation"));
        return;
      }
    }

    executeWhatsAppSend(selectedBranchRadio);
  }

  function encodeForWhatsApp(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  function executeWhatsAppSend(selectedBranchRadio) {
    const selectedBranch = selectedBranchRadio ? selectedBranchRadio.value : "";
    const phone = BRANCH_PHONES[selectedBranch];

    if (!phone) {
      alert(getOrderText("missingPhoneError"));
      return;
    }

    const branchLabel = selectedBranchRadio.parentElement
      ? selectedBranchRadio.parentElement.textContent.trim()
      : selectedBranch.toUpperCase();

    const name = document.getElementById("clientName").value.trim();
    const parts = document.getElementById("partsList").value.trim();
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const orderNumber = `${day}${month}-${hours}${minutes}`;

    let vehicleBlock = "";
    if (currentOrderMethod === "by-car") {
      const make = document.getElementById("carMake").value.trim();
      const model = document.getElementById("carModel").value.trim();
      const year = document.getElementById("carYear").value.trim();

      vehicleBlock = `🚗 ${getOrderText("waCarData")}:\n• ${getOrderText("waMake")}: ${make}\n• ${getOrderText("waModel")}: ${model}\n• ${getOrderText("waYear")}: ${year}`;
    } else {
      const vin = document
        .getElementById("vinCode")
        .value.replace(/\s+/g, "")
        .toUpperCase();
      vehicleBlock = `🔑 ${getOrderText("waVinCode")}:\n${vin}`;
    }

    const message =
      `📦 ${getOrderText("waOrder")} № ${orderNumber}\n` +
      `🏢 ${getOrderText("waBranch")}: ${branchLabel}\n` +
      `👤 ${getOrderText("waClient")}: ${name}\n` +
      `_________________________\n\n` +
      `${vehicleBlock}\n` +
      `_________________________\n\n` +
      `📋 ${getOrderText("waWantToOrder")}:\n${parts}`;

    const encodedMessage = encodeForWhatsApp(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  }

  // --- 6. Навешивание слушателей ---

  if (privacyCheckbox) {
    privacyCheckbox.addEventListener("change", toggleSubmitButton);
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      validateAndSend();
    });
  }

  orderModal.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", function () {
      clearFieldError(this);
    });
  });

  // Отслеживание кликов и изменений (включая выбор филиала)
  orderModal.addEventListener("change", (e) => {
    if (e.target.name === "carSpecification") {
      handleMethodChange(e.target.value);
    }

    if (e.target.name === "branch") {
      const selectedBranch = e.target.value;

      // Вызываем смену менеджера
      renderManagerBadge(selectedBranch);

      const group =
        e.target.closest(".form-group") ||
        e.target.closest(".branch-selection") ||
        e.target.closest(".branch-options");
      if (group) {
        group.classList.remove("has-error");
        const err = group.querySelector(".field-error-text, .error-message");
        if (err) err.style.display = "none";
      }
    }
  });

  orderModal.addEventListener("modal:opened", () => {
    const checkedRadio = orderModal.querySelector(
      'input[name="carSpecification"]:checked',
    );
    handleMethodChange(checkedRadio ? checkedRadio.value : "by-car");

    // Проверяем текущий филиал при открытии
    const selectedBranchRadio = orderModal.querySelector(
      'input[name="branch"]:checked',
    );
    renderManagerBadge(selectedBranchRadio ? selectedBranchRadio.value : null);

    toggleSubmitButton();
  });

  orderModal.addEventListener("modal:closed", () => {
    clearErrors();
  });

  // Инициализация менеджера при первичной загрузке
  const initialBranchRadio = orderModal.querySelector(
    'input[name="branch"]:checked',
  );
  renderManagerBadge(initialBranchRadio ? initialBranchRadio.value : null);

  toggleSubmitButton();

  // --- 7. Автокомплиты (Марка, Год, Модель) ---

  const popularMakes = [
    "Audi",
    "BMW",
    "Chery",
    "Chevrolet",
    "Ford",
    "Geely",
    "Honda",
    "Hyundai",
    "Kia",
    "Mazda",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Opel",
    "Peugeot",
    "Renault",
    "Skoda",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  const carModelsDatabase = {
    Audi: ["A3", "A4", "A5", "A6", "Q3", "Q5", "Q7"],
    BMW: ["Series 3", "Series 5", "X3", "X5", "X6"],
    Chery: ["Tiggo 4", "Tiggo 7", "Tiggo 8", "Arrizo 8"],
    Chevrolet: ["Cruze", "Aveo", "Lacetti", "Captiva", "Tracker"],
    Ford: ["Focus", "Mondeo", "Fiesta", "Kuga", "Explorer"],
    Geely: ["Coolray", "Monjaro", "Atlas", "Tugella"],
    Honda: ["Civic", "Accord", "CR-V", "HR-V"],
    Hyundai: ["Solaris", "Elantra", "Sonata", "Tucson", "Santa Fe"],
    Kia: ["Rio", "Ceed", "Sportage", "Sorento", "K5"],
    Mazda: ["Mazda 3", "Mazda 6", "CX-5", "CX-9"],
    "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "S-Class"],
    Mitsubishi: ["Lancer", "Outlander", "Pajero", "ASX"],
    Nissan: ["Almera", "Qashqai", "X-Trail", "Teana", "Murano"],
    Opel: ["Astra", "Corsa", "Zafira", "Mokka"],
    Peugeot: ["308", "408", "3008", "5008"],
    Renault: ["Logan", "Sandero", "Duster", "Kaptor", "Arkana"],
    Skoda: ["Octavia", "Rapid", "Superb", "Kodiaq", "Karoq"],
    Toyota: ["Camry", "Corolla", "RAV4", "Land Cruiser", "Highlander"],
    Volkswagen: ["Polo", "Golf", "Passat", "Tiguan", "Touareg"],
    Volvo: ["XC40", "XC60", "XC90", "S60"],
  };

  const makeInput = document.getElementById("carMake");
  if (makeInput) {
    let makeBox = document.getElementById("makeSuggestions");
    if (!makeBox) {
      makeBox = document.createElement("div");
      makeBox.id = "makeSuggestions";
      makeBox.className = "suggestions-box";
      makeInput.parentNode.style.position = "relative";
      makeInput.parentNode.appendChild(makeBox);
    }

    makeInput.addEventListener("input", function () {
      const val = this.value.trim().toLowerCase();
      makeBox.innerHTML = "";

      if (val === "") {
        makeBox.classList.remove("is-visible");
        return;
      }

      const filtered = popularMakes.filter((make) =>
        make.toLowerCase().startsWith(val),
      );

      if (filtered.length === 0) {
        makeBox.classList.remove("is-visible");
        return;
      }

      filtered.forEach((make) => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.textContent = make;
        makeBox.appendChild(item);
      });

      makeBox.classList.add("is-visible");
    });

    makeBox.addEventListener("mousedown", function (e) {
      if (e.target.classList.contains("suggestion-item")) {
        makeInput.value = e.target.textContent;
        makeBox.classList.remove("is-visible");
        clearFieldError(makeInput);
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target !== makeInput) {
        makeBox.classList.remove("is-visible");
      }
    });
  }

  const yearInput = document.getElementById("carYear");
  if (yearInput) {
    let yearBox = document.getElementById("yearSuggestions");
    if (!yearBox) {
      yearBox = document.createElement("div");
      yearBox.id = "yearSuggestions";
      yearBox.className = "suggestions-box";
      yearInput.parentNode.style.position = "relative";
      yearInput.parentNode.appendChild(yearBox);
    }

    const currentYear = new Date().getFullYear();
    const yearsList = [];
    for (let y = currentYear; y >= currentYear - 30; y--) {
      yearsList.push(y.toString());
    }

    yearInput.addEventListener("input", function () {
      const val = this.value.trim();
      yearBox.innerHTML = "";

      if (val === "") {
        yearBox.classList.remove("is-visible");
        return;
      }

      const filtered = yearsList.filter((y) => y.startsWith(val));

      if (filtered.length === 0) {
        yearBox.classList.remove("is-visible");
        return;
      }

      filtered.forEach((year) => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.textContent = year;
        yearBox.appendChild(item);
      });

      yearBox.classList.add("is-visible");
    });

    yearBox.addEventListener("mousedown", function (e) {
      if (e.target.classList.contains("suggestion-item")) {
        yearInput.value = e.target.textContent;
        yearBox.classList.remove("is-visible");
        clearFieldError(yearInput);
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target !== yearInput) {
        yearBox.classList.remove("is-visible");
      }
    });
  }

  const modelInput = document.getElementById("carModel");
  if (modelInput && makeInput) {
    let modelBox = document.getElementById("modelSuggestions");
    if (!modelBox) {
      modelBox = document.createElement("div");
      modelBox.id = "modelSuggestions";
      modelBox.className = "suggestions-box";
      modelInput.parentNode.style.position = "relative";
      modelInput.parentNode.appendChild(modelBox);
    }

    modelInput.addEventListener("input", function () {
      const val = this.value.trim().toLowerCase();
      const selectedMake = makeInput.value.trim();
      modelBox.innerHTML = "";

      if (val === "" || !selectedMake || !carModelsDatabase[selectedMake]) {
        modelBox.classList.remove("is-visible");
        return;
      }

      const availableModels = carModelsDatabase[selectedMake];
      const filtered = availableModels.filter((model) =>
        model.toLowerCase().startsWith(val),
      );

      if (filtered.length === 0) {
        modelBox.classList.remove("is-visible");
        return;
      }

      filtered.forEach((model) => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.textContent = model;
        modelBox.appendChild(item);
      });

      modelBox.classList.add("is-visible");
    });

    modelBox.addEventListener("mousedown", function (e) {
      if (e.target.classList.contains("suggestion-item")) {
        modelInput.value = e.target.textContent;
        modelBox.classList.remove("is-visible");
        clearFieldError(modelInput);
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target !== modelInput) {
        modelBox.classList.remove("is-visible");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initOrderFormLogic);

/* ===================================
  callback modal
====================================  */
document.addEventListener("DOMContentLoaded", () => {
  const callbackForm = document.getElementById("callback-form");

  if (callbackForm) {
    callbackForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const phoneInput = document.getElementById("callback-phone");
      let phone = phoneInput.value.trim();

      // Удаляем старый кастомный тултип/ошибку, если был
      const existingError = callbackForm.querySelector(".form-error-msg");
      if (existingError) existingError.remove();
      phoneInput.classList.remove("is-invalid");

      // 1. Проверка на пустоту
      if (!phone) {
        showError(phoneInput, callbackForm, "required");
        return;
      }
      // 2. Проверка на буквы
      else if (/[a-zA-Zа-яА-ЯäöüßÄÖÜ]/.test(phone)) {
        showError(phoneInput, callbackForm, "noLetters");
        return;
      }
      // 3. Строгая проверка начала номера (для Германии: должен начинаться с +49, 49 или с 0)
      else if (
        !phone.startsWith("+49") &&
        !phone.startsWith("49") &&
        !phone.startsWith("0")
      ) {
        showError(phoneInput, callbackForm, "invalidStart");
        return;
      }

      // Очищаем для дальнейшей проверки длины
      let phoneClean = phone.replace(/\D/g, "");

      // Проверка на ошибку «+490...» или «490...»
      if (phone.startsWith("+0") || phoneClean.startsWith("490")) {
        showError(phoneInput, callbackForm, "noZeroAfterCode");
        return;
      }

      // Нормализация (если с 0, меняем на 49)
      if (phone.startsWith("0")) {
        phoneClean = "49" + phoneClean.slice(1);
      }

      // 4. Проверка итоговой длины (для Германии с учетом кода 49)
      if (phoneClean.length < 10 || phoneClean.length > 15) {
        // Передаем текущую длину как параметр для динамической ошибки
        showError(phoneInput, callbackForm, "invalidLength", phoneClean.length);
        return;
      }
      // 5. Защита от одинаковых цифр
      else if (/^(\d)\1+$/.test(phoneClean)) {
        showError(phoneInput, callbackForm, "sameDigits");
        return;
      }

      // Финальный номер для отправки (всегда с плюсом)
      const formattedPhone = "+" + phoneClean;

      // Отправка в WhatsApp
      const phoneOwner = "380988737379";
      const iconPhone = String.fromCodePoint(128222); // 📞

      // Перевод текста сообщения для WhatsApp
      const currentLang = document.documentElement.lang || "ru";
      const waMessage =
        currentLang === "de"
          ? `${iconPhone} Rückrufanfrage\n👤 Telefon: ${formattedPhone}`
          : `${iconPhone} Запрос на обратный звонок\n👤 Телефон: ${formattedPhone}`;

      const encodedMessage = encodeURIComponent(waMessage);
      window.open(
        `https://wa.me/${phoneOwner}?text=${encodedMessage}`,
        "_blank",
      );

      // Закрытие модалки
      const modal = callbackForm.closest(".modal");
      if (modal && typeof window.closeModal === "function") {
        window.closeModal(modal);
      } else if (modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
      }

      callbackForm.reset();
    });

    // Убираем ошибку при вводе
    const phoneInput = document.getElementById("callback-phone");
    if (phoneInput) {
      phoneInput.addEventListener("input", () => {
        phoneInput.classList.remove("is-invalid");
        const existingError = callbackForm.querySelector(".form-error-msg");
        if (existingError) existingError.remove();
      });
    }
  }
});

// Вспомогательная функция для вывода ошибок (теперь с поддержкой языков)
function showError(inputElement, formElement, errorKey, currentLength = 0) {
  // 1. Определяем текущий язык страницы из <html lang="...">
  const currentLang = document.documentElement.lang || "ru";

  // 2. Словарь всех ошибок на двух языках
  const translations = {
    required: {
      ru: "Пожалуйста, введите номер телефона",
      de: "Bitte geben Sie eine Telefonnummer ein",
    },
    noLetters: {
      ru: "Номер телефона не должен содержать буквы",
      de: "Die Telefonnummer darf keine Buchstaben enthalten",
    },
    invalidStart: {
      ru: "Номер должен начинаться с +49, 49 или 0",
      de: "Die Nummer muss mit +49, 49 или 0 beginnen",
    },
    noZeroAfterCode: {
      ru: "Некорректный формат: после кода страны ноль не нужен",
      de: "Ungültiges Format: Nach der Landesvorwahl wird keine Null benötigt",
    },
    invalidLength: {
      ru: `Неверная длина номера (сейчас ${currentLength} цифр, а нужно от 10 до 15)`,
      de: `Ungültige Nummernlänge (aktuell ${currentLength} Ziffern, erforderlich sind 10 bis 15)`,
    },
    sameDigits: {
      ru: "Номер не может состоять из одинаковых цифр",
      de: "Die Nummer darf nicht aus identischen Ziffern bestehen",
    },
  };

  // 3. Вытаскиваем нужную строку (если языка нет в базе, берем русский 'ru')
  const message =
    translations[errorKey]?.[currentLang] || translations[errorKey]["ru"];

  // 4. Отрисовка ошибки на странице
  inputElement.classList.add("is-invalid");
  const errorMsg = document.createElement("div");
  errorMsg.className = "form-error-msg";
  errorMsg.textContent = message;
  errorMsg.style.cssText =
    "color: var(--accent-color, #ff3366); font-size: 12px; margin-top: 6px; text-align: center;";

  const fieldContainer = inputElement.closest(".callback-field");
  if (fieldContainer) {
    fieldContainer.appendChild(errorMsg);
  }

  inputElement.focus();
}

/* ==========================================================================
     11. APP INITIALIZATION
     ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initThemeSwitcher();
  initLanguageSwitcher();
  initHeroSlider();
  initBackToTop();
  initFormTabs();
  initAutocomplete();
  initWhatsAppForm();
  initReviewsSlider();
  initFaqAccordion();
  initBranchSwitcher();
  initModals();
  initCookieBanner();
  initOrderFormLogic();
});
