let categories = ["Напитки", "Популярная еда в России", "Сети быстрого питания", "Сладости", "Специи, приятности, приправы", "Фрукты, ягоды, овощи", "Что в холодильнике", "Завтра будет...", "Лучшие друзья никогда не...", "Мой начальник ...", "Моя собака...", "Пахнет как...", "Я чувствую себя..", "Известные кинофранзы", "Мультфильмы и мультсериалы", "Реалити шоу", "Фильмы", "Сериалы", "Города", "Известные ученые и изобретатели", "Исторические люди", "Минералы, драгоценные камни, камни и т.д", "Достопримечательности", "Столицы", "Страны", "Типично русские вещи", "Школьные предметы и занятые", "Языки", "Вещи из космоса", "Млекопитающие", "На что бывают аллергии", "Насекомые, рептилии, и прочее", "Птицы", "Рыбы", "Цветы", "Части человеческого тела", "Элементы периодической таблицы", "Музыкальные инструменты", "Актеры и актрисы", "Музыкальные исполнители и группы", "Стили музыки", "Все для дня рождения", "Из чего сделаны предметы", "Инструменты", "Марки автомобилей", "Мебель", "Места, куда я хотел бы пойти", "Офисные и школьные принадлежности", "Профессии", "Типы транспорта", "Холодные вещи", "Электроника и гаджеты", "Женские имена", "Мужские имена", "Слова с буквами «ор» в конце", "Слова с буквами «ст» в конце", "Слова с буквой «ы»", "Слова с буквой «ь»", "Слова с удвоенными согласными", "Виды спорта", "Вещи в ванной", "Вещи которые вешают на стену", "Вещи которые кладут в карман", "Вещи, которые обычно зеленые", "Вещи, которые обычно красные", "Детские вещи", "Круглые вещи", "Липкие вещи", "Любовь - какая?", "Романтические вещи", "Свадебные вещи"];

let possibleAnswers = {
    // Fill this with your answers
};

let currentCategory;
let currentLetter;
let timer;
let timeRemaining = 60;

document.getElementById("startGame").addEventListener("click", startGame);
document.getElementById("nextRound").addEventListener("click", nextRound);

function startGame() {
    document.getElementById("startGame").classList.add("hidden");
    document.getElementById("gameArea").classList.remove("hidden");
    nextRound();
}

function nextRound() {
    clearInterval(timer);
    timeRemaining = 60;
    document.getElementById("time").innerText = timeRemaining;

    currentCategory = getRandomCategory();
    currentLetter = getRandomLetter(currentCategory);

    document.getElementById("category").innerText = currentCategory;
    document.getElementById("letter").innerText = currentLetter;
    document.getElementById("answers").innerText = possibleAnswers[currentCategory][currentLetter].join(", ");

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById("time").innerText = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert("Время вышло!");
            nextRound();
        }
    }, 1000);
}

function getRandomCategory() {
    return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomLetter(category) {
    const letters = Object.keys(possibleAnswers[category]);
    return letters[Math.floor(Math.random() * letters.length)];
}
