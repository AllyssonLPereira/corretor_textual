export function accountWords(text) {
    const paragraphs = extractParagraphs(text);
    const count = paragraphs.flatMap((paragraph) => {
        if (!paragraph) return [];
        return checkDuplicateWords(paragraph);
    })

    return count;
}

function extractParagraphs(text) {
    return text.toLowerCase().split("\n");
}

function cleanWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function checkDuplicateWords(text) {
    const listWords = text.split(" ");
    const result = {};

    listWords.forEach(word => {
        if (word.length >= 3) {
            const wordClean = cleanWords(word);
            result[wordClean] = (result[wordClean] || 0) + 1
        }
    });

    return result;
};