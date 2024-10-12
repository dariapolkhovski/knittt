const categories = [
    "Напитки",
    "Популярная еда в России",
    "Сети быстрого питания",
    "Сладости",
    "Специи, приятности, приправы",
    "Фрукты, ягоды, овощи",
    "Что в холодильнике",
    "Завтра будет…",
    "Лучшие друзья никогда не…",
    "Мой начальник …",
    "Моя собака…",
    "Пахнет как…",
    "Я чувствую себя..",
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
    "Школьные предметы и занятия",
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
    "Вещи которые висят на стене",
    "Вещи которые кладут в карман",
    "Вещи, которые обычно зеленые",
    "Вещи, которые обычно красные",
    "Детские вещи",
    "Круглые вещи",
    "Липкие вещи",
    "Любовь - какая?",
    "Романтические вещи",
    "Свадебные вещи"
];

const answers = {
    "Напитки": {
        "А": ["Айран", "Агуша"],
        "Б": ["Боржоми", "Бира"],
        "В": ["Вода", "Вино"],
    },
    "Популярная еда в России": {
        "А": ["Азу", "Арбуз"],
        "Б": ["Борщ", "Блины"],
    },
    // Add remaining categories with answers...
};

document.addEventListener("DOMContentLoaded", () => {
    const letter = localStorage.getItem('randomLetter');
    document.getElementById('letter').innerText = letter;
    document.getElementById('gameArea').classList.remove('hidden');

    const currentCategories = getRandomCategories(letter);
    displayCategories(currentCategories);

    startTimer(60); // Start a 60-second timer
});

function getRandomCategories(letter) {
    return categories.filter(category => {
        return answers[category] && answers[category][letter] && answers[category][letter].length > 0;
    }).sort(() => Math.random() - 0.5).slice(0, 5); // Randomize and take 5 categories
}

function displayCategories(categories) {
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '';
    categories.forEach(category => {
        const inputField = <label>${category}: <input type="text" class="answerInput" data-category="${category}"></label><br>;
        categoriesDiv.innerHTML += inputField;
    });
}

function startTimer(duration) {
    let timerDisplay = duration;
    const timeDisplay = document.getElementById('time');

    const timer = setInterval(() => {
        timeDisplay.innerText = timerDisplay;
        timerDisplay--;

        if (timerDisplay < 0) {
            clearInterval(timer);
            alert("Время вышло!");
            submitRound();
        }
    }, 1000);

    document.getElementById('submitButton').onclick = () => {
        clearInterval(timer);
        submitRound();
    };
}

function submitRound() {
    const answerElements = document.querySelectorAll('.answerInput');
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = <h2>Ответы:</h2>;
    
    answerElements.forEach(input => {
        const userAnswer = input.value;
        const category = input.dataset.category;
        const correctAnswers = answers[category][document.getElementById('letter').innerText] || [];
        
        answersDiv.innerHTML += <p>${category}: ${userAnswer} - ${correctAnswers.includes(userAnswer) ? 'Правильно' : 'Неправильно'}</p>;
    });
    answersDiv.classList.remove('hidden');
}
