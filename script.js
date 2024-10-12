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
    // Add your answers here, similar to the previous examples for each category and letter.
};

let currentLetter;
let currentCategories = [];

document.getElementById('startButton').onclick = startGame;
document.getElementById('submitButton').onclick = submitRound;

function startGame() {
    document.getElementById('startArea').classList.add('hidden');
    document.getElementById('gameArea').classList.remove('hidden');

    currentLetter = getRandomLetter();
    document.getElementById('letter').innerText = currentLetter;

    currentCategories = getRandomCategories(currentLetter);
    displayCategories(currentCategories);

    startTimer(60); // Start a 60-second timer
}

function getRandomLetter() {
    const letters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split('');
    return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomCategories(letter) {
    return categories.filter(category => {
        return answers[category] && answers[category][letter] && answers[category][letter].length > 0;
    }).sort(() => Math.random() - 0.5).slice(0, 5); // Randomize and take 5 categories
}

function displayCategories(categories) {
    const categoriesList = document.getElementById('categories');
    categoriesList.innerHTML = '';
    categories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.innerText = category;
        categoriesList.appendChild(listItem);
    });
}

function submitRound() {
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = <h2>Ответы:</h2>;
    currentCategories.forEach(category => {
        const categoryAnswers = answers[category][currentLetter] || [];
        answersDiv.innerHTML += <p>${category}: ${categoryAnswers.join(', ')}</p>;
    });
    answersDiv.classList.remove('hidden');
}

function startTimer(duration) {
    let timer = duration;
    const timeDisplay = document.getElementById('time');

    const countdown = setInterval(() => {
        timeDisplay.innerText = timer;
        timer--;

        if (timer < 0) {
            clearInterval(countdown);
            alert("Время вышло!");
            submitRound();
        }
    }, 1000);
}
