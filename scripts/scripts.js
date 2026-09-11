/* ==========================================================================
GLOBAL CONFIG
============================================================================= */
const LANGUAGES = ["ru", "de"];

const state = {
  currentLang: localStorage.getItem("sfr_lang") || "de",
  currentTheme: localStorage.getItem("sfr_theme") || "light",
  activeBranch: "westerkappeln",
  gdprConsented: false,
};

const branchData = {
  westerkappeln: {
    address: {
      ru: "Оснабрюк штрассе 10, 49492 Вестеркаппельн, Германия",
      de: "Osnabrücker Straße 10, 49492 Westerkappeln, Deutschland",
    },
    phone: "+4954048999397",
    whatsapp: "491754247818",
    hours: {
      ru: "Пн-Пт: 09:00 - 18:00, Сб: 09:00 - 14:00",
      de: "Mo-Fr: 09:00 - 18:00, Sa: 09:00 - 14:00",
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.178292070856!2d7.877986176521058!3d52.31276717200771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9dab12812124d%3A0x7bee7f03ab8bd596!2sSFR%20Carparts%20GmbH!5e0!3m2!1sru!2sus!4v1788498202868!5m2!1sru!2sus",
    manager: {
      name: { ru: "Светлана", de: "Svetlana" },
      avatar: "./assets/images/member-svetlana.jpg",
      status: {
        ru: "💬 Нужна деталь? Пришлите VIN — отвечу через 10 минут!",
        de: "🚗 Ersatzteil gesucht? Schick mir den Schein – Antwort in 10 Minuten!",
      },
    },
  },
  rheine: {
    address: {
      ru: "Фридрих-Эберт-Ринг 177-179, 48429 Райне, Германия",
      de: "Friedrich-Ebert-Ring 177-179, 48429 Rheine, Deutschland",
    },
    phone: "+4959719461246",
    whatsapp: "4915221025874",
    hours: {
      ru: "Пн-Пт: 09:00 - 18:00, Сб: 09:00 - 14:00",
      de: "Mo-Fr: 09:00 - 18:00, Sa: 09:00 - 14:00",
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.1692109225246!2d7.446642076519947!3d52.294783172002965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b82d8aaea5d03d%3A0x453ebd43ee7ce2ae!2sSFR%20Carparts%20GmbH!5e0!3m2!1sru!2sus!4v1788498498224!5m2!1sru!2sus",
    manager: {
      name: { ru: "Сергей", de: "Sergey" },
      avatar: "./assets/images/userpic.jpg",
      status: {
        ru: "⏱️ Онлайн. Подберу запчасти за 10 минут. Без ошибок.",
        de: "⚙️ Online. Ich finde die passenden Teile in 10 Minuten. Garantiert fehlerfrei.",
      },
    },
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
    btn_callback: "📞 Перезвоните мне",
    manager_status: "● Онлайн. Подберу запчасти за 10 минут",
    branch_westerkappeln: "Вестеркаппельн",
    branch_rheine: "Райне",
    method_car: "Марка и модель",
    method_vin: "VIN / Frame код",
    privacy_text: "Согласен с Политикой конфиденциальности",
    btn_submit_order: "Отправить список в WhatsApp",
    ph_parts_list:
      "Список необходимых запчастей (например: передние колодки, масляный фильтр)",
    ph_client_name: "Ваше имя",
    ph_car_make: "Марка (напр. BMW)",
    ph_car_model: "Модель (напр. X5)",
    ph_car_year: "Год",
    ph_vin_code: "Введите VIN-код (17 знаков)",
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
    wa_order: "Заказ",
    wa_branch: "Филиал",
    wa_client: "Клиент",
    wa_phone: "Телефон",
    wa_car_data: "Данные авто",
    wa_make: "Марка",
    wa_model: "Модель",
    wa_year: "Год",
    wa_vin: "VIN-код",
    wa_want_to_order: "Хочу заказать",
    hero_slide1_title: "Качественные автозапчасти для вашего авто",
    hero_slide1_desc:
      "Прямые поставки запчастей и комплектующих. Быстрая доставка и гарантия качества.",
    hero_slide2_title: "Оперативная доставка по всей стране",
    hero_slide2_desc:
      "Гибкая логистика и надежные партнеры для транспортировки любых деталей.",
    btn_catalog: "Перейти в каталог",
    btn_contact: "Связаться с нами",
    counter_1: "Запчастей в наличии",
    counter_2: "Среднее время ответа",
    counter_3: "Опыта работы на рынке ЕС",
    counter_4: "поддержка и консультация",
    conditions_title: "Условия сотрудничества",
    condition_1_title: "Быстрая доставка",
    condition_1_desc:
      "Отправляем заказы в день обращения. Доставка по всей стране с проверенными логистическими компаниями.",
    condition_2_title: "Гарантия качества",
    condition_2_desc:
      "Все детали проходят предпродажную проверку. Предоставляем официальную гарантию от производителя.",
    condition_3_title: "Гибкая система скидок",
    condition_3_desc:
      "Специальные цены для оптовых покупателей и постоянных клиентов. Индивидуальный расчет под каждый заказ.",
    condition_4_title: "Подбор по VIN-коду",
    condition_4_desc:
      "Наши специалисты точно подберут 100% подходящую деталь для вашей марки и модели авто.",
    timeline_title: "Схема работы",
    step_1_title: "Заявка",
    step_1_desc: "Оставляете запрос на сайте или в WhatsApp",
    step_2_title: "Проценка",
    step_2_desc: "Менеджер подбирает запчасти и цены",
    step_3_title: "Согласование",
    step_3_desc: "Утверждаем детали заказа и условия оплаты",
    step_4_title: "Получение",
    step_4_desc: "Самовывоз со склада или доставка до двери",
    brands_title: "Наши партнеры",
    reviews_title: "Отзывы наших клиентов",
    review_1_text:
      "Отличный сервис, запчасти на BMW приехали на следующий день. Все оригинальное.",
    review_2_text:
      "Работаем по опту уже полгода. Замечаний по качеству и договорам нет.",
    review_3_text:
      "Работаем с ребятами оптом уже более года. Поставки без задержек, гарантийные вопросы решаются мгновенно. Надежный партнер для автосервиса.",
    google_reviews_btn: "Смотреть все отзывы на Google Картах",
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
    address_label: "Адрес:",
    phone_label: "Телефон:",
    email_label: "Email",
    hours_label: "Режим работы:",
    hours_value: "Пн-Пт: 09:00 - 18:00, Сб: 09:00 - 14:00",
    link_impressum: "Impressum",
    link_datenschutz: "Datenschutz",
    modal_callback_title: "Светлана",
    btn_wait_call: "Жду звонка!",
    cookie_accept: "Принять все",
    cookie_reject: "Только необходимые",
    select_method_title: "Выберите филиал:",
  },
  de: {
    nav_conditions: "Konditionen",
    nav_timeline: "Ablauf",
    nav_brands: "Partner",
    nav_reviews: "Bewertungen",
    nav_contacts: "Kontakte",
    btn_order: "🛒 Bestellung",
    btn_callback: "📞 Rückruf anfordern",
    manager_status: "● Online. Ich finde Ersatzteile in 10 Minuten",
    branch_westerkappeln: "Westerkappeln",
    branch_rheine: "Rheine",
    method_car: "Marke und Modell",
    method_vin: "VIN / Frame-Code",
    privacy_text: "Ich stimme der Datenschutzerklärung zu",
    btn_submit_order: "Liste per WhatsApp senden",
    ph_parts_list:
      "Liste der benötigten Ersatzteile (z. B. Bremsbeläge vorne, Ölfilter)",
    ph_client_name: "Ihr Name",
    ph_car_make: "Marke (z. B. BMW)",
    ph_car_model: "Modell (z. B. X5)",
    ph_car_year: "Jahr",
    ph_vin_code: "VIN-Code eingeben (17 Zeichen)",
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
    wa_order: "Bestellung",
    wa_branch: "Filiale",
    wa_client: "Kunde",
    wa_phone: "Telefon",
    wa_car_data: "Fahrzeugdaten",
    wa_make: "Marke",
    wa_model: "Modell",
    wa_year: "Jahr",
    wa_vin: "VIN-Code",
    wa_want_to_order: "Ich möchte bestellen",
    hero_slide1_title: "Hochwertige Autoteile für Ihr Fahrzeug",
    hero_slide1_desc:
      "Direktlieferungen von Ersatzteilen und Zubehör. Schneller Versand und Qualitätsgarantie.",
    hero_slide2_title: "Schneller Versand bundesweit",
    hero_slide2_desc:
      "Flexible Logistik und zuverlässige Partner für den Transport aller Teile.",
    btn_catalog: "Katalog anzeigen",
    btn_contact: "Kontaktieren Sie uns",
    counter_1: "Ersatzteile auf Lager",
    counter_2: "Durchschnittliche Antwortzeit",
    counter_3: "Jahre Erfahrung im EU-Markt",
    counter_4: "Support und Beratung",
    conditions_title: "Konditionen der Zusammenarbeit",
    condition_1_title: "Schnelle Lieferung",
    condition_1_desc:
      "Wir versenden Bestellungen am Tag der Anfrage. Lieferung bundesweit mit geprüften Logistikpartnern.",
    condition_2_title: "Qualitätsgarantie",
    condition_2_desc:
      "Alle Teile durchlaufen eine Prüfung vor dem Verkauf. Wir gewähren die offizielle Herstellergarantie.",
    condition_3_title: "Flexibles Rabattsystem",
    condition_3_desc:
      "Sonderpreise für Großabnehmer und Stammkunden. Individuelle Kalkulation für jede Bestellung.",
    condition_4_title: "Auswahl per VIN-Code",
    condition_4_desc:
      "Unsere Spezialisten wählen das 100% passende Teil für Ihre Marke und Ihr Modell aus.",
    timeline_title: "Ablauf der Zusammenarbeit",
    step_1_title: "Anfrage",
    step_1_desc: "Senden Sie eine Anfrage über die Website oder WhatsApp",
    step_2_title: "Kalkulation",
    step_2_desc: "Der Manager wählt passende Teile und Preise aus",
    step_3_title: "Abstimmung",
    step_3_desc: "Bestätigung von Details und Zahlungsbedingungen",
    step_4_title: "Erhalt",
    step_4_desc: "Selbstabholung vom Lager oder Lieferung an die Tür",
    brands_title: "Unsere Partner",
    reviews_title: "Kundenbewertungen",
    review_1_text:
      "Toller Service, BMW-Teile kamen am nächsten Tag an. Alles Originalteile.",
    review_2_text:
      "Wir arbeiten seit einem halben Jahr im Großhandel zusammen. Keine Beanstandungen.",
    review_3_text:
      "Wir arbeiten seit über einem Jahr im Großhandel zusammen. Lieferungen ohne Verzögerung, Garantiefragen werden sofort gelöst. Ein zuverlässiger Partner für die Werkstatt.",
    google_reviews_btn: "Alle Bewertungen auf Google Maps anzeigen",
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
    address_label: "Adresse:",
    phone_label: "Telefon:",
    email_label: "Email",
    hours_label: "Öffnungszeiten:",
    hours_value: "Mo-Fr: 09:00 - 18:00, Sa: 09:00 - 14:00",
    link_impressum: "Impressum",
    link_datenschutz: "Datenschutz",
    modal_callback_title: "Svetlana",
    btn_wait_call: "Ich warte auf einen Anruf!",
    cookie_accept: "Alle akzeptieren",
    cookie_reject: "Nur notwendige",
    select_method_title: "Wählen Sie eine Filiale aus",
  },
};

const ORDER_I18N = {
  selectBranch: {
    ru: "Выберите филиал для отправки заказа",
    ru_manager: "Укажите филиал для оформления заявки",
    de: "Bitte wählen Sie eine Filiale aus, um die Bestellung zu senden",
    de_manager: "Bitte wählen Sie die Filiale für die Bestellung aus",
  },
  describeParts: {
    ru: "Опишите необходимые запчасти (минимум 3 символа)",
    ru_manager: "Введите список запчастей клиента (минимум 3 символа)",
    de: "Bitte beschreiben Sie die benötigten Teile (mindestens 3 Zeichen)",
    de_manager:
      "Geben Sie die Teileliste des Kunden ein (mindestens 3 Zeichen)",
  },
  partsValidation: {
    ru: "Описание должно содержать буквы или цифры",
    ru_manager: "Список запчастей должен содержать буквы или цифры",
    de: "Die Beschreibung muss Buchstaben oder Zahlen enthalten",
    de_manager: "Die Teileliste muss Buchstaben oder Zahlen enthalten",
  },
  specifyName: {
    ru: "Укажите ваше имя",
    ru_manager: "Укажите имя клиента",
    de: "Bitte geben Sie Ihren Namen an",
    de_manager: "Bitte geben Sie den Kundennamen an",
  },
  nameValidation: {
    ru: "Имя содержит недопустимые символы (цифры или знаки)",
    ru_manager: "Имя клиента содержит недопустимые символы",
    de: "Der Name enthält unzulässige Zeichen (Zahlen oder Sonderzeichen)",
    de_manager: "Der Kundenname enthält unzulässige Zeichen",
  },
  phoneLabel: {
    ru: "📞 Телефон клиента:",
    de: "📞 Telefonnummer des Kunden:",
  },
  specifyPhone: {
    ru: "Укажите ваш номер телефона",
    ru_manager: "Укажите номер телефона клиента",
    de: "Bitte geben Sie Ihre Telefonnummer an",
    de_manager: "Bitte geben Sie die Telefonnummer des Kunden an",
  },
  phoneValidation: {
    ru: "Введите корректный номер телефона",
    ru_manager: "Введите корректный номер телефона клиента",
    de: "Bitte geben Sie eine gültige Telefonnummer ein",
    de_manager: "Bitte geben Sie eine gültige Kundentelefonnummer ein",
  },
  specifyMake: {
    ru: "Укажите марку автомобиля",
    ru_manager: "Выберите или введите марку авто клиента",
    de: "Bitte geben Sie die Automarke an",
    de_manager: "Bitte geben Sie die Automarke des Kunden an",
  },
  specifyModel: {
    ru: "Укажите модель автомобиля",
    ru_manager: "Укажите модель авто клиента",
    de: "Bitte geben Sie das Automodell an",
    de_manager: "Bitte geben Sie das Automodell des Kunden an",
  },
  invalidYear: {
    ru: "Введите корректный год (4 цифры)",
    ru_manager: "Укажите корректный год выпуска авто (4 цифры)",
    de: "Bitte geben Sie ein gültiges Jahr ein (4 Ziffern)",
    de_manager: "Bitte geben Sie ein gültiges Baujahr an (4 Ziffern)",
  },
  vinLength: {
    ru: (len) => `VIN должен быть ровно 17 символов (сейчас: ${len})`,
    ru_manager: (len) =>
      `VIN клиента должен быть ровно 17 символов (сейчас: ${len})`,
    de: (len) => `Die VIN muss genau 17 Zeichen lang sein (aktuell: ${len})`,
    de_manager: (len) =>
      `Die Kunden-VIN muss genau 17 Zeichen lang sein (aktuell: ${len})`,
  },
  vinValidation: {
    ru: "VIN содержит недопустимые символы (только латиница и цифры, без I, O, Q)",
    ru_manager: "Ошибка в VIN клиента (только латиница и цифры, без I, O, Q)",
    de: "Die VIN enthält unzulässige Zeichen (nur lateinische Buchstaben und Zahlen, ohne I, O, Q)",
    de_manager:
      "Ungültige Kunden-VIN (nur lateinische Buchstaben und Zahlen, ohne I, O, Q)",
  },
  missingPhoneError: {
    ru: "Ошибка: Не найден номер телефона для выбранного филиала.",
    de: "Fehler: Die Telefonnummer für die ausgewählte Filiale wurde nicht gefunden.",
  },
  waOrder: { ru: "Заказ", de: "Bestellung" },
  waBranch: { ru: "Филиал", de: "Filiale" },
  waClient: { ru: "Клиент", de: "Kunde" },
  waPhone: { ru: "Телефон", de: "Telefon" },
  waCarData: { ru: "Данные авто", de: "Fahrzeugdaten" },
  waMake: { ru: "Марка", de: "Marke" },
  waModel: { ru: "Модель", de: "Modell" },
  waYear: { ru: "Год", de: "Jahr" },
  waVinCode: { ru: "VIN-код", de: "VIN-Code" },
  waWantToOrder: { ru: "Запрошенные детали", de: "Angefragte Teile" },
  waClientConfirmHeader: { ru: "👋 Здравствуйте", de: "👋 Hallo" },
  waClientConfirmSub: {
    ru: "Спасибо за обращение! Мы получили ваш заказ",
    de: "Vielen Dank für Ihre Anfrage! Wir haben Ihre Bestellung erhalten",
  },
  waClientListLabel: {
    ru: "📋 Запрошенные детали",
    de: "📋 Angefragte Teile",
  },
  waClientConfirmFooter: {
    ru: "⏱️ Скоро свяжемся с вами по поводу наличия и цены!",
    de: "⏱️ Wir melden uns in Kürze mit Preisen und Verfügbarkeit!",
  },
  waClientThanks: {
    ru: "🤝 Спасибо, что выбрали SFR Carparts!",
    de: "🤝 Vielen Dank, dass Sie sich für SFR Carparts entschieden haben!",
  },
  waOpenClientChat: {
    ru: "💬 Отправить подтверждение клиенту:",
    de: "💬 Bestätigung an den Kunden senden:",
  },
  placeholders: {
    partsList: {
      ru: "Например: Передние тормозные колодки, масляный фильтр...",
      ru_manager: "Список деталей клиента / Артикулы...",
      de: "Z.B.: Bremsbeläge vorne, Ölfilter...",
      de_manager: "Teileliste des Kunden / Artikelnummern...",
    },
    clientName: {
      ru: "Ваше имя",
      ru_manager: "Имя клиента",
      de: "Ihr Name",
      de_manager: "Kundenname",
    },
    clientPhone: {
      ru: "+49...",
      ru_manager: "+49... (номер клиента)",
      de: "+49...",
      de_manager: "+49... (Kundennummer)",
    },
    carMake: {
      ru: "Марка (напр. Audi)",
      ru_manager: "Марка авто клиента",
      de: "Marke (z.B. Audi)",
      de_manager: "Automarke des Kunden",
    },
    carModel: {
      ru: "Модель (напр. A4)",
      ru_manager: "Модель авто клиента",
      de: "Modell (z.B. A4)",
      de_manager: "Automodell des Kunden",
    },
    carYear: {
      ru: "Год",
      ru_manager: "Год авто",
      de: "Jahr",
      de_manager: "Baujahr",
    },
    vinCode: {
      ru: "VIN-код (17 символов)",
      ru_manager: "VIN-код клиента (17 символов)",
      de: "VIN-Code (17 Zeichen)",
      de_manager: "Kunden-VIN (17 Zeichen)",
    },
  },
};

const POPULAR_MAKES = [
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

const CAR_MODELS = {
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

/* ==========================================================================
HELPERS
============================================================================= */
/** Функция перевода (i18n). Возвращает строку перевода для заданного ключа.
 * @param {string} key - Уникальный ключ перевода (например, 'button.submit').
 * @param {string} [lang=state.currentLang] - Язык перевода. По умолчанию берется текущий язык из глобального состояния state.
 * @returns {string} Строка перевода, значение по умолчанию на русском языке или пустая строка.
 */
function t(key, lang = state.currentLang) {
  // Пытаемся получить перевод:
  // 1. Сначала ищем в объекте выбранного языка translations[lang]
  // 2. Если его нет, используем резервный русский перевод translations.ru
  // 3. Если и там нет, возвращаем пустую строку
  return translations[lang]?.[key] || translations.ru?.[key] || "";
}

/**
 * Локализует URL-адрес карты (например, Google Maps iframe),
 * изменяя параметры языка в строке на нужный целевой язык.
 * @param {string} baseUrl - Исходный URL-адрес карты.
 * @param {string} lang - Желаемый язык локализации.
 * @returns {string} Модифицированный URL-адрес с новыми языковыми параметрами.
 */
function getLocalizedMapUrl(baseUrl, lang) {
  // Если базовый URL не передан, сразу возвращаем пустую строку
  if (!baseUrl) return "";

  // Определяем целевой язык: если передан 'de', то используем 'de', для всех остальных случаев — 'ru'
  const targetLang = lang === "de" ? "de" : "ru";
  let src = baseUrl;

  // Проверяем, есть ли уже в URL GET-параметр языка "hl="
  if (src.includes("hl=")) {
    // Если есть, заменяем его значение (две буквы) на наш целевой язык (например, hl=en -> hl=de)
    src = src.replace(/hl=[a-z]{2}/gi, `hl=${targetLang}`);
  } else {
    // Если параметра нет, добавляем его:
    // Используем '&', если в URL уже есть другие параметры (знак '?'), иначе начинаем с '?'
    src += (src.includes("?") ? "&" : "?") + `hl=${targetLang}`;
  }

  // Заменяем внутренние языковые маркеры Google Maps во встроенных ссылках (iframes).
  // Маркеры вида !1sru или !2sde меняются на выбранный targetLang
  src = src.replace(/!1s[a-z]{2}/gi, `!1s${targetLang}`);
  src = src.replace(/!2s[a-z]{2}/gi, `!2s${targetLang}`);

  // Возвращаем полностью обновленный URL карты
  return src;
}

/**
 * Обновляет информацию о филиалах на странице (адреса, часы работы, телефоны и карту)
 * в соответствии с выбранным филиалом и текущим языком интерфейса.
 *
 * @param {string|number} [branchId=state.activeBranch] - Идентификатор филиала. По умолчанию берется активный из состояния.
 */
function updateBranchInfo(branchId = state.activeBranch) {
  // Если переданный филиал существует в базе данных branchData,
  // обновляем текущий активный филиал в глобальном состоянии приложения
  if (branchData[branchId]) {
    state.activeBranch = branchId;
  }

  // Получаем текущий выбранный язык интерфейса
  const lang = state.currentLang;

  // Обходим в цикле все филиалы, доступные в объекте branchData
  Object.keys(branchData).forEach((id) => {
    // Ищем на странице HTML-панель (контейнер) конкретного филиала по его ID
    const panel = document.getElementById(`branch-${id}`);
    const data = branchData[id];

    // Если панели нет на странице или данных по этому ID не нашлось, пропускаем итерацию
    if (!panel || !data) return;

    // Находим внутри панели элементы для адреса, времени работы и телефона
    const addressEl = panel.querySelector(".js-branch-address");
    const hoursEl = panel.querySelector(".js-branch-hours");
    const phoneEl = panel.querySelector(".js-branch-phone");

    // Обновляем текст адреса на текущем языке. Если перевода нет, ставим немецкий по умолчанию (.de)
    if (addressEl) {
      addressEl.textContent = data.address[lang] || data.address.de;
    }

    // Обновляем текст часов работы на текущем языке. Если перевода нет, ставим немецкий (.de)
    if (hoursEl) {
      hoursEl.textContent = data.hours[lang] || data.hours.de;
    }

    // Обновляем телефонный блок: задаем видимый текст и формируем кликабельную ссылку "tel:"
    // (удаляя из номера все пробелы с помощью регулярного выражения /\s+/g)
    if (phoneEl) {
      phoneEl.textContent = data.phone;
      phoneEl.href = `tel:${data.phone.replace(/\s+/g, "")}`;
    }
  });

  // Обновление интерактивной карты (iframe) для активного в данный момент филиала
  const mapIframe = document.getElementById("branch-map");
  const currentData = branchData[state.activeBranch];

  // Если элемент карты есть на странице и у активного филиала задан URL карты
  if (mapIframe && currentData?.mapUrl) {
    // Локализуем ссылку на карту под текущий язык с помощью ранее созданной функции
    const localizedSrc = getLocalizedMapUrl(currentData.mapUrl, lang);

    // Меняем атрибут src у iframe только в том случае, если новая ссылка отличается от текущей
    // (это предотвращает лишнюю перезагрузку карты внутри iframe)
    if (mapIframe.src !== localizedSrc) {
      mapIframe.src = localizedSrc;
    }
  }
}

/**
 * Применяет выбранный язык ко всему интерфейсу сайта.
 * Обновляет тексты, плейсхолдеры, атрибуты страницы, состояние филиалов
 * и сохраняет выбор пользователя в локальное хранилище.
 *
 * @param {string} lang - Код целевого языка (например, 'de', 'ru').
 */
function applyLanguage(lang) {
  // Проверяем, входит ли переданный язык в список разрешенных LANGUAGES.
  // Если нет — принудительно устанавливаем немецкий язык ('de') как дефолтный.
  const nextLang = LANGUAGES.includes(lang) ? lang : "de";

  // Сохраняем выбранный язык в глобальном состоянии приложения
  state.currentLang = nextLang;

  // Записываем выбор в LocalStorage, чтобы язык сохранялся при перезагрузке страницы
  localStorage.setItem("sfr_lang", nextLang);

  // Обновляем стандартный атрибут lang у тега <html> для SEO и экранных дикторов
  document.documentElement.lang = nextLang;

  // --- Перевод обычных текстовых элементов ---
  // Находим все элементы с атрибутом [data-lang-key]
  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    // Пропускаем элемент, если внутри него есть другие теги (span, a, strong, em),
    // чтобы случайным текстом не затереть внутреннюю верстку и ссылки
    if (el.querySelector("span, a, strong, em")) return;

    // Получаем ключ перевода, ищем значение через функцию t() и обновляем текстовое содержимое
    const key = el.getAttribute("data-lang-key");
    const value = t(key, nextLang);
    if (value) el.textContent = value;
  });

  // --- Перевод подсказок в полях ввода (placeholder) ---
  // Находим все элементы с атрибутом [data-lang-ph]
  document.querySelectorAll("[data-lang-ph]").forEach((el) => {
    const key = el.getAttribute("data-lang-ph");
    const value = t(key, nextLang);
    // Если перевод найден, записываем его прямо в атрибут placeholder
    if (value) el.setAttribute("placeholder", value);
  });

  // --- Обновление переключателя языков в шапке ---
  const langToggleText = document.getElementById("langToggleText");
  if (langToggleText) {
    // Отображаем код языка в верхнем регистре (например, 'DE' или 'RU')
    langToggleText.textContent = nextLang.toUpperCase();
  }

  // --- Управление видимостью специфичных блоков текста ---
  // Находим подзаголовки формы обратной связи, у которых жестко прописан атрибут lang
  document.querySelectorAll(".callback-subtitle[lang]").forEach((el) => {
    // Скрываем элемент (hidden = true), если его язык не совпадает с выбранным интерфейсом
    el.hidden = el.getAttribute("lang") !== nextLang;
  });

  // Синхронизируем и обновляем текстовые данные активного филиала (карты, адреса) под новый язык
  updateBranchInfo(state.activeBranch);

  // Генерируем глобальное кастомное событие "language:changed".
  // Это позволяет другим скриптам на сайте (если они есть) узнать, что язык изменился, и среагировать на это.
  document.dispatchEvent(
    new CustomEvent("language:changed", { detail: { lang: nextLang } }),
  );
}

/**
 * Инициализирует выпадающий список подсказок (автокомплит) для текстового поля ввода.
 * Автоматически создает контейнер для подсказок, обрабатывает ввод текста,
 * выбор элемента и скрытие списка при клике вне его области.
 *
 * @param {HTMLInputElement} input - HTML-элемент поля ввода, для которого создаются подсказки.
 * @param {string} boxId - Уникальный ID для генерируемого контейнера подсказок.
 * @param {Function} getItems - Функция обратного вызова, которая принимает текущее значение инпута и возвращает массив строк-подсказок.
 * @param {Function} [onSelect] - Необязательная функция обратного вызова, срабатывающая после выбора подсказки.
 */
function initSuggestions(input, boxId, getItems, onSelect) {
  // Если элемент ввода не передан (например, отсутствует на этой странице), прерываем выполнение
  if (!input) return;

  // Пытаемся найти существующий контейнер подсказок по ID
  let box = document.getElementById(boxId);

  // Если контейнера еще нет на странице, создаем его динамически
  if (!box) {
    box = document.createElement("div");
    box.id = boxId;
    box.className = "suggestions-box";

    // Делаем родительский контейнер относительным (relative),
    // чтобы блок подсказок позиционировался абсолютно строго под инпутом
    input.parentNode.style.position = "relative";
    // Вставляем созданный блок в DOM сразу после поля ввода
    input.parentNode.appendChild(box);
  }

  /**
   * Скрывает блок с подсказками, удаляя активный CSS-класс.
   */
  function hide() {
    box.classList.remove("is-visible");
  }

  // --- ОБРАБОТКА ВВОДА ТЕКСТА ---
  input.addEventListener("input", function () {
    // Получаем массив подходящих подсказок на основе текущего текста в инпуте
    const items = getItems(this.value);

    // Очищаем старое содержимое выпадающего списка
    box.innerHTML = "";

    // Если подсказок нет, скрываем блок и выходим
    if (!items.length) {
      hide();
      return;
    }

    // Для каждого элемента из массива создаем HTML-блок подсказки
    items.forEach((text) => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.textContent = text;
      box.appendChild(item);
    });

    // Показываем блок с новыми подсказками
    box.classList.add("is-visible");
  });

  // --- ОБРАБОТКА ВЫБОРА ПОДСКАЗКИ ---
  // Используется событие 'mousedown', так как оно срабатывает быстрее,
  // чем событие 'blur' (потеря фокуса) у инпута, которое могло бы скрыть список раньше времени
  box.addEventListener("mousedown", function (e) {
    // Убеждаемся, что клик пришелся именно на элемент списка
    if (!e.target.classList.contains("suggestion-item")) return;

    // Подставляем текст выбранной подсказки в поле ввода
    input.value = e.target.textContent;

    // Скрываем список подсказок
    hide();

    // Если передан колбэк onSelect и он является функцией, вызываем его, передавая инпут
    if (typeof onSelect === "function") onSelect(input);
  });

  // --- ЗАКРЫТИЕ СПИСКА ПРИ КЛИКЕ МИМО ---
  document.addEventListener("click", function (e) {
    // Если кликнули в любое место экрана, кроме самого инпута, закрываем подсказки
    if (e.target !== input) hide();
  });
}

/* ==========================================================================
THEME
============================================================================= */
/**
 * Инициализирует переключатель тем оформления (светлая/темная).
 * Устанавливает текущую тему при загрузке страницы, обновляет иконку кнопки
 * и вешает обработчик клика для смены темы.
 */
function initThemeSwitcher() {
  // Находим кнопку переключения темы по её ID
  const themeBtn = document.getElementById("theme-toggle-btn");

  // Если кнопка найдена, ищем внутри неё элемент для иконки (эмодзи)
  const iconSpan = themeBtn
    ? themeBtn.querySelector(".theme-toggle__icon")
    : null;

  /**
   * Применяет выбранную тему к документу и сохраняет настройки.
   *
   * @param {string} theme - Название темы ('light' или 'dark').
   */
  function applyTheme(theme) {
    // Устанавливаем дата-атрибут на тег body, к которому привязаны CSS-стили темы
    document.body.setAttribute("data-theme", theme);

    // Обновляем текущую тему в глобальном состоянии приложения
    state.currentTheme = theme;

    // Сохраняем выбор в LocalStorage, чтобы тема не сбрасывалась при перезагрузке страницы
    localStorage.setItem("sfr_theme", theme);

    // Если элемент для иконки существует, меняем эмодзи на противоположный:
    // для темной темы показываем солнце (чтобы включить свет), для светлой — луну
    if (iconSpan) {
      iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  // Принудительно применяем тему из глобального состояния при первой инициализации скрипта
  applyTheme(state.currentTheme);

  // Навешиваем обработчик клика на кнопку (используя опциональную цепочку `?.`,
  // чтобы код не сломался, если кнопки нет на текущей странице)
  themeBtn?.addEventListener("click", () => {
    // Переключаем тему: если сейчас светлая — ставим темную, и наоборот
    applyTheme(state.currentTheme === "light" ? "dark" : "light");
  });
}

/* ==========================================================================
LANGUAGE
============================================================================= */
/**
 * Инициализирует переключатель языков интерфейса.
 * Настраивает циклическое переключение языков при клике на кнопку
 * и автоматически применяет сохраненный или дефолтный язык при загрузке.
 */
function initLanguageSwitcher() {
  // Находим кнопку переключения языка на странице
  const langToggleBtn = document.getElementById("langToggleBtn");

  // Навешиваем обработчик клика (через `?.`, чтобы избежать ошибок, если кнопки нет в DOM)
  langToggleBtn?.addEventListener("click", () => {
    // Находим индекс текущего языка в массиве всех доступных языков LANGUAGES
    const currentIndex = LANGUAGES.indexOf(state.currentLang);

    // Вычисляем индекс следующего языка.
    // Оператор остатка от деления `% LANGUAGES.length` позволяет зациклить переключение:
    // когда мы дойдем до конца массива, индекс снова сбросится на 0 (начнется сначала)
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;

    // Применяем следующий язык из массива
    applyLanguage(LANGUAGES[nextIndex]);
  });

  // Пытаемся получить ранее сохраненный пользователем язык из LocalStorage
  const savedLang = localStorage.getItem("sfr_lang");

  // Определяем стартовый язык при загрузке страницы:
  // Если в LocalStorage есть язык и он входит в список разрешенных LANGUAGES — берем его.
  // Иначе берем язык из текущего состояния приложения, либо ставим немецкий ('de') по умолчанию.
  const initialLang =
    savedLang && LANGUAGES.includes(savedLang)
      ? savedLang
      : state.currentLang || "de";

  // Принудительно применяем определенный стартовый язык для инициализации интерфейса
  applyLanguage(initialLang);
}

/* ==========================================================================
BURGER MENU
============================================================================= */
/**
 * Инициализирует мобильное бургер-меню.
 * Управляет открытием/закрытием меню, блокировкой скролла на body,
 * автоматическим закрытием при переходе по ссылкам и при ресайзе экрана.
 */
function initBurgerMenu() {
  // Находим кнопку бургера и сам контейнер мобильного меню
  const burgerBtn = document.getElementById("burgerToggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Если хотя бы один из элементов отсутствует на странице, прекращаем работу функции
  if (!burgerBtn || !mobileMenu) return;

  /**
   * Переключает состояние мобильного меню (открыто/закрыто).
   *
   * @param {boolean} [open] - Принудительное состояние: true — открыть, false — закрыть.
   *                           Если не передано, состояние переключится на противоположное текущему.
   */
  function toggleMenu(open) {
    // Определяем финальное состояние (активно или нет):
    // Если параметр open передан, используем его. Если нет — проверяем, отсутствует ли сейчас класс "is-active"
    const isActive =
      open !== undefined ? open : !mobileMenu.classList.contains("is-active");

    // Добавляем или удаляем класс "is-active" у кнопки и меню в зависимости от значения isActive
    burgerBtn.classList.toggle("is-active", isActive);
    mobileMenu.classList.toggle("is-active", isActive);

    // Блокируем прокрутку страницы (body), когда меню открыто, чтобы пользователь не мог скроллить сайт на фоне.
    // Когда меню закрывается, возвращаем стандартное поведение (пустая строка)
    document.body.style.overflow = isActive ? "hidden" : "";
  }

  // Навешиваем обработчик клика на кнопку бургера для обычного переключения туда-сюда
  burgerBtn.addEventListener("click", () => toggleMenu());

  // Находим все интерактивные элементы (ссылки и кнопки) внутри мобильного меню
  mobileMenu.querySelectorAll("a, button").forEach((element) => {
    // При клике на любую ссылку или кнопку внутри меню принудительно закрываем его (передаем false)
    element.addEventListener("click", () => toggleMenu(false));
  });

  // Отслеживаем изменение размеров окна браузера (например, при повороте смартфона или изменении окна на ПК)
  window.addEventListener("resize", () => {
    // Если экран стал шире 991px (десктопный режим), а мобильное меню всё еще открыто,
    // автоматически закрываем его и возвращаем скролл
    if (window.innerWidth > 991 && mobileMenu.classList.contains("is-active")) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
HERO SLIDER
============================================================================= */
/**
 * Инициализирует главный слайдер (Hero Slider).
 * Управляет переключением слайдов, навигационными точками (дотсами), кнопками,
 * автоматической прокруткой (автоплеем) с паузой при наведении, а также тач-событиями для свайпов.
 */
function initHeroSlider() {
  // Находим все необходимые элементы слайдера в DOM
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-slider__dots .dot");
  const prevBtn = document.querySelector(".hero-slider__btn--prev");
  const nextBtn = document.querySelector(".hero-slider__btn--next");
  const sliderEl = document.querySelector(".hero-slider");

  // Если слайдов на странице нет, прерываем выполнение функции
  if (!slides.length) return;

  // Индекс текущего активного слайда и переменная для хранения таймера автоплея
  let currentIndex = 0;
  let autoplayTimer = null;

  /**
   * Отображает слайд по указанному индексу и обновляет состояние навигации.
   *
   * @param {number} index - Индекс слайда, который нужно показать.
   */
  function showSlide(index) {
    // Реализуем циклическое переключение:
    // Если индекс ушел за правый край, сбрасываем на первый слайд (0)
    if (index >= slides.length) currentIndex = 0;
    // Если ушел за левый край, переключаем на самый последний слайд
    else if (index < 0) currentIndex = slides.length - 1;
    // В остальных случаях оставляем вычисленный индекс
    else currentIndex = index;

    // Переключаем CSS-класс "active" для каждого слайда
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });

    // Переключаем CSS-класс "active" для соответствующих точек навигации
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  /** Переключает слайдер на один шаг вперед */
  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  /** Переключает слайдер на один шаг назад */
  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  /**
   * Запускает или перезапускает таймер автоматической смены слайдов.
   * Интервал смены составляет 5000 миллисекунд (5 секунд).
   */
  function startAutoplay() {
    clearInterval(autoplayTimer); // Очищаем старый таймер перед созданием нового, чтобы избежать ускорения прокрутки
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  // --- ОБРАБОТКА КЛИКОВ ПО КНОПКАМ НАВИГАЦИИ ---

  nextBtn?.addEventListener("click", (e) => {
    e.stopPropagation(); // Предотвращаем всплытие события
    nextSlide();
    startAutoplay(); // Перезапускаем таймер, чтобы слайд не переключился сразу же повторно по автоплею
  });

  prevBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevSlide();
    startAutoplay();
  });

  // --- ОБРАБОТКА КЛИКОВ ПО ТОЧКАМ (ДОТСАМ) ---
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      // Считываем номер слайда из дата-атрибута и приводим к числу в 10-тичной системе
      const slideIndex = parseInt(dot.getAttribute("data-slide"), 10);
      if (!isNaN(slideIndex)) {
        showSlide(slideIndex);
        startAutoplay(); // Перезапускаем автоплей после ручного выбора
      }
    });
  });

  // --- ПАУЗА АВТОПЛЕЯ ПРИ НАВЕДЕНИИ МЫШИ ---
  if (sliderEl) {
    // Когда мышь заходит на территорию слайдера — останавливаем автоплей
    sliderEl.addEventListener("mouseenter", () => {
      clearInterval(autoplayTimer);
    });
    // Когда мышь покидает слайдер — запускаем автоматическую прокрутку заново
    sliderEl.addEventListener("mouseleave", () => {
      startAutoplay();
    });
  }

  // --- ПОДДЕРЖКА СВАЙПОВ НА МОБИЛЬНЫХ УСТРОЙСТВАХ ---
  let startX = 0; // Начальная координата касания по оси X

  // Фиксируем координату X в момент первого касания экрана
  sliderEl?.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true }, // Оптимизация для плавной прокрутки страницы браузером
  );

  // Фиксируем координату X в момент отрыва пальца и вычисляем направление свайпа
  sliderEl?.addEventListener(
    "touchend",
    (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX; // Разница между стартовой и финальной точкой

      // Свайп засчитывается только если палец сместился больше чем на 40 пикселей (защита от случайных дрожаний)
      if (Math.abs(diff) > 40) {
        if (diff > 0)
          nextSlide(); // Свайп влево — показываем следующий слайд
        else prevSlide(); // Свайп вправо — показываем предыдущий слайд
        startAutoplay(); // Перезапускаем автоплей
      }
    },
    { passive: true },
  );

  // --- СТАРТОВАЯ ИНИЦИАЛИЗАЦИЯ ---
  showSlide(currentIndex); // Отображаем первый слайд при загрузке страницы
  startAutoplay(); // Запускаем автоматическую прокрутку
}

/* ==========================================================================
BACK-TO-TOP
============================================================================= */
/**
 * Инициализирует кнопку «Наверх» (Back to Top).
 * Показывает кнопку, если страница прокручена вниз более чем на 300 пикселей,
 * и выполняет плавный скролл к началу страницы при клике.
 */
function initBackToTop() {
  // Находим элемент кнопки по её ID
  const backBtn = document.getElementById("back-to-top-btn");

  // Если кнопки нет на текущей странице, завершаем работу функции
  if (!backBtn) return;

  // Отслеживаем событие прокрутки (скролла) окна браузера
  window.addEventListener("scroll", () => {
    // Добавляем или удаляем CSS-класс "is-visible" в зависимости от условия:
    // если страница прокручена по вертикали (window.scrollY) более чем на 300px — кнопка появится
    backBtn.classList.toggle("is-visible", window.scrollY > 300);
  });

  // Навешиваем обработчик события клика на саму кнопку
  backBtn.addEventListener("click", () => {
    // Запускаем нативный метод прокрутки окна
    window.scrollTo({
      top: 0, // Прокручиваем к самому верху (координата 0)
      behavior: "smooth", // Делаем прокрутку плавной, а не мгновенным прыжком
    });
  });
}

/* ==========================================================================
REVIEWS SLIDER
============================================================================= */
/**
 * Инициализирует слайдер отзывов (Reviews Slider).
 * Управляет горизонтальной прокруткой карточек с учетом фиксированных зазоров (gap),
 * поддерживает зацикленное переключение кнопками, свайпы на мобильных
 * и адаптивный пересчет ширины при изменении размеров экрана.
 */
function initReviewsSlider() {
  // Находим контейнер-ленту (track) и все карточки отзывов в DOM
  const track = document.querySelector(".reviews-slider__track");
  const cards = document.querySelectorAll(".review-card");

  // Находим все кнопки "Вперед" и "Назад" (используется querySelectorAll на случай дублирования кнопок)
  const prevBtns = document.querySelectorAll(".reviews-slider__btn--prev");
  const nextBtns = document.querySelectorAll(".reviews-slider__btn--next");

  // Если лента слайдера или сами карточки отсутствуют, завершаем выполнение функции
  if (!track || !cards.length) return;

  // Индекс текущей активной карточки и расстояние (зазор) между ними в пикселях
  let currentIndex = 0;
  const gap = 20;

  /**
   * Рассчитывает точную ширину карточки и сдвигает ленту (track)
   * на нужное расстояние с помощью CSS-трансформации.
   */
  function updateSlider() {
    // Динамически получаем текущую фактическую ширину одной карточки в пикселях
    const cardWidth = cards[0].getBoundingClientRect().width;

    // Вычисляем общую величину смещения: (ширина карточки + зазор) умножить на текущий индекс
    const moveAmount = (cardWidth + gap) * currentIndex;

    // Сдвигаем ленту влево по оси X на вычисленное количество пикселей
    track.style.transform = `translateX(-${moveAmount}px)`;
  }

  // --- ОБРАБОТКА КЛИКОВ ПО КНОПКАМ "ВПЕРЕД" ---
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Зацикливаем переключение вперед: если дошли до конца, индекс сбросится на 0
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlider();
    });
  });

  // --- ОБРАБОТКА КЛИКОВ ПО КНОПКАМ "НАЗАД" ---
  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Зацикливаем переключение назад: формула предотвращает появление отрицательных индексов
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlider();
    });
  });

  // --- ПОДДЕРЖКА СВАЙПОВ НА МОБИЛЬНЫХ УСТРОЙСТВАХ ---
  let startX = 0; // Начальная координата касания по оси X

  // Фиксируем координату X в момент прикосновения к ленте слайдера
  track.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true }, // Оптимизация производительности для мобильного скролла
  );

  // Определяем направление свайпа в момент отрыва пальца
  track.addEventListener(
    "touchend",
    (e) => {
      const endX = e.changedTouches[0].clientX;
      const threshold = 40; // Минимальная дистанция в пикселях для засчитывания свайпа

      // Если свайпнули влево (startX - endX > 40) и мы еще не на последней карточке
      if (startX - endX > threshold && currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
      }
      // Если свайпнули вправо (endX - startX > 40) и мы еще не на первой карточке
      else if (endX - startX > threshold && currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    },
    { passive: true },
  );

  // --- АДАПТИВНОСТЬ ---
  // При изменении размеров окна браузера (resize) заново вызываем перерасчет ширины,
  // чтобы слайдер не ломался при переходе с мобильного на десктоп и наоборот
  window.addEventListener("resize", updateSlider);
}

/* ==========================================================================
FAQ
============================================================================= */
/**
 * Инициализирует аккордеон для секции "Часто задаваемые вопросы" (FAQ).
 * Управляет открытием и закрытием вкладок по принципу "аккордеона"
 * (при открытии одного вопроса остальные автоматически закрываются)
 * и обновляет HTML-атрибуты доступности (ARIA).
 */
function initFaqAccordion() {
  // Находим все элементы (контейнеры) вопросов на странице
  const faqItems = document.querySelectorAll(".faq-item");

  // Если элементов FAQ на текущей странице нет, завершаем выполнение функции
  if (!faqItems.length) return;

  // Обходим каждый элемент FAQ для настройки событий
  faqItems.forEach((item) => {
    // Находим кнопку или область клика (триггер), которая разворачивает вопрос
    const trigger = item.querySelector(".faq-item__trigger");

    // Навешиваем обработчик клика (через `?.`, чтобы избежать ошибок, если триггер не найден)
    trigger?.addEventListener("click", () => {
      // Проверяем, открыта ли текущая вкладка в момент клика
      const isOpen = item.classList.contains("is-open");

      // --- ЗАКРЫТИЕ ВСЕХ ВКЛАДОК ---
      // Перед тем как открыть выбранный вопрос, обходим все элементы заново,
      // чтобы закрыть ранее открытые вкладки и сбросить их атрибуты доступности
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("is-open");
        const otherTrigger = otherItem.querySelector(".faq-item__trigger");
        // Сообщаем скринридерам, что вкладка свернута
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
      });

      // --- ОТКРЫТИЕ ТЕКУЩЕЙ ВКЛАДКИ ---
      // Если вкладка до клика была закрыта, теперь мы её открываем
      if (!isOpen) {
        item.classList.add("is-open");
        // Сообщаем скринридерам, что вкладка теперь развернута
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ==========================================================================
BRANCH SWITCHER
============================================================================= */
/**
 * Инициализирует переключатель филиалов (вкладки/табы).
 * Переключает активные классы вкладок и панелей с информацией,
 * обновляет атрибуты доступности (ARIA) и вызывает перерасчет карты для выбранного филиала.
 */
function initBranchSwitcher() {
  // Находим все кнопки-вкладки филиалов и панели с контентом
  const tabs = document.querySelectorAll(".branch-tab");
  const panels = document.querySelectorAll(".branch-panel");
  // Находим элемент интерактивной карты
  const mapIframe = document.getElementById("branch-map");

  // Если на странице нет вкладок или отсутствует сама карта, прекращаем работу
  if (!tabs.length || !mapIframe) return;

  // Навешиваем обработчик клика на каждую вкладку филиала
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Получаем идентификатор филиала из дата-атрибута кликнутой вкладки
      const targetBranch = tab.getAttribute("data-branch");

      // --- СБРОС СОСТОЯНИЯ ВКЛАДОК ---
      // Обходим все вкладки, убираем класс активности и обновляем ARIA-статус для скринридеров
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      // Активируем текущую вкладку, на которую нажал пользователь
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      // --- ПЕРЕКЛЮЧЕНИЕ ПАНЕЛЕЙ ИНФОРМАЦИИ ---
      // Перебираем панели: добавляем класс "active" только той, чей ID совпадает с выбранным филиалом
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === `branch-${targetBranch}`);
      });

      // Вызываем внешнюю функцию для обновления текстовых данных и локализации URL карты
      updateBranchInfo(targetBranch);
    });
  });
}

/* ==========================================================================
COOKIE BANNER
============================================================================= */
/**
 * Инициализирует баннер согласия на использование файлов cookie (GDPR).
 * Проверяет наличие ранее сохраненного выбора в локальном хранилище,
 * управляет отображением баннера и сохраняет решение пользователя.
 */
function initCookieBanner() {
  // Находим элементы баннера и кнопок «Принять» / «Отклонить» по их ID
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept-btn");
  const rejectBtn = document.getElementById("cookie-reject-btn");

  // Если баннера нет на текущей странице, прекращаем выполнение функции
  if (!banner) return;

  // Пытаемся получить сохраненный ранее статус согласия из LocalStorage
  const cookieChoice = localStorage.getItem("sfr_cookie_consent");

  // --- ПРОВЕРКА ИСХОДНОГО СОСТОЯНИЯ ---
  if (!cookieChoice) {
    // Если пользователь еще не сделал выбор, показываем баннер, добавляя CSS-класс активности
    banner.classList.add("is-visible");
  } else if (cookieChoice === "accepted") {
    // Если пользователь ранее уже согласился, обновляем флаг в глобальном состоянии приложения
    state.gdprConsented = true;
  }

  /**
   * Обрабатывает выбор пользователя (принятие или отказ от cookie),
   * сохраняет результат в хранилище и скрывает баннер.
   *
   * @param {boolean} accepted - true, если куки приняты; false, если отклонены.
   */
  function handleChoice(accepted) {
    // Сохраняем текстовый маркер "accepted" или "rejected" в LocalStorage
    localStorage.setItem(
      "sfr_cookie_consent",
      accepted ? "accepted" : "rejected",
    );

    // Синхронизируем выбор пользователя с глобальным состоянием
    state.gdprConsented = accepted;

    // Скрываем баннер, удаляя CSS-класс видимости
    banner.classList.remove("is-visible");
  }

  // --- НАВЕШИВАНИЕ ОБРАБОТЧИКОВ КЛИКА ---
  // Привязываем колбэки к кнопкам через оператор `?.`, защищаясь от ошибок, если какой-то кнопки нет в верстке
  acceptBtn?.addEventListener("click", () => handleChoice(true));
  rejectBtn?.addEventListener("click", () => handleChoice(false));
}

/* ==========================================================================
MODALS
============================================================================= */
/**
 * Инициализирует глобальную систему модальных (всплывающих) окон.
 * Создает глобальные методы для открытия/закрытия окон, настраивает делегирование
 * событий клика для триггеров и реализует закрытие окон по кнопке Escape.
 */
function initGlobalModals() {
  /**
   * Открывает модальное окно по его ID.
   * Метод регистрируется в объекте `window`, чтобы его можно было вызвать из любой части проекта.
   *
   * @param {string} modalId - Идентификатор (ID) HTML-элемента модального окна.
   * @param {Event|null} [triggerEvent=null] - Событие, которое вызвало открытие (например, клик).
   */
  window.openModalById = function (modalId, triggerEvent = null) {
    const modal = document.getElementById(modalId);
    if (!modal) return; // Если окно с таким ID не найдено, прекращаем работу

    // Активируем окно с помощью CSS-класса и обновляем атрибуты доступности (ARIA)
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // Блокируем скролл основной страницы через класс на body
    document.body.classList.add("modal-open");

    // Инициируем кастомное всплывающее событие "modal:opened",
    // передавая в него исходное событие триггера для внешней аналитики или логики
    modal.dispatchEvent(
      new CustomEvent("modal:opened", {
        bubbles: true,
        detail: { originalEvent: triggerEvent },
      }),
    );
  };

  /**
   * Закрывает модальное окно.
   * Метод также регистрируется глобально в объекте `window`.
   *
   * @param {HTMLElement|null} targetModal - Конкретный HTML-элемент окна для закрытия.
   *                                         Если не передан, закроется любое текущее открытое окно.
   */
  window.closeModal = function (targetModal) {
    // Находим окно: либо переданное в параметрах, либо первое попавшееся открытое на странице
    const activeModal = targetModal || document.querySelector(".modal.is-open");
    if (!activeModal) return;

    // Скрываем окно и обновляем атрибуты доступности для скринридеров
    activeModal.classList.remove("is-open");
    activeModal.setAttribute("aria-hidden", "true");

    // Разблокируем скролл страницы (удаляем класс с body) только в том случае,
    // если на экране больше не осталось других открытых модальных окон
    if (!document.querySelector(".modal.is-open")) {
      document.body.classList.remove("modal-open");
    }

    // Инициируем кастомное событие закрытия окна "modal:closed"
    activeModal.dispatchEvent(
      new CustomEvent("modal:closed", { bubbles: true }),
    );
  };

  // --- ДЕЛЕГИРОВАНИЕ СОБЫТИЙ КЛИКА ---
  // Навешиваем один общий обработчик на весь документ, чтобы не привязывать события к каждой кнопке отдельно
  document.addEventListener("click", function (e) {
    // 1. Проверяем, кликнул ли пользователь на кнопку открытия модального окна
    const trigger = e.target.closest("[data-open-modal]");
    if (trigger) {
      e.preventDefault(); // Отменяем стандартное поведение (актуально, если триггер — это ссылка)
      // Вызываем глобальный метод и передаем ID окна из дата-атрибута и само событие клика
      window.openModalById(trigger.getAttribute("data-open-modal"), e);
      return;
    }

    // 2. Проверяем, кликнул ли пользователь на элемент закрытия окна (например, крестик или бэкдроп)
    const closeBtn = e.target.closest("[data-close]");
    if (closeBtn) {
      // Находим родительское модальное окно для этого крестика и закрываем его
      window.closeModal(closeBtn.closest(".modal"));
    }
  });

  // --- ОБРАБОТКА НАЖАТИЯ КЛАВИШ (КЛАВИАТУРА) ---
  document.addEventListener("keydown", function (e) {
    // Если пользователь нажал клавишу Escape (Esc), автоматически закрываем активное модальное окно
    if (e.key === "Escape") window.closeModal();
  });
}

/* ==========================================================================
ORDER MODAL
============================================================================= */
/**
 * Инициализирует комплексную бизнес-логику для модального окна оформления заказа.
 * Настраивает валидацию, мультиязычность, управление плейсхолдерами и режимами формы.
 */
function initOrderFormLogic() {
  // Находим главное модальное окно формы заказа по его ID
  const orderModal = document.getElementById("orderModal");
  if (!orderModal) return; // Если формы нет на текущей странице, досрочно завершаем работу

  // Извлекаем основные управляющие элементы внутри модального окна
  const submitBtn = orderModal.querySelector("#submitBtn");
  const privacyCheckbox = orderModal.querySelector("#privacyCheckbox");
  const phoneBlock = document.getElementById("managerPhoneBlock");

  // Внутреннее состояние формы:
  // currentOrderMethod — текущий способ подбора деталей (по умолчанию "by-car" — по автомобилю)
  // isManagerMode — флаг, определяющий, заполнена ли форма в особом режиме менеджера
  let currentOrderMethod = "by-car";
  let isManagerMode = false;

  /**
   * Возвращает текущий рабочий язык интерфейса.
   * Проверяет глобальное состояние, атрибут lang тега html или возвращает дефолтный "ru".
   *
   * @returns {string} Код языка (например, "de", "ru").
   */
  function getCurrentLang() {
    return state.currentLang || document.documentElement.lang || "ru";
  }

  /**
   * Ищет и форматирует локализованный текст по ключу с учетом режима менеджера.
   * Поддерживает динамическую подстановку параметров в строки или вызов функций перевода.
   *
   * @param {string} key - Ключ перевода в объекте ORDER_I18N.
   * @param {Object|string|null} [param=null] - Данные для подстановки или аргумент для функции перевода.
   * @returns {string} Сформированная строка перевода.
   */
  function getOrderText(key, param = null) {
    const lang = getCurrentLang();
    // Создаем ключ для режима менеджера (например, "de_manager" или "ru_manager")
    const modeKey = isManagerMode ? `${lang}_manager` : lang;

    // Последовательный каскадный поиск перевода от самого точного к дефолтному русскому
    let translation =
      ORDER_I18N[key]?.[modeKey] ||
      ORDER_I18N[key]?.[lang] ||
      ORDER_I18N[key]?.ru_manager ||
      ORDER_I18N[key]?.ru ||
      key;

    // Если в словаре вместо строки лежит функция, вызываем её с переданным параметром
    if (typeof translation === "function") {
      return translation(param);
    }

    // Если передан объект параметров, заменяем конструкции вида {name} на реальные значения
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

  /**
   * Динамически обновляет тексты подсказок (placeholder) во всех полях ввода
   * в зависимости от выбранного языка и режима (обычный или менеджер).
   */
  function updateFormPlaceholders() {
    const lang = getCurrentLang();
    const modeKey = isManagerMode ? `${lang}_manager` : lang;
    const placeholdersDict = ORDER_I18N.placeholders;

    // Перебираем ID полей из словаря и обновляем их плейсхолдеры в DOM
    Object.keys(placeholdersDict).forEach((fieldId) => {
      const inputEl = document.getElementById(fieldId);
      if (!inputEl) return; // Если поле не найдено на странице, пропускаем его

      // Каскадно выбираем перевод плейсхолдера
      inputEl.placeholder =
        placeholdersDict[fieldId][modeKey] ||
        placeholdersDict[fieldId][lang] ||
        placeholdersDict[fieldId].ru;
    });

    // Если блок телефона менеджера существует, обновляем его заголовок
    const phoneLabel = phoneBlock?.querySelector(".manager-phone-label");
    if (phoneLabel) {
      phoneLabel.textContent = getOrderText("phoneLabel");
    }
  }

  /**
   * Отрисовывает аватарку, имя и статус ответственного менеджера для выбранного филиала.
   * Если филиал не выбран, показывает стандартный текст-заглушку.
   *
   * @param {string|number} branchId - Идентификатор выбранного филиала.
   */
  function renderManagerBadge(branchId) {
    // Ищем контейнер бейджа менеджера внутри модального окна
    const managerBlock = orderModal.querySelector(".manager-badge");
    if (!managerBlock) return;

    const lang = getCurrentLang();
    const managerData = branchData[branchId]?.manager;
    const nameEl = managerBlock.querySelector(".manager-name");
    const statusEl = managerBlock.querySelector(".manager-status");
    const avatarWrap = managerBlock.querySelector(".manager-avatar");
    const avatarImg = managerBlock.querySelector(".manager-avatar img");

    // СОСТОЯНИЕ 1: Филиал не выбран или у него нет данных о менеджере
    if (!branchId || !managerData) {
      if (avatarWrap) avatarWrap.style.display = "none"; // Скрываем блок аватарки
      if (nameEl) {
        nameEl.textContent =
          lang === "de" ? "Filiale wählen" : "Выберите филиал";
      }
      if (statusEl) {
        statusEl.textContent =
          lang === "de"
            ? "Manager erscheint nach der Auswahl"
            : "Менеджер появится после выбора филиала";
      }
      return; // Выходим из функции
    }

    // СОСТОЯНИЕ 2: Данные менеджера успешно найдены
    if (avatarWrap) avatarWrap.style.display = "block"; // Показываем блок аватарки
    if (avatarImg) avatarImg.src = managerData.avatar; // Устанавливаем путь к картинке

    // Выводим имя менеджера на текущем языке (или на русском по умолчанию)
    if (nameEl)
      nameEl.textContent = managerData.name[lang] || managerData.name.ru;

    // Выводим статус менеджера на текущем языке (или на русском по умолчанию)
    if (statusEl) {
      statusEl.textContent = managerData.status[lang] || managerData.status.ru;
    }
  }

  /**
   * Блокирует или разблокирует кнопку отправки формы в зависимости
   * от того, установлен ли чекбокс согласия с политикой конфиденциальности.
   */
  function toggleSubmitButton() {
    // Если кнопка или чекбокс отсутствуют, прерываем выполнение
    if (!submitBtn || !privacyCheckbox) return;
    // Кнопка отключается (disabled = true), если чекбокс НЕ отмечен (!checked)
    submitBtn.disabled = !privacyCheckbox.checked;
  }

  /**
   * Проверяет, отображается ли в данный момент блок ввода телефона менеджера на экране.
   *
   * @returns {boolean} true, если блок существует, не скрыт через встроенный стиль display и не имеет класса "is-hidden".
   */
  function isPhoneBlockVisible() {
    return (
      phoneBlock &&
      phoneBlock.style.display !== "none" &&
      !phoneBlock.classList.contains("is-hidden")
    );
  }

  /**
   * Сбрасывает и полностью очищает все сообщения об ошибках валидации на форме.
   */
  function clearErrors() {
    // Находим все элементы с классом ошибки и удаляем его
    orderModal
      .querySelectorAll(".has-error")
      .forEach((el) => el.classList.remove("has-error"));
    // Находим все текстовые элементы с описанием ошибок и скрываем их из видимости
    orderModal
      .querySelectorAll(".field-error-text, .error-message")
      .forEach((el) => {
        el.style.display = "none";
      });
  }

  /**
   * Снимает ошибку валидации с конкретного поля ввода.
   *
   * @param {HTMLElement} inputElement - Ссылка на HTML-элемент инпута, который нужно очистить.
   */
  function clearFieldError(inputElement) {
    if (!inputElement) return;

    // Ищем родительский контейнер поля (сначала по классу .form-group, если нет — берем прямой parentElement)
    const group =
      inputElement.closest(".form-group") || inputElement.parentElement;
    if (!group) return;

    // Удаляем маркерный CSS-класс ошибки у контейнера
    group.classList.remove("has-error");

    // Находим текстовое сообщение об ошибке внутри этой группы и скрываем его
    const err = group.querySelector(".field-error-text, .error-message");
    if (err) err.style.display = "none";
  }

  /**
   * Отображает текстовое сообщение об ошибке под конкретным полем ввода,
   * добавляет родительской группе класс ошибки и автоматически фокусирует инпут.
   *
   * @param {HTMLElement} inputElement - Элемент поля ввода (или контейнер), где произошла ошибка.
   * @param {string} message - Текст ошибки, который нужно вывести пользователю.
   */
  function showFieldError(inputElement, message) {
    if (!inputElement) return;

    // Находим родительский блок поля (сначала ищем .form-group, если нет — берем parentElement)
    const group =
      inputElement.closest(".form-group") || inputElement.parentElement;
    // Добавляем маркерный CSS-класс для визуализации ошибки (например, красная рамка у инпута)
    group.classList.add("has-error");

    // Пытаемся найти существующий тег для вывода текста ошибки внутри этой группы
    let errorMsg =
      group.querySelector(".field-error-text") ||
      group.querySelector(".error-message");

    // Если такого тега еще нет, создаем его динамически на лету
    if (!errorMsg) {
      errorMsg = document.createElement("span");
      errorMsg.className = "field-error-text error-message";
      group.appendChild(errorMsg);
    }

    // Записываем текст ошибки и делаем элемент видимым
    errorMsg.textContent = message;
    errorMsg.style.display = "block";

    // Автоматически переводим фокус клавиатуры на поле с ошибкой
    if (typeof inputElement.focus === "function") {
      inputElement.focus();
    }
  }

  /**
   * Управляет отображением полей формы в зависимости от выбранного метода подбора деталей:
   * по характеристикам автомобиля (by-car) или по VIN-коду (by-vin).
   *
   * @param {string} selectedValue - Выбранный метод ("by-car" или "by-vin").
   */
  function handleMethodChange(selectedValue) {
    // Сохраняем выбранный метод в состояние (по умолчанию "by-car")
    currentOrderMethod = selectedValue || "by-car";
    const carBlock = document.getElementById("carFieldsBlock");
    const vinBlock = document.getElementById("vinFieldsBlock");

    // Сбрасываем все старые ошибки, чтобы они не оставались от предыдущей вкладки
    clearErrors();

    // Определяем флаговую переменную: true, если выбрана вкладка "По автомобилю"
    const showCar = currentOrderMethod === "by-car";

    // Управляем видимостью блока полей для VIN-кода
    if (vinBlock) {
      vinBlock.classList.toggle("is-hidden", showCar); // Добавляем класс, если показываем авто
      vinBlock.style.display = showCar ? "none" : "block";
    }

    // Управляем видимостью блока полей для обычных параметров авто
    if (carBlock) {
      carBlock.classList.toggle("is-hidden", !showCar); // Добавляем класс, если НЕ показываем авто
      carBlock.style.display = showCar ? "block" : "none";
    }
  }

  /**
   * Переключает видимость поля телефона менеджера и принудительно
   * обновляет текстовые подсказки (placeholder) под выбранный режим.
   *
   * @param {boolean} show - Флаг: true — включить режим менеджера, false — выключить.
   */
  function setPhoneBlockVisibility(show) {
    // Приводим переданное значение к логическому типу и сохраняем в состояние
    isManagerMode = Boolean(show);

    if (phoneBlock) {
      // Переключаем CSS-класс "is-hidden" и свойство display в зависимости от режима менеджера
      phoneBlock.classList.toggle("is-hidden", !isManagerMode);
      phoneBlock.style.display = isManagerMode ? "block" : "none";
    }

    // Запускаем обновление плейсхолдеров, так как в режиме менеджера они могут отличаться
    updateFormPlaceholders();
  }

  /**
   * Главная управляющая функция валидации формы.
   * Проверяет заполнение и формат каждого поля в зависимости от активной вкладки
   * и при полном успехе инициирует отправку данных в WhatsApp.
   */
  function validateAndSend() {
    // Первым делом очищаем любые старые визуальные ошибки на форме
    clearErrors();

    // 1. ПРОВЕРКА ВЫБОРА ФИЛИАЛА
    // Находим активную (выбранную) радиокнопку филиала
    const selectedBranchRadio = orderModal.querySelector(
      'input[name="branch"]:checked',
    );
    if (!selectedBranchRadio) {
      // Если ни один филиал не выбран, находим контейнер группы радиокнопок и выводим ошибку
      const branchContainer =
        orderModal.querySelector(".branch-options") ||
        orderModal.querySelector(".branch-selection");
      showFieldError(branchContainer, getOrderText("selectBranch"));
      return; // Прерываем отправку
    }

    // Получаем ссылки на базовые текстовые инпуты формы
    const partsInput = document.getElementById("partsList");
    const nameInput = document.getElementById("clientName");
    const phoneInput = document.getElementById("clientPhone");

    // 2. ВАЛИДАЦИЯ СПИСКА ЗАПЧАСТЕЙ
    // Проверяем, что поле существует, не пустое и содержит хотя бы 3 символа
    if (
      !partsInput ||
      !partsInput.value.trim() ||
      partsInput.value.trim().length < 3
    ) {
      showFieldError(partsInput, getOrderText("describeParts"));
      return;
    }

    // Регулярное выражение проверяет, что в поле введены буквы или цифры (не только знаки препинания)
    if (!/[a-zA-Zа-яА-ЯёЁäöüÄÖÜß0-9]/.test(partsInput.value)) {
      showFieldError(partsInput, getOrderText("partsValidation"));
      return;
    }

    // 3. ВАЛИДАЦИЯ ИМЕНИ КЛИЕНТА
    // Проверяем наличие имени и его минимальную длину (от 2 символов)
    if (
      !nameInput ||
      !nameInput.value.trim() ||
      nameInput.value.trim().length < 2
    ) {
      showFieldError(nameInput, getOrderText("specifyName"));
      return;
    }

    // Проверяем имя на допустимые символы (буквы разных алфавитов, пробелы, дефисы, апострофы)
    if (!/^[a-zA-Zа-яА-ЯёЁäöüÄÖÜß\s\-']+$/.test(nameInput.value.trim())) {
      showFieldError(nameInput, getOrderText("nameValidation"));
      return;
    }

    // 4. ВАЛИДАЦИЯ ТЕЛЕФОНА (срабатывает, только если блок телефона сейчас активен и виден)
    if (isPhoneBlockVisible() && phoneInput) {
      if (!phoneInput.value.trim()) {
        showFieldError(phoneInput, getOrderText("specifyPhone"));
        return;
      }

      // Удаляем из строки все не-цифры, чтобы проверить чистую длину номера
      const phoneDigits = phoneInput.value.replace(/\D/g, "");
      // Проверяем допустимые символы маски телефона и условие, что в номере не менее 7 цифр
      if (
        !/^[\d+\-()\s]{7,20}$/.test(phoneInput.value.trim()) ||
        phoneDigits.length < 7
      ) {
        showFieldError(phoneInput, getOrderText("phoneValidation"));
        return;
      }
    }

    // 5. ВАЛИДАЦИЯ СПЕЦИФИЧНЫХ ПОЛЕЙ ВКЛАДКИ
    if (currentOrderMethod === "by-car") {
      // --- Вкладка "По автомобилю" ---
      const makeInput = document.getElementById("carMake");
      const modelInput = document.getElementById("carModel");
      const yearInput = document.getElementById("carYear");
      const currentYear = new Date().getFullYear(); // Динамически получаем текущий год

      if (!makeInput?.value.trim()) {
        showFieldError(makeInput, getOrderText("specifyMake"));
        return;
      }
      if (!modelInput?.value.trim()) {
        showFieldError(modelInput, getOrderText("specifyModel"));
        return;
      }

      // Преобразуем строку года в целое число (в десятичной системе)
      const yearValue = yearInput ? parseInt(yearInput.value.trim(), 10) : NaN;
      // Проверяем год: строго 4 символа, число от 1900 до текущего реального года
      if (
        !yearInput ||
        !yearInput.value.trim() ||
        isNaN(yearValue) ||
        yearInput.value.trim().length !== 4 ||
        yearValue < 1900 ||
        yearValue > currentYear
      ) {
        showFieldError(yearInput, getOrderText("invalidYear"));
        return;
      }
    } else {
      // --- Вкладка "По VIN-коду" ---
      const vinInput = document.getElementById("vinCode");
      // Удаляем из VIN-кода все пробелы, если пользователь их случайно поставил
      const vinValue = vinInput ? vinInput.value.replace(/\s+/g, "") : "";

      // Проверяем, что длина VIN-кода составляет строго 17 символов
      if (!vinInput || vinValue.length !== 17) {
        // Передаем фактическую текущую длину в функцию локализации для вывода пользователю
        showFieldError(vinInput, getOrderText("vinLength", vinValue.length));
        return;
      }
      // Международный стандарт VIN (исключает буквы I, O, Q, так как их легко перепутать с цифрами)
      if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(vinValue)) {
        showFieldError(vinInput, getOrderText("vinValidation"));
        return;
      }
    }

    // Если вся валидация успешно пройдена, передаем управление функции отправки сообщения
    executeWhatsAppSend(selectedBranchRadio);
  }

  /**
   * Формирует детализированный текст заказа и открывает чат WhatsApp с филиалом.
   * Автоматически генерирует номер заказа, форматирует параметры автомобиля/VIN,
   * а также копирует текст подтверждения для клиента в буфер обмена.
   *
   * @param {HTMLInputElement} selectedBranchRadio - Ссылка на выбранный радио-инпут филиала.
   */
  function executeWhatsAppSend(selectedBranchRadio) {
    // Получаем значение (ID) выбранного филиала
    const selectedBranch = selectedBranchRadio ? selectedBranchRadio.value : "";
    // Извлекаем номер телефона WhatsApp для этого филиала из базы данных branchData
    const phone = branchData[selectedBranch]?.whatsapp;

    // Если у филиала не настроен номер телефона, выводим ошибку и прекращаем отправку
    if (!phone) {
      alert(getOrderText("missingPhoneError"));
      return;
    }

    // Получаем текстовое название филиала (из родительского элемента радиокнопки или берем ID в верхнем регистре)
    const branchLabel = selectedBranchRadio.parentElement
      ? selectedBranchRadio.parentElement.textContent.trim()
      : selectedBranch.toUpperCase();

    // Считываем и очищаем от пробелов базовые данные клиента
    const name = document.getElementById("clientName").value.trim();
    const phoneInput = document.getElementById("clientPhone");
    const rawClientPhone =
      isPhoneBlockVisible() && phoneInput ? phoneInput.value.trim() : "";
    const parts = document.getElementById("partsList").value.trim();

    // --- ГЕНЕРАЦИЯ НОМЕРА ЗАКАЗА НА ОСНОВЕ ДАТЫ И ВРЕМЕНИ ---
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Месяцы в JS начинаются с 0
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    // Формат номера: ДДММ-ЧЧММ (например, 2510-1430)
    const orderNumber = `${day}${month}-${hours}${minutes}`;

    // --- ФОРМИРОВАНИЕ БЛОКА ДАННЫХ ОБ АВТОМОБИЛЕ ---
    let vehicleBlock = "";
    if (currentOrderMethod === "by-car") {
      // Вариант 1: Если выбран подбор по марке/модели
      const make = document.getElementById("carMake").value.trim();
      const model = document.getElementById("carModel").value.trim();
      const year = document.getElementById("carYear").value.trim();
      vehicleBlock = `🚗 *${getOrderText("waCarData")}*:\r\n• *${getOrderText("waMake")}*: ${make}\r\n• *${getOrderText("waModel")}*: ${model}\r\n• *${getOrderText("waYear")}*: ${year}`;
    } else {
      // Вариант 2: Если выбран подбор по VIN-коду
      const vinInput = document.getElementById("vinCode");
      const vin = vinInput
        ? vinInput.value.replace(/\s+/g, "").toUpperCase() // Очищаем от пробелов и переводим в верхний регистр
        : "";
      vehicleBlock = `🔑 *${getOrderText("waVinCode")}*:\r\n${vin}`;
    }

    let phoneLine = "";
    let clientChatLink = "";

    // --- ОБРАБОТКА РЕЖИМА МЕНЕДЖЕРА И БУФЕРА ОБМЕНА ---
    if (rawClientPhone) {
      // Очищаем телефон клиента от маски (оставляем только цифры) для использования в ссылке
      const cleanPhone = rawClientPhone.replace(/\D/g, "");
      phoneLine = `\r\n*${getOrderText("waPhone")}*: ${rawClientPhone}`;

      // Составляем текст официального подтверждения, который менеджер сможет отправить клиенту
      const clientMessageText =
        `${getOrderText("waClientConfirmHeader")}, ${name}!\r\n` +
        `${getOrderText("waClientConfirmSub")} (№ ${orderNumber}).\r\n\r\n` +
        `${getOrderText("waClientListLabel")}:\r\n${parts}\r\n\r\n` +
        `${getOrderText("waClientConfirmFooter")}\r\n` +
        `${getOrderText("waClientThanks")}`;

      // Копируем сгенерированный текст для клиента в буфер обмена
      if (navigator.clipboard && window.isSecureContext) {
        // Современный асинхронный метод (работает только в безопасном контексте HTTPS)
        navigator.clipboard.writeText(clientMessageText);
      } else {
        // Старый резервный (fallback) метод через создание временного textarea в DOM
        const textarea = document.createElement("textarea");
        textarea.value = clientMessageText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy"); // Выполняем нативную команду копирования
        document.body.removeChild(textarea);
      }

      // Формируем для менеджера удобную быструю ссылку для перехода в чат с клиентом
      clientChatLink =
        `\r\n-------------------------\r\n\r\n` +
        `*${getOrderText("waOpenClientChat")}*\r\n` +
        `https://wa.me/${cleanPhone}`;
    }

    // --- СБОРКА ИТОГОВОГО СООБЩЕНИЯ ДЛЯ ФИЛИАЛА ---
    const fullMessage =
      `📦 *${getOrderText("waOrder")}* № ${orderNumber}\r\n` +
      `🏢 *${getOrderText("waBranch")}*: ${branchLabel}\r\n` +
      `👤 *${getOrderText("waClient")}*: ${name}${phoneLine}\r\n` +
      `-------------------------\r\n\r\n` +
      `${vehicleBlock}\r\n` +
      `-------------------------\r\n\r\n` +
      `📋 *${getOrderText("waWantToOrder")}*:\r\n${parts}` +
      `${clientChatLink}`;

    // Открываем внешнее API WhatsApp в новой вкладке браузера.
    // Текст кодируется через encodeURIComponent и нормализуется в формат NFC для предотвращения искажения символов
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(fullMessage.normalize("NFC"))}`,
      "_blank",
    );
  }

  // --- НАВЕШИВАНИЕ ОБРАБОТЧИКОВ СОБЫТИЙ ---

  // При изменении состояния чекбокса приватности управляем доступностью кнопки отправки
  privacyCheckbox?.addEventListener("change", toggleSubmitButton);

  // Клик по кнопке отправки: отменяем стандартную отправку формы и запускаем валидацию
  submitBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    validateAndSend();
  });

  // При вводе текста в любое поле (input, textarea) модального окна автоматически снимаем с него ошибку
  orderModal.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", function () {
      clearFieldError(this);
    });
  });

  // Делегирование события 'change' на уровне всего модального окна
  orderModal.addEventListener("change", (e) => {
    // 1. Если изменился переключатель спецификации (По авто / По VIN)
    if (e.target.name === "carSpecification") {
      handleMethodChange(e.target.value);
    }

    // 2. Если изменился выбор филиала (радиокнопка)
    if (e.target.name === "branch") {
      renderManagerBadge(e.target.value); // Обновляем бейдж менеджера

      // Снимаем класс ошибки и скрываем текст ошибки с контейнера выбора филиала
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

  // Перехват кастомного события открытия модального окна (из скрипта глобальных окон)
  orderModal.addEventListener("modal:opened", (e) => {
    const origEvent = e.detail?.originalEvent;
    // Секретная фича: если окно открыли кликом с зажатым Ctrl или Meta (Cmd на Mac), включаем режим менеджера
    const isCtrlPressed = Boolean(
      origEvent && (origEvent.ctrlKey || origEvent.metaKey),
    );

    setPhoneBlockVisibility(isCtrlPressed);

    // Восстанавливаем корректное отображение полей в зависимости от активного таба
    const checkedRadio = orderModal.querySelector(
      'input[name="carSpecification"]:checked',
    );
    handleMethodChange(checkedRadio ? checkedRadio.value : "by-car");

    // Обновляем бейдж менеджера на основе текущей выбранной радиокнопки филиала
    const selectedBranchRadio = orderModal.querySelector(
      'input[name="branch"]:checked',
    );
    renderManagerBadge(selectedBranchRadio ? selectedBranchRadio.value : null);
    toggleSubmitButton();
  });

  // Перехват события закрытия окна: очищаем ошибки и принудительно сбрасываем режим менеджера
  orderModal.addEventListener("modal:closed", () => {
    clearErrors();
    setPhoneBlockVisibility(false);
  });

  // Отслеживаем глобальную смену языка на сайте
  document.addEventListener("language:changed", () => {
    // Если форма открыта или включен режим менеджера, обновляем плейсхолдеры на новом языке
    if (orderModal.classList.contains("is-open") || isManagerMode) {
      updateFormPlaceholders();
    }
  });

  // --- СТАРТОВАЯ ИНИЦИАЛИЗАЦИЯ И СБРОС ФОРМЫ ПРИ ЗАГРУЗКЕ ---
  handleMethodChange("by-car");
  setPhoneBlockVisibility(false);
  toggleSubmitButton();

  // Находим поля характеристик машины для подключения автокомплита подсказок
  const makeInput = document.getElementById("carMake");
  const modelInput = document.getElementById("carModel");
  const yearInput = document.getElementById("carYear");

  // Инициализация подсказок для марки машины (фильтрация по началу строки из массива POPULAR_MAKES)
  initSuggestions(
    makeInput,
    "makeSuggestions",
    (value) => {
      const val = value.trim().toLowerCase();
      if (!val) return [];
      return POPULAR_MAKES.filter((make) => make.toLowerCase().startsWith(val));
    },
    clearFieldError,
  );

  // Генерируем массив годов выпуска автомобиля (за последние 30 лет, начиная с текущего года)
  const currentYear = new Date().getFullYear();
  const yearsList = [];
  for (let y = currentYear; y >= currentYear - 30; y--) {
    yearsList.push(String(y));
  }

  // Инициализация подсказок для года выпуска автомобиля
  initSuggestions(
    yearInput,
    "yearSuggestions",
    (value) => {
      const val = value.trim();
      if (!val) return [];
      return yearsList.filter((year) => year.startsWith(val));
    },
    clearFieldError,
  );

  // Инициализация подсказок для модели (зависит от того, какая марка машины сейчас введена в поле makeInput)
  initSuggestions(
    modelInput,
    "modelSuggestions",
    (value) => {
      const val = value.trim().toLowerCase();
      const selectedMake = makeInput ? makeInput.value.trim() : "";
      // Если марка не введена или для нее нет базы моделей в CAR_MODELS, возвращаем пустой список
      if (!val || !selectedMake || !CAR_MODELS[selectedMake]) return [];
      return CAR_MODELS[selectedMake].filter((model) =>
        model.toLowerCase().startsWith(val),
      );
    },
    clearFieldError,
  );
}

/* ==========================================================================
CALLBACK MODAL
============================================================================= */
/**
 * Инициализирует форму запроса обратного звонка (Callback Form).
 * Настраивает строгую валидацию телефонных номеров (формат Германии),
 * выводит мультиязычные сообщения об ошибках и перенаправляет данные в WhatsApp.
 */
function initCallbackForm() {
  // Находим HTML-элемент формы обратного звонка по его ID
  const callbackForm = document.getElementById("callback-form");
  if (!callbackForm) return; // Если формы нет на странице, досрочно выходим

  // Извлекаем поле ввода номера телефона
  const phoneInput = document.getElementById("callback-phone");

  // Словарь текстов ошибок на русском (ru) и немецком (de) языках
  const callbackErrors = {
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
      // Для вывода динамической длины используется стрелочная функция-колбэк
      ru: (len) =>
        `Неверная длина номера (сейчас ${len} цифр, а нужно от 10 до 15)`,
      de: (len) =>
        `Ungültige Nummernlänge (aktuell ${len} Ziffern, erforderlich sind 10 bis 15)`,
    },
    sameDigits: {
      ru: "Номер не может состоять из одинаковых цифр",
      de: "Die Nummer darf nicht aus identischen Ziffern bestehen",
    },
  };

  /**
   * Отображает текстовое сообщение об ошибке под полем ввода телефона.
   *
   * @param {string} errorKey - Ключ ошибки из объекта callbackErrors.
   * @param {number} [currentLength=0] - Текущая длина номера (передается только для ошибки длины).
   */
  function showCallbackError(errorKey, currentLength = 0) {
    // Определяем текущий язык страницы
    const currentLang = document.documentElement.lang || "ru";
    const entry = callbackErrors[errorKey];

    // Получаем итоговый текст: если в словаре функция — вызываем её, иначе берем готовую строку
    const message =
      typeof entry?.[currentLang] === "function"
        ? entry[currentLang](currentLength)
        : entry?.[currentLang] || entry?.ru;

    // Добавляем инпуту класс невалидного состояния (для CSS-стилизации)
    phoneInput.classList.add("is-invalid");

    // Создаем HTML-блок для текста ошибки на лету
    const errorMsg = document.createElement("div");
    errorMsg.className = "form-error-msg";
    errorMsg.textContent = message;
    errorMsg.style.cssText =
      "color: var(--accent-color, #ff3366); font-size: 12px; margin-top: 6px; text-align: center;";

    // Вставляем ошибку внутрь родительского контейнера поля ввода и фокусируемся на инпуте
    phoneInput.closest(".callback-field")?.appendChild(errorMsg);
    phoneInput.focus();
  }

  /**
   * Удаляет CSS-класс ошибки и стирает текстовый блок с сообщением об ошибке из DOM.
   */
  function clearCallbackError() {
    phoneInput.classList.remove("is-invalid");
    callbackForm.querySelector(".form-error-msg")?.remove();
  }

  // --- ОБРАБОТКА ОТПРАВКИ ФОРМЫ (SUBMIT) ---
  callbackForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Предотвращаем классическую перезагрузку страницы

    let phone = phoneInput.value.trim();
    clearCallbackError(); // Перед новой проверкой сбрасываем старые ошибки

    // Шаг 1: Проверка на пустоту
    if (!phone) {
      showCallbackError("required");
      return;
    }

    // Шаг 2: Проверка на наличие букв латиницы, кириллицы или умлаутов
    if (/[a-zA-Zа-яА-ЯäöüßÄÖÜ]/.test(phone)) {
      showCallbackError("noLetters");
      return;
    }

    // Шаг 3: Проверка допустимого немецкого формата начала номера (+49, 49 или 0)
    if (
      !phone.startsWith("+49") &&
      !phone.startsWith("49") &&
      !phone.startsWith("0")
    ) {
      showCallbackError("invalidStart");
      return;
    }

    // Извлекаем из строки только чистые цифры для дальнейших проверок
    let phoneClean = phone.replace(/\D/g, "");

    // Шаг 4: Защита от ошибочного ввода нуля после международного кода (например, +490...)
    if (phone.startsWith("+0") || phoneClean.startsWith("490")) {
      showCallbackError("noZeroAfterCode");
      return;
    }

    // Шаг 5: Нормализация номера. Если он начинается с внутреннего '0',
    // заменяем его на международный код Германии '49'
    if (phone.startsWith("0")) {
      phoneClean = "49" + phoneClean.slice(1);
    }

    // Шаг 6: Проверка общей длины очищенного номера (стандарт E.164: от 10 до 15 цифр)
    if (phoneClean.length < 10 || phoneClean.length > 15) {
      showCallbackError("invalidLength", phoneClean.length);
      return;
    }

    // Шаг 7: Защита от фейковых номеров, состоящих из одной повторяющейся цифры (например, 7777777777)
    if (/^(\d)\1+$/.test(phoneClean)) {
      showCallbackError("sameDigits");
      return;
    }

    // --- ФОРМИРОВАНИЕ И ОТПРАВКА СООБЩЕНИЯ ---
    const formattedPhone = "+" + phoneClean; // Собираем итоговый номер в формате +49...
    const phoneOwner = branchData.westerkappeln.whatsapp; // Отправляем в WhatsApp филиала Westerkappeln
    const currentLang = document.documentElement.lang || "ru";

    // Текстовая сборка шаблона сообщения под язык интерфейса
    const titleText =
      currentLang === "de" ? "Rückrufanfrage" : "Запрос на обратный звонок";
    const phoneLabel = currentLang === "de" ? "Telefon" : "Телефон";
    const rawMessage = `📞 ${titleText}\n👤 ${phoneLabel}: ${formattedPhone}`;
    const encodedMessage = encodeURIComponent(rawMessage.normalize("NFC"));

    // Открываем диалог в WhatsApp
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneOwner}&text=${encodedMessage}`,
      "_blank",
    );

    // --- СБРОС И ЗАКРЫТИЕ ОКНА ---
    // Пытаемся найти родительское модальное окно, в котором лежала форма
    const modal = callbackForm.closest(".modal");
    if (modal && typeof window.closeModal === "function") {
      // Закрываем окно через глобальный метод модальных окон (если он подключен)
      window.closeModal(modal);
    } else if (modal) {
      // Резервное ручное закрытие, если глобальная функция не обнаружена
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }

    callbackForm.reset(); // Полностью очищаем поля формы
  });

  // Автоматически стираем ошибку в процессе того, как пользователь начинает исправлять текст
  phoneInput?.addEventListener("input", clearCallbackError);
}

/* ==========================================================================
APP INITIALIZATION (ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ)
============================================================================= */

// Ожидаем полную готовность объектной модели документа (DOM),
// чтобы скрипты могли безопасно находить нужные HTML-элементы на странице
document.addEventListener("DOMContentLoaded", () => {
  // 1. Подключаем базовую инфраструктуру окон и тем оформления
  initGlobalModals(); // Глобальная система модальных окон (делегирование кликов, Escape)
  initThemeSwitcher(); // Переключатель тем (светлая/темная) с записью в LocalStorage

  // 2. Инициализируем основные элементы навигации и структуры сайта
  initBurgerMenu(); // Мобильное бургер-меню (блокировка скролла, автозакрытие на ресайзе)
  initHeroSlider(); // Главный баннер-слайдер (цикличность, автоплей, поддержка свайпов)
  initBackToTop(); // Кнопка плавного возврата к началу страницы при прокрутке

  // 3. Настраиваем контентные блоки, карусели и аккордеоны
  initReviewsSlider(); // Карусель отзывов клиентов (динамический расчет ширины карточек и gap)
  initFaqAccordion(); // Аккордеон "Вопрос-ответ" (автозакрытие соседей и ARIA-доступность)
  initBranchSwitcher(); // Вкладки выбора филиалов компании (управление активными панелями)

  // 4. Подключаем служебные баннеры и сложную бизнес-логику форм
  initCookieBanner(); // Баннер согласия с политикой обработки файлов cookie (GDPR)
  initOrderFormLogic(); // Комплексная форма заказа деталей (мультиязычность, валидация полей/VIN, WhatsApp)
  initCallbackForm(); // Форма заказа обратного звонка (строгая валидация немецких телефонных номеров)

  // 5. Запускаем языковой менеджер в самом конце, чтобы он корректно
  // перевел и адаптировал все уже инициализированные компоненты выше
  initLanguageSwitcher(); // Контроллер циклического переключения и восстановления языка
});
