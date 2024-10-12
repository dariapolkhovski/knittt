// Список категорий
const categories = [
    "Напитки",
    "Популярная еда в России",
    "Сети быстрого питания",
    "Сладости",
    "Специи, приятности, приправы",
    "Фрукты, ягоды, овощи",
    "Что в холодильнике",
    "Завтра будет...",
    "Лучшие друзья никогда не...",
    "Мой начальник...",
    "Моя собака...",
    "Пахнет как...",
    "Я чувствую себя...",
    "Известные кинофранзы",
    "Мультфильмы и мультсериалы",
    "Реалити шоу",
    "Фильмы",
    "Сериалы",
    "Города",
    "Известные ученые и изобретатели",
    "Исторические люди",
    "Минералы, драгоценные камни, камни и т.д",
    "Достопримечательности",
    "Столицы",
    "Страны",
    "Типично русские вещи",
    "Школьные предметы и занятые",
    "Языки",
    "Вещи из космоса",
    "Млекопитающие",
    "На что бывают аллергии",
    "Насекомые, рептилии, и прочее",
    "Птицы",
    "Рыбы",
    "Цветы",
    "Части человеческого тела",
    "Элементы периодической таблицы",
    "Музыкальные инструменты",
    "Актеры и актрисы",
    "Музыкальные исполнители и группы",
    "Стили музыки",
    "Все для дня рождения",
    "Из чего сделаны предметы",
    "Инструменты",
    "Марки автомобилей",
    "Мебель",
    "Места, куда я хотел бы пойти",
    "Офисные и школьные принадлежности",
    "Профессии",
    "Типы транспорта",
    "Холодные вещи",
    "Электроника и гаджеты",
    "Женские имена",
    "Мужские имена",
    "Слова с буквами «ор» в конце",
    "Слова с буквами «ст» в конце",
    "Слова с буквой «ы»",
    "Слова с буквой «ь»",
    "Слова с удвоенными согласными",
    "Виды спорта",
    "Вещи в ванной",
    "Вещи, которые вещают на стену",
    "Вещи, которые кладут в карман",
    "Вещи, которые обычно зеленые",
    "Вещи, которые обычно красные",
    "Детские вещи",
    "Круглые вещи",
    "Липкие вещи",
    "Любовь - какая?",
    "Романтические вещи",
    "Свадебные вещи",
];

// Функция для выбора случайных категорий
function getRandomCategories() {
    let randomCategories = [];
    while (randomCategories.length < 5) {
        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];
        if (!randomCategories.includes(randomCategory)) {
            randomCategories.push(randomCategory);
        }
    }
    return randomCategories;
}

// Функция для выбора случайной буквы
function getRandomLetter() {
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

// Функция для начала игры
function startGame() {
    // Очистка предыдущего результата
    document.getElementById('category-list').innerHTML = '';
    document.getElementById('answers-list').innerHTML = '';
    
    // Получаем случайные категории
    const randomCategories = getRandomCategories();
    randomCategories.forEach((category, index) => {
        const li = document.createElement('li');
        li.textContent = category;
        document.getElementById('category-list').appendChild(li);
        
        // Создаем поле для ответа
        const answerItem = document.createElement('li');
        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.placeholder = 'Ответ';
        answerItem.appendChild(answerInput);
        document.getElementById('answers-list').appendChild(answerItem);
    });

    // Получаем случайную букву
    const randomLetter = getRandomLetter();
    document.getElementById('random-letter').textContent = randomLetter;

    // Показываем поле для ответов
    document.getElementById('answers-section').style.display = 'block';
}
