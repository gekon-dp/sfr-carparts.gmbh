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
    de_manager: "Geben Sie die Teileliste des Kunden ein (mindestens 3 Zeichen)",
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
function t(key, lang = state.currentLang) {
  return translations[lang]?.[key] || translations.ru?.[key] || "";
}

function getLocalizedMapUrl(baseUrl, lang) {
  if (!baseUrl) return "";
  const targetLang = lang === "de" ? "de" : "ru";
  let src = baseUrl;

  if (src.includes("hl=")) {
    src = src.replace(/hl=[a-z]{2}/gi, `hl=${targetLang}`);
  } else {
    src += (src.includes("?") ? "&" : "?") + `hl=${targetLang}`;
  }

  src = src.replace(/!1s[a-z]{2}/gi, `!1s${targetLang}`);
  src = src.replace(/!2s[a-z]{2}/gi, `!2s${targetLang}`);

  return src;
}

function updateBranchInfo(branchId = state.activeBranch) {
  if (branchData[branchId]) {
    state.activeBranch = branchId;
  }

  const lang = state.currentLang;

  Object.keys(branchData).forEach((id) => {
    const panel = document.getElementById(`branch-${id}`);
    const data = branchData[id];
    if (!panel || !data) return;

    const addressEl = panel.querySelector(".js-branch-address");
    const hoursEl = panel.querySelector(".js-branch-hours");
    const phoneEl = panel.querySelector(".js-branch-phone");

    if (addressEl) {
      addressEl.textContent = data.address[lang] || data.address.de;
    }
    if (hoursEl) {
      hoursEl.textContent = data.hours[lang] || data.hours.de;
    }
    if (phoneEl) {
      phoneEl.textContent = data.phone;
      phoneEl.href = `tel:${data.phone.replace(/\s+/g, "")}`;
    }
  });

  const mapIframe = document.getElementById("branch-map");
  const currentData = branchData[state.activeBranch];
  if (mapIframe && currentData?.mapUrl) {
    const localizedSrc = getLocalizedMapUrl(currentData.mapUrl, lang);
    if (mapIframe.src !== localizedSrc) {
      mapIframe.src = localizedSrc;
    }
  }
}

function applyLanguage(lang) {
  const nextLang = LANGUAGES.includes(lang) ? lang : "de";
  state.currentLang = nextLang;
  localStorage.setItem("sfr_lang", nextLang);
  document.documentElement.lang = nextLang;

  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    if (el.querySelector("span, a, strong, em")) return;
    const key = el.getAttribute("data-lang-key");
    const value = t(key, nextLang);
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-lang-ph]").forEach((el) => {
    const key = el.getAttribute("data-lang-ph");
    const value = t(key, nextLang);
    if (value) el.setAttribute("placeholder", value);
  });

  const langToggleText = document.getElementById("langToggleText");
  if (langToggleText) {
    langToggleText.textContent = nextLang.toUpperCase();
  }

  document.querySelectorAll(".callback-subtitle[lang]").forEach((el) => {
    el.hidden = el.getAttribute("lang") !== nextLang;
  });

  updateBranchInfo(state.activeBranch);
  document.dispatchEvent(
    new CustomEvent("language:changed", { detail: { lang: nextLang } }),
  );
}

function initSuggestions(input, boxId, getItems, onSelect) {
  if (!input) return;

  let box = document.getElementById(boxId);
  if (!box) {
    box = document.createElement("div");
    box.id = boxId;
    box.className = "suggestions-box";
    input.parentNode.style.position = "relative";
    input.parentNode.appendChild(box);
  }

  function hide() {
    box.classList.remove("is-visible");
  }

  input.addEventListener("input", function () {
    const items = getItems(this.value);
    box.innerHTML = "";

    if (!items.length) {
      hide();
      return;
    }

    items.forEach((text) => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.textContent = text;
      box.appendChild(item);
    });

    box.classList.add("is-visible");
  });

  box.addEventListener("mousedown", function (e) {
    if (!e.target.classList.contains("suggestion-item")) return;
    input.value = e.target.textContent;
    hide();
    if (typeof onSelect === "function") onSelect(input);
  });

  document.addEventListener("click", function (e) {
    if (e.target !== input) hide();
  });
}

/* ==========================================================================
THEME
============================================================================= */
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

  themeBtn?.addEventListener("click", () => {
    applyTheme(state.currentTheme === "light" ? "dark" : "light");
  });
}

/* ==========================================================================
LANGUAGE
============================================================================= */
function initLanguageSwitcher() {
  const langToggleBtn = document.getElementById("langToggleBtn");

  langToggleBtn?.addEventListener("click", () => {
    const currentIndex = LANGUAGES.indexOf(state.currentLang);
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;
    applyLanguage(LANGUAGES[nextIndex]);
  });

  const savedLang = localStorage.getItem("sfr_lang");
  const initialLang =
    savedLang && LANGUAGES.includes(savedLang)
      ? savedLang
      : state.currentLang || "de";

  applyLanguage(initialLang);
}

/* ==========================================================================
BURGER MENU
============================================================================= */
function initBurgerMenu() {
  const burgerBtn = document.getElementById("burgerToggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!burgerBtn || !mobileMenu) return;

  function toggleMenu(open) {
    const isActive =
      open !== undefined ? open : !mobileMenu.classList.contains("is-active");

    burgerBtn.classList.toggle("is-active", isActive);
    mobileMenu.classList.toggle("is-active", isActive);
    document.body.style.overflow = isActive ? "hidden" : "";
  }

  burgerBtn.addEventListener("click", () => toggleMenu());

  mobileMenu.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("click", () => toggleMenu(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991 && mobileMenu.classList.contains("is-active")) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
HERO SLIDER
============================================================================= */
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

  function startAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  nextBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    nextSlide();
    startAutoplay();
  });

  prevBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevSlide();
    startAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"), 10);
      if (!isNaN(slideIndex)) {
        showSlide(slideIndex);
        startAutoplay();
      }
    });
  });

  if (sliderEl) {
    sliderEl.addEventListener("mouseenter", () => {
      clearInterval(autoplayTimer);
    });
    sliderEl.addEventListener("mouseleave", () => {
      startAutoplay();
    });
  }

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
        startAutoplay();
      }
    },
    { passive: true },
  );

  showSlide(currentIndex);
  startAutoplay();
}

/* ==========================================================================
BACK-TO-TOP
============================================================================= */
function initBackToTop() {
  const backBtn = document.getElementById("back-to-top-btn");
  if (!backBtn) return;

  window.addEventListener("scroll", () => {
    backBtn.classList.toggle("is-visible", window.scrollY > 300);
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
REVIEWS SLIDER
============================================================================= */
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
      const endX = e.changedTouches[0].clientX;
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
FAQ
============================================================================= */
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
BRANCH SWITCHER
============================================================================= */
function initBranchSwitcher() {
  const tabs = document.querySelectorAll(".branch-tab");
  const panels = document.querySelectorAll(".branch-panel");
  const mapIframe = document.getElementById("branch-map");

  if (!tabs.length || !mapIframe) return;

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
        panel.classList.toggle("active", panel.id === `branch-${targetBranch}`);
      });

      updateBranchInfo(targetBranch);
    });
  });
}

/* ==========================================================================
COOKIE BANNER
============================================================================= */
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept-btn");
  const rejectBtn = document.getElementById("cookie-reject-btn");
  if (!banner) return;

  const cookieChoice = localStorage.getItem("sfr_cookie_consent");

  if (!cookieChoice) {
    banner.classList.add("is-visible");
  } else if (cookieChoice === "accepted") {
    state.gdprConsented = true;
  }

  function handleChoice(accepted) {
    localStorage.setItem(
      "sfr_cookie_consent",
      accepted ? "accepted" : "rejected",
    );
    state.gdprConsented = accepted;
    banner.classList.remove("is-visible");
  }

  acceptBtn?.addEventListener("click", () => handleChoice(true));
  rejectBtn?.addEventListener("click", () => handleChoice(false));
}

/* ==========================================================================
MODALS
============================================================================= */
function initGlobalModals() {
  window.openModalById = function (modalId, triggerEvent = null) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    modal.dispatchEvent(
      new CustomEvent("modal:opened", {
        bubbles: true,
        detail: { originalEvent: triggerEvent },
      }),
    );
  };

  window.closeModal = function (targetModal) {
    const activeModal = targetModal || document.querySelector(".modal.is-open");
    if (!activeModal) return;

    activeModal.classList.remove("is-open");
    activeModal.setAttribute("aria-hidden", "true");

    if (!document.querySelector(".modal.is-open")) {
      document.body.classList.remove("modal-open");
    }

    activeModal.dispatchEvent(
      new CustomEvent("modal:closed", { bubbles: true }),
    );
  };

  document.addEventListener("click", function (e) {
    const trigger = e.target.closest("[data-open-modal]");
    if (trigger) {
      e.preventDefault();
      window.openModalById(trigger.getAttribute("data-open-modal"), e);
      return;
    }

    const closeBtn = e.target.closest("[data-close]");
    if (closeBtn) {
      window.closeModal(closeBtn.closest(".modal"));
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") window.closeModal();
  });
}

/* ==========================================================================
ORDER MODAL
============================================================================= */
function initOrderFormLogic() {
  const orderModal = document.getElementById("orderModal");
  if (!orderModal) return;

  const submitBtn = orderModal.querySelector("#submitBtn");
  const privacyCheckbox = orderModal.querySelector("#privacyCheckbox");
  const phoneBlock = document.getElementById("managerPhoneBlock");

  let currentOrderMethod = "by-car";
  let isManagerMode = false;

  function getCurrentLang() {
    return state.currentLang || document.documentElement.lang || "ru";
  }

  function getOrderText(key, param = null) {
    const lang = getCurrentLang();
    const modeKey = isManagerMode ? `${lang}_manager` : lang;

    let translation =
      ORDER_I18N[key]?.[modeKey] ||
      ORDER_I18N[key]?.[lang] ||
      ORDER_I18N[key]?.ru_manager ||
      ORDER_I18N[key]?.ru ||
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

  function updateFormPlaceholders() {
    const lang = getCurrentLang();
    const modeKey = isManagerMode ? `${lang}_manager` : lang;
    const placeholdersDict = ORDER_I18N.placeholders;

    Object.keys(placeholdersDict).forEach((fieldId) => {
      const inputEl = document.getElementById(fieldId);
      if (!inputEl) return;
      inputEl.placeholder =
        placeholdersDict[fieldId][modeKey] ||
        placeholdersDict[fieldId][lang] ||
        placeholdersDict[fieldId].ru;
    });

    const phoneLabel = phoneBlock?.querySelector(".manager-phone-label");
    if (phoneLabel) {
      phoneLabel.textContent = getOrderText("phoneLabel");
    }
  }

  function renderManagerBadge(branchId) {
    const managerBlock = orderModal.querySelector(".manager-badge");
    if (!managerBlock) return;

    const lang = getCurrentLang();
    const managerData = branchData[branchId]?.manager;
    const nameEl = managerBlock.querySelector(".manager-name");
    const statusEl = managerBlock.querySelector(".manager-status");
    const avatarWrap = managerBlock.querySelector(".manager-avatar");
    const avatarImg = managerBlock.querySelector(".manager-avatar img");

    if (!branchId || !managerData) {
      if (avatarWrap) avatarWrap.style.display = "none";
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
      return;
    }

    if (avatarWrap) avatarWrap.style.display = "block";
    if (avatarImg) avatarImg.src = managerData.avatar;
    if (nameEl) nameEl.textContent = managerData.name[lang] || managerData.name.ru;
    if (statusEl) {
      statusEl.textContent = managerData.status[lang] || managerData.status.ru;
    }
  }

  function toggleSubmitButton() {
    if (!submitBtn || !privacyCheckbox) return;
    submitBtn.disabled = !privacyCheckbox.checked;
  }

  function isPhoneBlockVisible() {
    return (
      phoneBlock &&
      phoneBlock.style.display !== "none" &&
      !phoneBlock.classList.contains("is-hidden")
    );
  }

  function clearErrors() {
    orderModal
      .querySelectorAll(".has-error")
      .forEach((el) => el.classList.remove("has-error"));
    orderModal
      .querySelectorAll(".field-error-text, .error-message")
      .forEach((el) => {
        el.style.display = "none";
      });
  }

  function clearFieldError(inputElement) {
    if (!inputElement) return;
    const group =
      inputElement.closest(".form-group") || inputElement.parentElement;
    if (!group) return;
    group.classList.remove("has-error");
    const err = group.querySelector(".field-error-text, .error-message");
    if (err) err.style.display = "none";
  }

  function showFieldError(inputElement, message) {
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

  function handleMethodChange(selectedValue) {
    currentOrderMethod = selectedValue || "by-car";
    const carBlock = document.getElementById("carFieldsBlock");
    const vinBlock = document.getElementById("vinFieldsBlock");

    clearErrors();

    const showCar = currentOrderMethod === "by-car";
    if (vinBlock) {
      vinBlock.classList.toggle("is-hidden", showCar);
      vinBlock.style.display = showCar ? "none" : "block";
    }
    if (carBlock) {
      carBlock.classList.toggle("is-hidden", !showCar);
      carBlock.style.display = showCar ? "block" : "none";
    }
  }

  function setPhoneBlockVisibility(show) {
    isManagerMode = Boolean(show);

    if (phoneBlock) {
      phoneBlock.classList.toggle("is-hidden", !isManagerMode);
      phoneBlock.style.display = isManagerMode ? "block" : "none";
    }

    updateFormPlaceholders();
  }

  function validateAndSend() {
    clearErrors();

    const selectedBranchRadio = orderModal.querySelector(
      'input[name="branch"]:checked',
    );
    if (!selectedBranchRadio) {
      const branchContainer =
        orderModal.querySelector(".branch-options") ||
        orderModal.querySelector(".branch-selection");
      showFieldError(branchContainer, getOrderText("selectBranch"));
      return;
    }

    const partsInput = document.getElementById("partsList");
    const nameInput = document.getElementById("clientName");
    const phoneInput = document.getElementById("clientPhone");

    if (
      !partsInput ||
      !partsInput.value.trim() ||
      partsInput.value.trim().length < 3
    ) {
      showFieldError(partsInput, getOrderText("describeParts"));
      return;
    }

    if (!/[a-zA-Zа-яА-ЯёЁäöüÄÖÜß0-9]/.test(partsInput.value)) {
      showFieldError(partsInput, getOrderText("partsValidation"));
      return;
    }

    if (
      !nameInput ||
      !nameInput.value.trim() ||
      nameInput.value.trim().length < 2
    ) {
      showFieldError(nameInput, getOrderText("specifyName"));
      return;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁäöüÄÖÜß\s\-']+$/.test(nameInput.value.trim())) {
      showFieldError(nameInput, getOrderText("nameValidation"));
      return;
    }

    if (isPhoneBlockVisible() && phoneInput) {
      if (!phoneInput.value.trim()) {
        showFieldError(phoneInput, getOrderText("specifyPhone"));
        return;
      }

      const phoneDigits = phoneInput.value.replace(/\D/g, "");
      if (
        !/^[\d+\-()\s]{7,20}$/.test(phoneInput.value.trim()) ||
        phoneDigits.length < 7
      ) {
        showFieldError(phoneInput, getOrderText("phoneValidation"));
        return;
      }
    }

    if (currentOrderMethod === "by-car") {
      const makeInput = document.getElementById("carMake");
      const modelInput = document.getElementById("carModel");
      const yearInput = document.getElementById("carYear");
      const currentYear = new Date().getFullYear();

      if (!makeInput?.value.trim()) {
        showFieldError(makeInput, getOrderText("specifyMake"));
        return;
      }
      if (!modelInput?.value.trim()) {
        showFieldError(modelInput, getOrderText("specifyModel"));
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
        showFieldError(yearInput, getOrderText("invalidYear"));
        return;
      }
    } else {
      const vinInput = document.getElementById("vinCode");
      const vinValue = vinInput ? vinInput.value.replace(/\s+/g, "") : "";

      if (!vinInput || vinValue.length !== 17) {
        showFieldError(vinInput, getOrderText("vinLength", vinValue.length));
        return;
      }
      if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(vinValue)) {
        showFieldError(vinInput, getOrderText("vinValidation"));
        return;
      }
    }

    executeWhatsAppSend(selectedBranchRadio);
  }

  function executeWhatsAppSend(selectedBranchRadio) {
    const selectedBranch = selectedBranchRadio ? selectedBranchRadio.value : "";
    const phone = branchData[selectedBranch]?.whatsapp;

    if (!phone) {
      alert(getOrderText("missingPhoneError"));
      return;
    }

    const branchLabel = selectedBranchRadio.parentElement
      ? selectedBranchRadio.parentElement.textContent.trim()
      : selectedBranch.toUpperCase();

    const name = document.getElementById("clientName").value.trim();
    const phoneInput = document.getElementById("clientPhone");
    const rawClientPhone =
      isPhoneBlockVisible() && phoneInput ? phoneInput.value.trim() : "";
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
      vehicleBlock = `🚗 *${getOrderText("waCarData")}*:\r\n• *${getOrderText("waMake")}*: ${make}\r\n• *${getOrderText("waModel")}*: ${model}\r\n• *${getOrderText("waYear")}*: ${year}`;
    } else {
      const vinInput = document.getElementById("vinCode");
      const vin = vinInput
        ? vinInput.value.replace(/\s+/g, "").toUpperCase()
        : "";
      vehicleBlock = `🔑 *${getOrderText("waVinCode")}*:\r\n${vin}`;
    }

    let phoneLine = "";
    let clientChatLink = "";

    if (rawClientPhone) {
      const cleanPhone = rawClientPhone.replace(/\D/g, "");
      phoneLine = `\r\n*${getOrderText("waPhone")}*: ${rawClientPhone}`;

      const clientMessageText =
        `${getOrderText("waClientConfirmHeader")}, ${name}!\r\n` +
        `${getOrderText("waClientConfirmSub")} (№ ${orderNumber}).\r\n\r\n` +
        `${getOrderText("waClientListLabel")}:\r\n${parts}\r\n\r\n` +
        `${getOrderText("waClientConfirmFooter")}\r\n` +
        `${getOrderText("waClientThanks")}`;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(clientMessageText);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = clientMessageText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      clientChatLink =
        `\r\n-------------------------\r\n\r\n` +
        `*${getOrderText("waOpenClientChat")}*\r\n` +
        `https://wa.me/${cleanPhone}`;
    }

    const fullMessage =
      `📦 *${getOrderText("waOrder")}* № ${orderNumber}\r\n` +
      `🏢 *${getOrderText("waBranch")}*: ${branchLabel}\r\n` +
      `👤 *${getOrderText("waClient")}*: ${name}${phoneLine}\r\n` +
      `-------------------------\r\n\r\n` +
      `${vehicleBlock}\r\n` +
      `-------------------------\r\n\r\n` +
      `📋 *${getOrderText("waWantToOrder")}*:\r\n${parts}` +
      `${clientChatLink}`;

    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(fullMessage.normalize("NFC"))}`,
      "_blank",
    );
  }

  privacyCheckbox?.addEventListener("change", toggleSubmitButton);

  submitBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    validateAndSend();
  });

  orderModal.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", function () {
      clearFieldError(this);
    });
  });

  orderModal.addEventListener("change", (e) => {
    if (e.target.name === "carSpecification") {
      handleMethodChange(e.target.value);
    }

    if (e.target.name === "branch") {
      renderManagerBadge(e.target.value);
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

  orderModal.addEventListener("modal:opened", (e) => {
    const origEvent = e.detail?.originalEvent;
    const isCtrlPressed = Boolean(
      origEvent && (origEvent.ctrlKey || origEvent.metaKey),
    );

    setPhoneBlockVisibility(isCtrlPressed);

    const checkedRadio = orderModal.querySelector(
      'input[name="carSpecification"]:checked',
    );
    handleMethodChange(checkedRadio ? checkedRadio.value : "by-car");

    const selectedBranchRadio = orderModal.querySelector(
      'input[name="branch"]:checked',
    );
    renderManagerBadge(selectedBranchRadio ? selectedBranchRadio.value : null);
    toggleSubmitButton();
  });

  orderModal.addEventListener("modal:closed", () => {
    clearErrors();
    setPhoneBlockVisibility(false);
  });

  document.addEventListener("language:changed", () => {
    if (orderModal.classList.contains("is-open") || isManagerMode) {
      updateFormPlaceholders();
    }
  });

  handleMethodChange("by-car");
  setPhoneBlockVisibility(false);
  toggleSubmitButton();

  const makeInput = document.getElementById("carMake");
  const modelInput = document.getElementById("carModel");
  const yearInput = document.getElementById("carYear");

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

  const currentYear = new Date().getFullYear();
  const yearsList = [];
  for (let y = currentYear; y >= currentYear - 30; y--) {
    yearsList.push(String(y));
  }

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

  initSuggestions(
    modelInput,
    "modelSuggestions",
    (value) => {
      const val = value.trim().toLowerCase();
      const selectedMake = makeInput ? makeInput.value.trim() : "";
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
function initCallbackForm() {
  const callbackForm = document.getElementById("callback-form");
  if (!callbackForm) return;

  const phoneInput = document.getElementById("callback-phone");
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

  function showCallbackError(errorKey, currentLength = 0) {
    const currentLang = document.documentElement.lang || "ru";
    const entry = callbackErrors[errorKey];
    const message =
      typeof entry?.[currentLang] === "function"
        ? entry[currentLang](currentLength)
        : entry?.[currentLang] || entry?.ru;

    phoneInput.classList.add("is-invalid");
    const errorMsg = document.createElement("div");
    errorMsg.className = "form-error-msg";
    errorMsg.textContent = message;
    errorMsg.style.cssText =
      "color: var(--accent-color, #ff3366); font-size: 12px; margin-top: 6px; text-align: center;";

    phoneInput.closest(".callback-field")?.appendChild(errorMsg);
    phoneInput.focus();
  }

  function clearCallbackError() {
    phoneInput.classList.remove("is-invalid");
    callbackForm.querySelector(".form-error-msg")?.remove();
  }

  callbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let phone = phoneInput.value.trim();
    clearCallbackError();

    if (!phone) {
      showCallbackError("required");
      return;
    }
    if (/[a-zA-Zа-яА-ЯäöüßÄÖÜ]/.test(phone)) {
      showCallbackError("noLetters");
      return;
    }
    if (
      !phone.startsWith("+49") &&
      !phone.startsWith("49") &&
      !phone.startsWith("0")
    ) {
      showCallbackError("invalidStart");
      return;
    }

    let phoneClean = phone.replace(/\D/g, "");

    if (phone.startsWith("+0") || phoneClean.startsWith("490")) {
      showCallbackError("noZeroAfterCode");
      return;
    }

    if (phone.startsWith("0")) {
      phoneClean = "49" + phoneClean.slice(1);
    }

    if (phoneClean.length < 10 || phoneClean.length > 15) {
      showCallbackError("invalidLength", phoneClean.length);
      return;
    }
    if (/^(\d)\1+$/.test(phoneClean)) {
      showCallbackError("sameDigits");
      return;
    }

    const formattedPhone = "+" + phoneClean;
    const phoneOwner = branchData.westerkappeln.whatsapp;
    const currentLang = document.documentElement.lang || "ru";
    const titleText =
      currentLang === "de" ? "Rückrufanfrage" : "Запрос на обратный звонок";
    const phoneLabel = currentLang === "de" ? "Telefon" : "Телефон";
    const rawMessage = `📞 ${titleText}\n👤 ${phoneLabel}: ${formattedPhone}`;
    const encodedMessage = encodeURIComponent(rawMessage.normalize("NFC"));

    window.open(
      `https://api.whatsapp.com/send?phone=${phoneOwner}&text=${encodedMessage}`,
      "_blank",
    );

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

  phoneInput?.addEventListener("input", clearCallbackError);
}

/* ==========================================================================
APP INITIALIZATION
============================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initGlobalModals();
  initThemeSwitcher();
  initBurgerMenu();
  initHeroSlider();
  initBackToTop();
  initReviewsSlider();
  initFaqAccordion();
  initBranchSwitcher();
  initCookieBanner();
  initOrderFormLogic();
  initCallbackForm();
  initLanguageSwitcher();
});
