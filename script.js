let currentIndex = 0;
let thumbnails = [];
// script.js
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = thumbnails.length - 1; // Loop to the last image
    }
    document.getElementById('zoomedImage').src = thumbnails[currentIndex];
}

function nextImage() {
    if (currentIndex < thumbnails.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to the first image
    }
    document.getElementById('zoomedImage').src = thumbnails[currentIndex];
}


function openZoomModal() {
    var mainImageSrc = document.getElementById('mainImage').src;
    document.getElementById('zoomedImage').src = mainImageSrc;
    document.getElementById('zoomModal').style.display = "block";
    currentIndex = thumbnails.indexOf(mainImageSrc);
    zoomedImage.style.maxWidth = '90%';
    zoomedImage.style.maxHeight = '90%';
}

function closeZoomModal() {
    document.getElementById('zoomModal').style.display = "none";
}
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1); // Adjusting index since it's 0-based
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  dots[slideIndex].className += " active";
}

// Automatic Slideshow
let slideInterval = setInterval(function() {
  plusSlides(1);
}, 5000);
const container = document.querySelector('.container');
let startX = 0;

container.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX > startX) {
    container.scrollLeft += container.offsetWidth;
  } else {
    container.scrollLeft -= container.offsetWidth;
  }
});
document.getElementById('toggle-button').addEventListener('click', function() {
    var textElement = document.getElementById('text');
    var button = document.getElementById('toggle-button');

    if (textElement.innerText.startsWith('2010 yilda')) {
        textElement.innerText = 'Наша компания, основанная в 2010 году в Узбекистане, является ведущим производителем тетрадей и блокнотов на рынке. На протяжении всей своей деятельности мы зарекомендовали себя как надежный поставщик высококачественных канцелярских товаров.\nНаш ассортимент включает различные тетради и блокноты, подходящие для школьников, студентов, офисных работников и творческих людей. Мы предлагаем продукцию в различных форматах, с разными обложками и бумажными материалами, чтобы удовлетворить потребности каждого клиента.\nПроизводственный процесс нашей компании основан на использовании современных технологий и высококачественного сырья. Мы уделяем особое внимание экологическим аспектам, стремимся снизить воздействие на окружающую среду. Весь производственный цикл проходит под строгим контролем качества, что позволяет нам гарантировать прочность и удобство использования наших продуктов.\nНаша компания также активно сотрудничает с образовательными учреждениями и корпоративными клиентами, предлагая специальные условия для оптовых заказов и возможность индивидуального брендирования продукции.\nМы гордимся тем, что вносим свой вклад в образовательную и профессиональную среду Узбекистана, продолжая обеспечивать высококачественными канцелярскими товарами, которые помогают учиться, работать и творить.';
        button.innerText = 'O‘zbek tili';
    } else {
        textElement.innerText = `2010 yilda O‘zbekistonda tashkil etilgan kompaniyamiz bozorda daftar va bloknotlarning yetakchi ishlab chiqaruvchisi hisoblanadi. Faoliyati davomida biz o‘zimizni ishonchli va yuqori sifatli kantselyariya mahsulotlari yetkazib beruvchisi sifatida namoyon etdik.\nBizning assortimentimizga maktab o‘quvchilari, talabalar, ofis xodimlari va ijodkorlar uchun mos keladigan turli xil daftar va bloknotlar kiradi. Biz mahsulotlarni turli formatlarda, turli xil muqovalar va qog‘oz materiallari bilan taklif etamiz, har bir mijozning ehtiyojini qondirish uchun.\nKompaniyamiz ishlab chiqarish jarayoni zamonaviy texnologiyalar va yuqori sifatli xom ashyodan foydalanishga asoslangan. Biz ekologik jihatlarga alohida e'tibor qaratamiz, atrof- muhitga ta'sirni kamaytirishga intilamiz. Butun ishlab chiqarish sikli sifatni qat'iy nazorat qilish orqali o‘tadi, bu bizga mahsulotlarimizdan foydalanishda mustahkamlik va qulaylikka kafolat berish imkonini beradi.\nKompaniyamiz shuningdek, ta'lim muassasalari va korporativ mijozlar bilan faol hamkorlik qiladi, ulgurji buyurtmalar uchun maxsus shartlar va mahsulotlarni individual brending qilish imkoniyatini taklif etamiz.\nBiz O‘zbekistondagi ta'lim va kasbiy muhitga hissa qo‘shayotganimizdan faxrlanamiz, o‘qish, ishlash va ijod qilishda yordam beradigan yuqori sifatli kantselyariya mahsulotlari bilan ta'minlashda davom etamiz.`
        button.innerText = 'Русский язык';
    }
});
document.getElementById('toggle-button1').addEventListener('click', function() {
    var textElement1 = document.getElementById('text1');
    var button1 = document.getElementById('toggle-button1');

    if (textElement1.innerText.startsWith('Mahsulotlarimiz jahon')) {
        textElement1.innerText = 'Наши продукции производятся по новейшим технологиям на оборудованиях Lineomatic (Индия), которая занимет одну из лидирующих позиций на глобальном рынке.';
        button1.innerText = 'O‘zbek tili';
    } else {
        textElement1.innerText = ` Mahsulotlarimiz jahon bozorida yetakchi o‘rinlardan birini egallagan Lineomatic (Hindiston) uskunalarida,  eng zamonaviy texnologiyalardan foydalangan holda ishlab chiqariladi.`
        button1.innerText = 'Русский язык';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const productCards = document.querySelector('.mainContainerCarouselFinal');

    const scrollAmount = 300; // Adjust this value as needed

    prevButton.addEventListener('click', function() {
        productCards.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        productCards.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
function openPopup1(imageSrc, thumbnailList, initialDescription) {
    const descriptions = [
        `Формат - A5 
        Количество листов - 12 
        Плотность бумаги - 55 г/м2 
        Скрепление - скоба 
        Бумага офсетная`,
        `Формат - A5 
        Количество листов - 12 
        Плотность бумаги - 55 г/м2 
        Скрепление - скоба 
        Бумага офсетная`,
        `Формат - A5 
        Количество листов - 12 
        Плотность бумаги - 55 г/м2 
        Скрепление - скоба 
        Бумага офсетная`,
        `Формат - A5 
        Количество листов - 12 
        Плотность бумаги - 80 г/м2 
        Скрепление - скоба
        Бумага офсетная`,
        `Формат - A5 
        Количество листов - 12 
        Плотность бумаги - 80 г/м2 
        Скрепление - скоба
        Бумага офсетная`,
        `Формат - A5 
        Количество листов - 12 
        Плотность бумаги - 80 г/м2 
        Скрепление - скоба
        Бумага офсетная`,
        `Формат - A5
        Количество листов - 12
        Плотность бумаги - 55 г/м2
        Скрепление - скоба
        Отпечатано на бумаге “Архангельский ЦБК`
    ];

    const mainImage = document.getElementById('mainImage');
    const description = document.getElementById('description');
    initialDescription =  `Формат - A5 
    Количество листов - 12 
    Плотность бумаги - 55 г/м2 
    Скрепление - скоба 
    Бумага офсетная`;
    if (mainImage && description) {
        mainImage.src = imageSrc;
        description.innerText = initialDescription;
    } else {
        console.error("Main image or description element not found.");
        return;
    }

    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        thumbnailList.forEach(function (thumbnailSrc, index) {
            const thumbnailImg = document.createElement('img');
            thumbnailImg.src = thumbnailSrc;
            thumbnailImg.alt = 'Thumbnail image';
            thumbnailImg.classList.add('thumbnail-image'); // Add a class for easier styling
            thumbnailImg.addEventListener('click', function () {
                mainImage.src = thumbnailSrc;
                description.innerText = descriptions[index] || initialDescription;
            });
            thumbnailsContainer.appendChild(thumbnailImg);
        });
    } else {
        console.error("Thumbnails container not found.");
        return;
    }

    const popup = document.getElementById('popup');
    if (popup) {
        popup.classList.add('show');
    } else {
        console.error("Popup element not found.");
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.classList.remove('show');
    } else {
        console.error("Popup element not found.");
    }
}
       
function openPopup2(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 36
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон Скрепление - скоба`;

    imageSrc = '/images/36/IMAGE 2024-06-10 14:30:18.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');

    
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup3(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 24
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба`;

    imageSrc = '/Каталог 2024-2025/2 Предметный тетрадь/1 - 24 фан/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup4(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5 
    Количество листов - 40 
    Плотность бумаги - 55 г/м2 
    Обложка - мелованный картон 
    Скрепление - скоба`;

    imageSrc = '/Каталог 2024-2025/4 Дневник/днекник герб/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup5(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Тетрадь - 48 листов
    Обложка - мелованный картон 190 грамм
    Внутренний блок - офсет 55 гр., клетка, красные поля
    Скрепление - скоба
    Формат - 170x205`;

    imageSrc = '/images/36/IMAGE 2024-06-10 14:30:18.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup6(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5 
    Количество листов - 40 
    Плотность бумаги - 55 г/м2 
    Обложка - матовая ламинация 
    Скрепление - твердый переплет 
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/4 Дневник/Дневник твр/photo1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup7(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4 
    Количество листов - 16 
    Плотность бумаги - 100 г/м2 
    Обложка - мелованный картон
    Скрепление - скоба`;

    imageSrc = '/Каталог 2024-2025/6 Альбом для рисования/16/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup8(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 24 
    Плотность бумаги - 100 г/м2 
    Обложка - мелованный картон
    Скрепление - скоба`;

    imageSrc = '/Каталог 2024-2025/6 Альбом для рисования/24/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup9(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 40 
    Плотность бумаги - 100 г/м2 
    Обложка - мелованный картон
    Скрепление - скоба 
    Дизайн изделия дополнен`;

    imageSrc = '/Каталог 2024-2025/6 Альбом для рисования/40/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup10(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 40
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/7 BANNER/1 Д. Журнал Banner 40/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup11(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 96
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/7 BANNER/2 Д. Журнал 96 баннер/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup44(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 96
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/8 Деловой Журанл/1 Д. Журнал А5 96/journal3.jpg',
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup12(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 100
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/7 BANNER/3  Регистрация/А4/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup13(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 100
    Плотность бумаги ----55 г/м2
    Обложка - -мелованный картон 
    Скрепление - -скоба
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/7 BANNER/3  Регистрация/А5/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup15(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 96
    Плотность бумаги - 55 г/м2
    Обложка - матовая ламинация 
    Скрепление - твердый переплет
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/8 Деловой Журанл/2 Д. Журнал 96 А4/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
 
       
function openPopup19(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Тетрадь - 48 листов
    Обложка - мелованный картон 190 грамм
    Внутренний блок - офсет 55 гр., клетка, красные поля
    Скрепление - скоба
    Формат - 170x205`;

    imageSrc = '/Каталог 2024-2025/1 Тетради/48/1photo.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup20(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 96
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба`;

    imageSrc = '/Каталог 2024-2025/1 Тетради/96/photo1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup21(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 24
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - cкоба`;

    imageSrc = '/Каталог 2024-2025/1 Тетради/24/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup22(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 24
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба`;

    imageSrc = '/Каталог 2024-2025/2 Предметный тетрадь/2 - ФАН новый 24/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup23(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 36
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба`;

    imageSrc = '/Каталог 2024-2025/2 Предметный тетрадь/3 - черный/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup24(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 36
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - скоба`;

    imageSrc = '/Каталог 2024-2025/2 Предметный тетрадь/4 - 36 фан/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup25(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 72
    Плотность бумаги - 55 г/м2
    Обложка - -мелованный картон 
    Скрепление - гребень`;

    imageSrc = '/Каталог 2024-2025/3 Пружина/Пружина 1/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup27(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 120
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - гребень`;

    imageSrc = '/Каталог 2024-2025/3 Пружина/Пружина 3/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup26(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 96
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - гребень`;

    imageSrc = '/Каталог 2024-2025/3 Пружина/Пружина 2/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
       
function openPopup28(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A5
    Количество листов - 144
    Плотность бумаги - 55 г/м2
    Обложка - мелованный картон 
    Скрепление - гребень`;

    imageSrc = '/Каталог 2024-2025/3 Пружина/Пружина 4/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 


function openPopup29(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 150
    Плотность бумаги - 55 г/м2
    Обложка - матовая ламинация 
    Скрепление - твердый переплет 
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/8 Деловой Журанл/3 Д. Журнал 150/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
function openPopup31(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `   
    Формат - 260х210
    Количество листов - 80
    Плотность бумаги - 55 г/м2
    Обложка - глянцевая ламинация 
    Скрепление - твердый переплет 
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/9 Журнал/1 Д. Журнал 80 желтый/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
function openPopup32(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - 260х210 
    Количество листов - 80
    Плотность бумаги - 55 г/м2
    Обложка - матовая ламинация 
    Скрепление - твердый переплет 
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/9 Журнал/2 Д. Журнал 80 матовый/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
function openPopup30(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 200
    Плотность бумаги - 55 г/м2
    Обложка - матовая ламинация 
    Скрепление - твердый переплет 
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/8 Деловой Журанл/4 Д. Журнал 200/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
function openPopup33(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4
    Количество листов - 96
    Плотность бумаги - 55 г/м2
    Обложка - матовая ламинация 
    Скрепление - твердый переплет 
    Материал блока - бумага офсетная`;

    imageSrc = '/Каталог 2024-2025/9 Журнал/3 Д. Журнал А4 Герб/1.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 
 
function openPopup34(imageSrc, thumbnailList, description) {
    // Устанавливаем главное изображение
    description = `
    Формат - A4, А3 
    Количество листов - 10 
    Плотность бумаги - 160, 235 г/м2 
    Обложка - Картон`;

    imageSrc = '/Каталог 2024-2025/10 Папка для Черчения/1 копия.jpg'
    document.getElementById('mainImage').src = imageSrc;
    thumbnails = [imageSrc, ...thumbnailList]; // Initialize the thumbnails array


    // Создаем маленькие изображения (thumbnails)
    const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
    thumbnailsContainer.innerHTML = '';
    thumbnailList.forEach(function (thumbnailSrc, index) {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = thumbnailSrc;
        thumbnailImg.alt = 'Маленькое изображение';
        thumbnailImg.addEventListener('click', function () {
            document.getElementById('mainImage').src = thumbnailSrc;
            currentIndex = index + 1; // Update currentIndex
        });
        thumbnailsContainer.appendChild(thumbnailImg);
    });

    // Устанавливаем описание
    document.querySelector('.popup-content .description').innerText = description;

    // Показываем Popup
    document.getElementById('popup').classList.add('show');
}

// Функция для закрытия Popup
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
 