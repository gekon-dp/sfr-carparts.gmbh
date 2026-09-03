/* ==========================================================================
   00. GLOBAL CONFIG & TRANSLATIONS DICTIONARY
   ========================================================================== */

const state = {
  currentLang: localStorage.getItem("sfr_lang") || "ru",
  currentTheme: localStorage.getItem("sfr_theme") || "light",
  activeTab: "car",
  activeBranch: "1",
  gdprConsented: false,
};

const branchData = {
  1: {
    address: {
      ru: "Alexanderplatz 1, 10178 Берлин, Германия",
      de: "Alexanderplatz 1, 10178 Berlin, Deutschland",
    },
    phone: "+49 (0) 30 123456",
    hours: {
      ru: "Пн-Пт: 08:00 - 18:00, Сб: 09:00 - 14:00",
      de: "Mo-Fr: 08:00 - 18:00, Sa: 09:00 - 14:00",
    },
    mapUrl:
      "https://maps.google.com/maps?q=Alexanderplatz%201,%20Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  2: {
    address: {
      ru: "Marienplatz 8, 80331 Мюнхен, Германия",
      de: "Marienplatz 8, 80331 München, Deutschland",
    },
    phone: "+49 (0) 89 654321",
    hours: {
      ru: "Пн-Пт: 08:30 - 17:30, Сб: 09:00 - 14:00",
      de: "Mo-Fr: 08:30 - 17:30, Sa: 09:00 - 14:00",
    },
    mapUrl:
      "https://maps.google.com/maps?q=Marienplatz%208,%20Munich&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
};

// const carBrandsList = [
//   "Audi A4",
//   "Audi A6",
//   "Audi Q7",
//   "BMW 3 Series",
//   "BMW 5 Series",
//   "BMW X5",
//   "BMW X6",
//   "Mercedes-Benz C-Class",
//   "Mercedes-Benz E-Class",
//   "Mercedes-Benz GLE",
//   "Porsche Cayenne",
//   "Porsche Macan",
//   "Volkswagen Golf",
//   "Volkswagen Passat",
//   "Volkswagen Tiguan",
// ];

const translations = {
  ru: {
    nav_conditions: "Условия",
    nav_timeline: "Схема работы",
    nav_reviews: "Отзывы",
    nav_contacts: "Контакты",
    btn_callback: "Заказать звонок",
    hero_slide1_title: "Качественные автозапчасти для вашего авто",
    hero_slide1_desc:
      "Прямые поставки запчастей и комплектующих. Быстрая доставка и гарантия качества.",
    hero_slide2_title: "Оперативная доставка по всей стране",
    hero_slide2_desc:
      "Гибкая логистика и надежные партнеры для транспортировки любых деталей.",
    btn_catalog: "Сделать заказ!",
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
    branch_berlin: "Берлин",
    branch_munich: "Мюнхен",
    address_label: "Адрес:",
    phone_label: "Телефон:",
    hours_label: "Режим работы:",
    link_impressum: "Impressum",
    link_datenschutz: "Datenschutz",
    modal_callback_title: "Обратный звонок",
    cookie_text: "Мы используем файлы cookie для улучшения работы сайта.",
    cookie_accept: "Принять",
    cookie_reject: "Отклонить",
  },
  de: {
    nav_conditions: "Konditionen",
    nav_timeline: "Ablauf",
    nav_reviews: "Bewertungen",
    nav_contacts: "Kontakte",
    btn_callback: "Rückruf anfordern",
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
    branch_berlin: "Berlin",
    branch_munich: "München",
    address_label: "Adresse:",
    phone_label: "Telefon:",
    hours_label: "Öffnungszeiten:",
    link_impressum: "Impressum",
    link_datenschutz: "Datenschutz",
    modal_callback_title: "Rückruf anfordern",
    cookie_text:
      "Wir verwenden Cookies, um die Nutzung der Website zu verbessern.",
    cookie_accept: "Akzeptieren",
    cookie_reject: "Ablehnen",
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

  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  updateBranchInfo(state.activeBranch);
}

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      if (targetLang && targetLang !== state.currentLang) {
        applyLanguage(targetLang);
      }
    });
  });

  applyLanguage(state.currentLang);
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
    berlin:
      "https://maps.google.com/maps?q=Alexanderplatz%201,%20Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
    munich:
      "https://maps.google.com/maps?q=Marienplatz%208,%20Munich&t=&z=15&ie=UTF8&iwloc=&output=embed",
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

      if (targetBranch === "berlin") updateBranchInfo("1");
      if (targetBranch === "munich") updateBranchInfo("2");

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
   orderModal
   ========================================== */
/* ==========================================
   orderModal
   ========================================== */
function initOrderFormLogic() {
  const orderModal = document.getElementById("orderModal");
  if (!orderModal) return;

  const submitBtn = orderModal.querySelector("#submitBtn");
  const privacyCheckbox = orderModal.querySelector("#privacyCheckbox");

  let currentOrderMethod = "by-car";

  // --- Карта номеров телефонов по филиалам ---
  const BRANCH_PHONES = {
    westerkappeln: "380988737379", // Укажи реальные номера
    rheine: "380738737379",
  };

  // --- 1. Управление состоянием кнопки ---
  function toggleSubmitButton() {
    if (!submitBtn) return;
    if (privacyCheckbox) {
      submitBtn.disabled = !privacyCheckbox.checked;
    }
  }

  // --- 2. Переключение способа ввода (Марка/Модель VS VIN) ---
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

  // --- 3. Валидация и отправка ---
  function validateAndSend() {
    clearErrors();

    // 0. ПРОВЕРКА ВЫБОРА ФИЛИАЛА (ОБЯЗАТЕЛЬНОЕ ПОЛЕ)
    const selectedBranchRadio = orderModal.querySelector(
      'input[name="branch"]:checked',
    );
    if (!selectedBranchRadio) {
      const branchContainer =
        orderModal.querySelector(".branch-options") ||
        orderModal.querySelector(".branch-selection");
      showError(branchContainer, "Выберите филиал для отправки заказа");
      return;
    }

    const partsInput = document.getElementById("partsList");
    const nameInput = document.getElementById("clientName");

    // 1. ПРОВЕРКА ДЕТАЛЕЙ
    if (
      !partsInput ||
      !partsInput.value.trim() ||
      partsInput.value.trim().length < 3
    ) {
      showError(partsInput, "Опишите необходимые запчасти (минимум 3 символа)");
      return;
    }

    const partsRegex = /[a-zA-Zа-яА-ЯёЁäöüÄÖÜß0-9]/;
    if (!partsRegex.test(partsInput.value)) {
      showError(partsInput, "Описание должно содержать буквы или цифры");
      return;
    }

    // 2. ПРОВЕРКА ИМЕНИ
    if (
      !nameInput ||
      !nameInput.value.trim() ||
      nameInput.value.trim().length < 2
    ) {
      showError(nameInput, "Укажите ваше имя");
      return;
    }

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁäöüÄÖÜß\s\-\']+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
      showError(
        nameInput,
        "Имя содержит недопустимые символы (цифры или знаки)",
      );
      return;
    }

    // 3. Проверяем авто или VIN
    if (currentOrderMethod === "by-car") {
      const makeInput = document.getElementById("carMake");
      const modelInput = document.getElementById("carModel");
      const yearInput = document.getElementById("carYear");
      const currentYear = new Date().getFullYear();

      if (!makeInput || !makeInput.value.trim()) {
        showError(makeInput, "Укажите марку автомобиля");
        return;
      }

      if (!modelInput || !modelInput.value.trim()) {
        showError(modelInput, "Укажите модель автомобиля");
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
        showError(yearInput, "Введите корректный год (4 цифры)");
        return;
      }
    } else {
      const vinInput = document.getElementById("vinCode");
      const vinValue = vinInput ? vinInput.value.replace(/\s+/g, "") : "";
      const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;

      if (!vinInput || vinValue.length !== 17) {
        showError(
          vinInput,
          `VIN должен быть ровно 17 символов (сейчас: ${vinValue.length})`,
        );
        return;
      }

      if (!vinRegex.test(vinValue)) {
        showError(
          vinInput,
          "VIN содержит недопустимые символы (только латиница и цифры, без I, O, Q)",
        );
        return;
      }
    }

    // Если всё ок — вызываем отправку в WhatsApp
    executeWhatsAppSend(selectedBranchRadio);
  }

  // --- 4. Отправка в WhatsApp ---
  function encodeForWhatsApp(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  function executeWhatsAppSend(selectedBranchRadio) {
    const selectedBranch = selectedBranchRadio ? selectedBranchRadio.value : "";
    const phone = BRANCH_PHONES[selectedBranch];

    if (!phone) {
      alert("Ошибка: Не найден номер телефона для выбранного филиала.");
      return;
    }

    // Текст названия филиала
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

      vehicleBlock = `🚗 Данные авто:\n• Марка: ${make}\n• Модель: ${model}\n• Год: ${year}`;
    } else {
      const vin = document
        .getElementById("vinCode")
        .value.replace(/\s+/g, "")
        .toUpperCase();
      vehicleBlock = `🔑 VIN-код:\n${vin}`;
    }

    const message =
      `📦 Заказ № ${orderNumber}\n` +
      `🏢 Филиал: ${branchLabel}\n` +
      `👤 Клиент: ${name}\n` +
      `_________________________\n\n` +
      `${vehicleBlock}\n` +
      `_________________________\n\n` +
      `📋 Хочу заказать:\n${parts}`;

    const encodedMessage = encodeForWhatsApp(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  }

  // --- 5. Вспомогательные функции ошибок ---
  function clearErrors() {
    orderModal
      .querySelectorAll(".has-error")
      .forEach((el) => el.classList.remove("has-error"));
    orderModal
      .querySelectorAll(".field-error-text, .error-message")
      .forEach((el) => (el.style.display = "none"));
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

  // Очистка ошибок при вводе
  orderModal.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", function () {
      const group = this.closest(".form-group") || this.parentElement;
      group.classList.remove("has-error");
      const err = group.querySelector(".field-error-text, .error-message");
      if (err) err.style.display = "none";
    });
  });

  // Переключение радиокнопок
  orderModal.addEventListener("change", (e) => {
    if (e.target.name === "carSpecification") {
      handleMethodChange(e.target.value);
    }

    // Сброс ошибки выборки филиала при клике
    if (e.target.name === "branch") {
      const group =
        e.target.closest(".form-group") ||
        e.target.closest(".branch-selection");
      if (group) {
        group.classList.remove("has-error");
        const err = group.querySelector(".field-error-text, .error-message");
        if (err) err.style.display = "none";
      }
    }
  });

  // События от глобального менеджера модалок
  orderModal.addEventListener("modal:opened", () => {
    const checkedRadio = orderModal.querySelector(
      'input[name="carSpecification"]:checked',
    );
    handleMethodChange(checkedRadio ? checkedRadio.value : "by-car");
    toggleSubmitButton();
  });

  orderModal.addEventListener("modal:closed", () => {
    clearErrors();
  });

  // Первичный вызов при загрузке
  toggleSubmitButton();

  // --- 7. Автокомплит для марок авто ---
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

        const group =
          makeInput.closest(".form-group") || makeInput.parentElement;
        group.classList.remove("has-error");
        const err = group.querySelector(".field-error-text, .error-message");
        if (err) err.style.display = "none";
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target !== makeInput) {
        makeBox.classList.remove("is-visible");
      }
    });
  }

  // --- 8. Автокомплит для года автомобиля ---
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

        const group =
          yearInput.closest(".form-group") || yearInput.parentElement;
        group.classList.remove("has-error");
        const err = group.querySelector(".field-error-text, .error-message");
        if (err) err.style.display = "none";
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target !== yearInput) {
        yearBox.classList.remove("is-visible");
      }
    });
  }

  // --- 9. База моделей по маркам и автокомплит для модели авто ---
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

        const group =
          modelInput.closest(".form-group") || modelInput.parentElement;
        group.classList.remove("has-error");
        const err = group.querySelector(".field-error-text, .error-message");
        if (err) err.style.display = "none";
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

      let errorMessage = "";

      // 1. Проверка на пустоту
      if (!phone) {
        errorMessage = "Пожалуйста, введите номер телефона";
      }
      // 2. Проверка на буквы
      else if (/[a-zA-Zа-яА-ЯäöüßÄÖÜ]/.test(phone)) {
        errorMessage = "Номер телефона не должен содержать буквы";
      }
      // 3. Строгая проверка начала номера (для Германии: должен начинаться с +49, 49 или с 0)
      else if (
        !phone.startsWith("+49") &&
        !phone.startsWith("49") &&
        !phone.startsWith("0")
      ) {
        errorMessage = "Номер должен начинаться с +49, 49 или 0";
      }

      if (errorMessage) {
        showError(phoneInput, callbackForm, errorMessage);
        return;
      }

      // Очищаем для дальнейшей проверки длины
      let phoneClean = phone.replace(/\D/g, "");

      // Проверка на ошибку «+490...» или «490...»
      if (phone.startsWith("+0") || phoneClean.startsWith("490")) {
        errorMessage = "Некорректный формат: после кода страны ноль не нужен";
      }

      if (errorMessage) {
        showError(phoneInput, callbackForm, errorMessage);
        return;
      }

      // Нормализация (если с 0, меняем на 49)
      if (phone.startsWith("0")) {
        phoneClean = "49" + phoneClean.slice(1);
      }

      // 4. Проверка итоговой длины (для Германии с учетом кода 49)
      if (phoneClean.length < 10 || phoneClean.length > 15) {
        errorMessage = `Неверная длина номера (сейчас ${phoneClean.length} цифр, а нужно от 10 до 15)`;
      }
      // 5. Защита от одинаковых цифр
      else if (/^(\d)\1+$/.test(phoneClean)) {
        errorMessage = "Номер не может состоять из одинаковых цифр";
      }

      if (errorMessage) {
        showError(phoneInput, callbackForm, errorMessage);
        return;
      }

      // Финальный номер для отправки (всегда с плюсом)
      const formattedPhone = "+" + phoneClean;

      // Отправка в WhatsApp
      const phoneOwner = "380988737379";
      const iconPhone = String.fromCodePoint(128222); // 📞
      const message = `${iconPhone} Запрос на обратный звонок\n👤 Телефон: ${formattedPhone}`;
      const encodedMessage = encodeURIComponent(message);
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

// Вспомогательная функция для вывода ошибок
function showError(inputElement, formElement, message) {
  inputElement.classList.add("is-invalid");
  const errorMsg = document.createElement("div");
  errorMsg.className = "form-error-msg";
  errorMsg.textContent = message;
  errorMsg.style.cssText =
    "color: var(--accent-color, #ff3366); font-size: 12px; margin-top: 6px; text-align: center;";
  inputElement.closest(".callback-field").appendChild(errorMsg);
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
