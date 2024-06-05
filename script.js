

function toggleSubcards(card) {
    var subcardsContainer = card.querySelector('.subcards-container');
    subcardsContainer.classList.toggle('show');

    if (card.classList.contains('card4')) {
        var cardContainer = card.parentElement; // Получаем родительский контейнер карточки
        cardContainer.classList.toggle('show'); // Применяем класс к родительскому контейнеру
    }
}

        // Функция для создания и отображения подкарточек
function showSubcards() {
    // Создаем массив с данными для подкарточек
    const subcardsData = [
        { image: '/photo_2024-05-27_15-57-35.jpg', description: 'Тетрадь 36 - описание' },
        { image: '/photo_2024-05-27_15-57-35.jpg', description: 'Тетрадь 48 - описание' },
        { image: '/photo_2024-05-27_15-57-35.jpg', description: 'Тетрадь 96 - описание' }
    ];

    // Получаем контейнер для подкарточек
    const subcardsContainer = document.getElementById('subcards-container');
    // Очищаем контейнер от предыдущих подкарточек, если они есть
    subcardsContainer.innerHTML = '';

    // Создаем и добавляем подкарточки
    subcardsData.forEach(data => {
        const subcard = document.createElement('div');
        subcard.classList.add('product-card');
        subcard.innerHTML = `
            <div class="product-image">
                <img src="${data.image}" alt="Product Image">
            </div>
            <div class="product-info">
                <h3>${data.description}</h3>
            </div>
        `;
        // Добавляем обработчик события для открытия попапа при клике на подкарточку
        subcard.addEventListener('click', () => openPopup(data.image, data.description));
        // Добавляем подкарточку в контейнер
        subcardsContainer.appendChild(subcard);
    });

    // Отображаем контейнер с подкарточками
    subcardsContainer.style.display = 'flex';
}




function toggleSubcards(card) {
    var subcardsContainer = card.querySelector('.subcards-container');
    subcardsContainer.classList.toggle('show');
}



        function openPopup1(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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
        

        function openPopup2(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 4888 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup3(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup4(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup5(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup6(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup7(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup8(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup9(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup10(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup11(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup12(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup13(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup14(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup15(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup16(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup17(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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

        function openPopup18(imageSrc, thumbnails, description) {
            // Устанавливаем главное изображение
            description = `
            Тетрадь - 48 листов
            Обложка - мелованный картон 190 грамм
            Внутренний блок - офсет 55 гр., клетка, красные поля
            Скрепление - скоба
            Формат - 170x205`;

            imageSrc = '/photo_2024-05-27_15-57-35.jpg'
            document.querySelector('.popup-content .main-image img').src = imageSrc;

            // Создаем маленькие изображения (thumbnails)
            const thumbnailsContainer = document.querySelector('.popup-content .thumbnails');
            thumbnailsContainer.innerHTML = '';
            thumbnails.forEach(function (thumbnailSrc) {
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailSrc;
                thumbnailImg.alt = 'Маленькое изображение';
                thumbnailImg.addEventListener('click', function () {
                    // При клике на маленькое изображение заменяем главное изображение
                    document.querySelector('.popup-content .main-image img').src = thumbnailSrc;
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
