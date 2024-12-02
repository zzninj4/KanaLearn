const hiragana = [
    { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' },
    { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' },
    { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
    { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' },
    { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
    { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' },
    { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
    { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' },
    { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' },
    { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
    { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' },
    { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' },
    { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
];

const katakana = [
    { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' },
    { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' },
    { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' },
    { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' },
    { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' },
    { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' },
    { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' },
    { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' },
    { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' },
    { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' },
    { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' },
    { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' },
    { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' },
    { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' },
    { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' },
    { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' },
    { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' },
    { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' }, { char: 'ン', romaji: 'n' }
];

let currentKanaSet = hiragana;
let currentCharacter;
let previousCharacter = null;
let isHiragana = true;
let hintShown = false;

function getRandomKana() {
    let newCharacter;
    do {
        const randomIndex = Math.floor(Math.random() * currentKanaSet.length);
        newCharacter = currentKanaSet[randomIndex];
    } while (newCharacter === previousCharacter); 
    previousCharacter = newCharacter;
    return newCharacter;
}

function showNextCharacter() {
    currentCharacter = getRandomKana();
    const kanaCard = document.getElementById('kana-card');

    // Сброс текста и подсветки
    kanaCard.innerText = currentCharacter.char;
    kanaCard.classList.remove('correct', 'incorrect'); // Убираем классы подсветки
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = ''; 
    hintShown = false; 
}


function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const resultElement = document.getElementById('result');
    const kanaCard = document.getElementById('kana-card');

    if (userAnswer === currentCharacter.romaji) {
        resultElement.style.color = 'green';
        resultElement.innerText = 'Правильно!!! балдеееж';
        kanaCard.classList.remove('incorrect');
        kanaCard.classList.add('correct');

        setTimeout(showNextCharacter, 3000);
    } else {
        resultElement.style.color = 'red';
        resultElement.innerText = `Неправильна! Правильный ответ: ${currentCharacter.romaji}`;
        kanaCard.classList.remove('correct');
        kanaCard.classList.add('incorrect');
    }

    document.getElementById('answer').value = '';
}


function toggleKana() {
    isHiragana = !isHiragana;
    currentKanaSet = isHiragana ? hiragana : katakana;
    const toggleButton = document.getElementById('toggle-kana-btn');
    toggleButton.innerText = isHiragana ? 'На катакану' : 'На хирагану';
    showNextCharacter();
}

function showHint() {
    const resultElement = document.getElementById('result');
    const romaji = currentCharacter.romaji;
    if (!hintShown) {

        resultElement.innerText = `Подсказка: ${romaji.charAt(0)}`;
        hintShown = true; 

    }
}


window.onload = function() {
    showNextCharacter();
    const toggleButton = document.getElementById('toggle-kana-btn');
    toggleButton.innerText = isHiragana ? 'На катакану' : 'На хирагану';
};