function getTextContentFromBody() {
    const bodyText = document.body.innerText || document.body.textContent;
    return bodyText;
}

function getWordSplit(text) {
    // 영어는 전부 소문자로 바꾸고, 특수문자 제거하고, 공백을 기준으로 나누기
    let wordsArray = text.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
    let wordFe = {};
    wordsArray.forEach(word => {
        if (word) {
            wordFe[word] = (wordFe[word] || 0) + 1;
        }
    });
    return wordFe;
}

// 단어 빈도 정렬, 상위 16개 출력
function getHotWords(wordF, topN = 16) {
    let sortWords = Object.entries(wordF).sort((a, b) => b[1] - a[1]);
    return sortWords.slice(0, topN);
}

// 결과 출력
function displayHotWords() {
    let textContent = getTextContentFromBody();
    let wordFe = getWordSplit(textContent);
    let hotWords = getHotWords(wordFe);
    let hotWordDiv = document.querySelector(".pop-word");
    let spanTag = "";
    hotWords.forEach(([word, frequency]) => {
        spanTag += `<span class="topword" title="${frequency}회">${word}</span>`;
    });
    hotWordDiv.innerHTML = spanTag;
}

displayHotWords();